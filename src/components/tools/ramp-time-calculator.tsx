"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calculator, TrendingDown, Users } from "lucide-react";
import { dispatchAnalyticsEvent } from "@/lib/analytics/dispatch";
import { analyticsEvents } from "@/lib/analytics/events";

/** Average productivity vs full capacity when ramp is linear from 0% to 100% over ramp_weeks. */
const LINEAR_RAMP_CAPACITY_FACTOR = 0.5;

const currency = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

function parsePositive(value: string, fallback: number): number {
  const n = Number.parseFloat(value.replace(/,/g, ""));
  if (!Number.isFinite(n) || n < 0) return fallback;
  return n;
}

function parsePositiveInt(value: string, fallback: number): number {
  const n = Number.parseInt(value.replace(/,/g, ""), 10);
  if (!Number.isFinite(n) || n < 1) return fallback;
  return n;
}

/** Empty or invalid → no annualization. */
function parseOptionalPositive(value: string): number | null {
  const trimmed = value.trim();
  if (trimmed === "") return null;
  const n = Number.parseFloat(trimmed.replace(/,/g, ""));
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

export function RampTimeCalculator() {
  const engagedRef = useRef(false);
  const [cohortSize, setCohortSize] = useState("8");
  const [annualNewHires, setAnnualNewHires] = useState("");
  const [rampWeeks, setRampWeeks] = useState("12");
  const [annualSalary, setAnnualSalary] = useState("52000");
  const [ticketsPerWeek, setTicketsPerWeek] = useState("120");
  const [improvedRampWeeks, setImprovedRampWeeks] = useState("9");

  const metrics = useMemo(() => {
    const n = parsePositiveInt(cohortSize, 8);
    const annualHires = parseOptionalPositive(annualNewHires);
    const rw = parsePositive(rampWeeks, 12);
    const salary = parsePositive(annualSalary, 52_000);
    const tw = parsePositive(ticketsPerWeek, 120);
    const irw = parsePositive(improvedRampWeeks, 9);

    const weeklyPay = salary / 52;
    const rampCostPerWave =
      n * weeklyPay * rw * LINEAR_RAMP_CAPACITY_FACTOR;
    const ticketGapPerWave = n * tw * rw * LINEAR_RAMP_CAPACITY_FACTOR;
    const weeksSaved = Math.max(0, rw - irw);
    const savingsPerWave =
      n * weeklyPay * LINEAR_RAMP_CAPACITY_FACTOR * weeksSaved;

    const wavesPerYear =
      annualHires !== null && n > 0 ? annualHires / n : null;

    const rampCostAnnual =
      wavesPerYear !== null ? rampCostPerWave * wavesPerYear : null;
    const ticketGapAnnual =
      wavesPerYear !== null ? ticketGapPerWave * wavesPerYear : null;
    const potentialSavingsAnnual =
      wavesPerYear !== null && irw <= rw
        ? savingsPerWave * wavesPerYear
        : null;

    return {
      cohortSize: n,
      annualHires,
      wavesPerYear,
      rampWeeks: rw,
      improvedRampWeeks: irw,
      weeklyPay,
      rampCostPerWave,
      ticketGapPerWave,
      weeksSaved,
      savingsPerWave,
      rampCostAnnual,
      ticketGapAnnual,
      potentialSavingsAnnual,
      improvedShort: irw > rw,
    };
  }, [
    cohortSize,
    annualNewHires,
    rampWeeks,
    annualSalary,
    ticketsPerWeek,
    improvedRampWeeks,
  ]);

  useEffect(() => {
    dispatchAnalyticsEvent(analyticsEvents.calculatorView, "ramp_calculator_page");
  }, []);

  function handleFirstInteraction() {
    if (engagedRef.current) return;
    engagedRef.current = true;
    dispatchAnalyticsEvent(analyticsEvents.calculatorEngaged, "ramp_calculator_page");
  }

  return (
    <div className="space-y-8" onPointerDownCapture={handleFirstInteraction}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-text-primary">
            <Users className="h-5 w-5 text-icon" aria-hidden />
            Inputs
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1.5 text-sm">
              <span className="font-medium text-text-primary">
                Cohort size (one onboarding wave)
              </span>
              <Input
                inputMode="numeric"
                value={cohortSize}
                onChange={(e) => setCohortSize(e.target.value)}
                aria-describedby="cohort-size-hint"
              />
              <span id="cohort-size-hint" className="block text-xs text-text-muted">
                People starting together who share this ramp timeline—not total department headcount.
              </span>
            </label>
            <label className="space-y-1.5 text-sm">
              <span className="font-medium text-text-primary">Annual new hires (optional)</span>
              <Input
                inputMode="numeric"
                value={annualNewHires}
                onChange={(e) => setAnnualNewHires(e.target.value)}
                placeholder="e.g. 24"
                aria-describedby="annual-hires-hint"
              />
              <span id="annual-hires-hint" className="block text-xs text-text-muted">
                Total new support hires per year. Used to scale one-wave estimates (annual hires ÷
                cohort size ≈ waves per year).
              </span>
            </label>
            <label className="space-y-1.5 text-sm sm:col-span-2">
              <span className="font-medium text-text-primary">Avg ramp time (weeks)</span>
              <Input
                inputMode="decimal"
                value={rampWeeks}
                onChange={(e) => setRampWeeks(e.target.value)}
              />
            </label>
            <label className="space-y-1.5 text-sm sm:col-span-2">
              <span className="font-medium text-text-primary">Annual salary (£ per person)</span>
              <Input
                inputMode="decimal"
                value={annualSalary}
                onChange={(e) => setAnnualSalary(e.target.value)}
              />
            </label>
            <label className="space-y-1.5 text-sm sm:col-span-2">
              <span className="font-medium text-text-primary">
                Tickets handled per week at full productivity
              </span>
              <Input
                inputMode="decimal"
                value={ticketsPerWeek}
                onChange={(e) => setTicketsPerWeek(e.target.value)}
              />
            </label>
            <label className="space-y-1.5 text-sm sm:col-span-2">
              <span className="font-medium text-text-primary">
                Target ramp after better training (weeks)
              </span>
              <Input
                inputMode="decimal"
                value={improvedRampWeeks}
                onChange={(e) => setImprovedRampWeeks(e.target.value)}
              />
              <span className="block text-xs text-text-muted">
                Compare vs baseline ramp above to estimate savings from shorter ramp.
              </span>
            </label>
          </div>
          <p className="rounded-md border border-border-default bg-bg-subtle px-3 py-2 text-xs text-text-secondary">
            Model assumes productivity rises roughly linearly from 0% to 100% over the ramp window,
            so average capacity vs steady-state is about{" "}
            {Math.round(LINEAR_RAMP_CAPACITY_FACTOR * 100)}%. Annual rows scale one-wave cost by
            (annual new hires ÷ cohort size) as waves per year and do not model overlapping cohorts.
          </p>
        </Card>

        <div className="space-y-4">
          <Card variant="metric" className="space-y-3">
            <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-text-primary">
              <Calculator className="h-5 w-5 text-icon" aria-hidden />
              Ramp cost (estimated)
            </h2>
            <p className="text-3xl font-semibold tracking-tight text-brand-primary md:text-4xl">
              {currency.format(metrics.rampCostPerWave)}
            </p>
            <p className="text-sm text-text-secondary">
              Payroll-weighted opportunity cost for one wave of{" "}
              <strong className="font-semibold text-text-primary">{metrics.cohortSize}</strong>{" "}
              people over{" "}
              <strong className="font-semibold text-text-primary">{metrics.rampWeeks}</strong>{" "}
              weeks at partial productivity (linear ramp assumption).
            </p>
            {metrics.rampCostAnnual !== null && metrics.wavesPerYear !== null ? (
              <div className="border-t border-border-default pt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                  Annual view (scaled)
                </p>
                <p className="mt-1 text-xl font-semibold text-brand-primary md:text-2xl">
                  {currency.format(metrics.rampCostAnnual)}
                </p>
                <p className="text-xs text-text-muted">
                  ≈ {metrics.wavesPerYear.toFixed(1)} onboarding wave
                  {metrics.wavesPerYear === 1 ? "" : "s"}/yr ({metrics.annualHires} hires ÷ cohort{" "}
                  {metrics.cohortSize}). Ignores overlapping cohorts.
                </p>
              </div>
            ) : null}
          </Card>

          <Card className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Throughput gap (directional)
            </h3>
            <p className="text-2xl font-semibold text-text-primary">
              ~{Math.round(metrics.ticketGapPerWave).toLocaleString()} ticket-weeks
            </p>
            <p className="text-sm text-text-secondary">
              Rough equivalent “missing” ticket throughput vs full steady-state over one cohort’s
              ramp window. Use alongside your internal SLA or revenue-per-ticket logic for business
              cases.
            </p>
            {metrics.ticketGapAnnual !== null && metrics.wavesPerYear !== null ? (
              <p className="text-sm text-text-secondary">
                Annualized (~{Math.round(metrics.ticketGapAnnual).toLocaleString()} ticket-weeks):{" "}
                same waves/yr scaling as ramp cost.
              </p>
            ) : null}
          </Card>

          <Card className="space-y-3 border-brand-primary/25 bg-bg-elevated">
            <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-text-primary">
              <TrendingDown className="h-5 w-5 text-state-success" aria-hidden />
              Potential savings (shorter ramp)
            </h2>
            {metrics.improvedShort ? (
              <p className="text-sm text-text-muted">
                Target ramp is longer than baseline—set target ≤ baseline to see savings from
                faster onboarding.
              </p>
            ) : (
              <>
                <p className="text-3xl font-semibold tracking-tight text-state-success md:text-4xl">
                  {currency.format(metrics.savingsPerWave)}
                </p>
                <p className="text-sm text-text-secondary">
                  If training cuts ramp from{" "}
                  <strong className="font-semibold text-text-primary">{metrics.rampWeeks}</strong>{" "}
                  to{" "}
                  <strong className="font-semibold text-text-primary">
                    {metrics.improvedRampWeeks}
                  </strong>{" "}
                  weeks ({metrics.weeksSaved} week{metrics.weeksSaved === 1 ? "" : "s"} saved), same
                  linear productivity curve—per cohort wave above.
                </p>
                {metrics.potentialSavingsAnnual !== null &&
                metrics.wavesPerYear !== null ? (
                  <div className="border-t border-border-default pt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                      Annual savings (scaled)
                    </p>
                    <p className="mt-1 text-xl font-semibold text-state-success md:text-2xl">
                      {currency.format(metrics.potentialSavingsAnnual)}
                    </p>
                  </div>
                ) : null}
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
