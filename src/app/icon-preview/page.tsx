import Image from "next/image";

const ICONS = [
  { name: "Assess", src: "/icons/assess.svg" },
  { name: "Design", src: "/icons/design.svg" },
  { name: "Deliver", src: "/icons/deliver.svg" },
  { name: "Reinforce", src: "/icons/reinforce.svg" },
] as const;

const SIZES = [14, 16, 20, 24] as const;
const SURFACES = [
  {
    name: "Light",
    cellClassName: "bg-white text-text-primary border-border-default",
    tableClassName: "bg-white",
    headingClassName: "text-text-primary",
  },
  {
    name: "Dark",
    cellClassName: "bg-slate-900 text-white border-slate-700",
    tableClassName: "bg-slate-950",
    headingClassName: "text-white",
  },
  {
    name: "Brand Primary",
    cellClassName: "bg-brand-primary text-white border-brand-primary/60",
    tableClassName: "bg-brand-primary/5",
    headingClassName: "text-text-primary",
  },
  {
    name: "Brand Accent",
    cellClassName: "bg-brand-accent text-white border-brand-accent/60",
    tableClassName: "bg-brand-accent/5",
    headingClassName: "text-text-primary",
  },
] as const;

export default function IconPreviewPage() {
  return (
    <section className="container-shell py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-text-primary">Icon Preview</h1>
          <p className="text-sm text-text-secondary">
            Visual QA for front-page process icons at small UI sizes.
          </p>
        </header>

        {SURFACES.map((surface) => (
          <div key={surface.name} className="space-y-3">
            <h2 className={`text-sm font-semibold uppercase tracking-wide ${surface.headingClassName}`}>
              {surface.name}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border-default">
              <table className={`w-full min-w-[620px] border-collapse ${surface.tableClassName}`}>
                <thead>
                  <tr className="border-b border-border-default bg-bg-subtle text-left">
                    <th className="px-4 py-3 text-sm font-medium text-text-primary">Icon</th>
                    {SIZES.map((size) => (
                      <th key={size} className="px-4 py-3 text-sm font-medium text-text-primary">
                        {size}px
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ICONS.map((icon) => (
                    <tr key={`${surface.name}-${icon.src}`} className="border-b border-border-default last:border-b-0">
                      <td className="px-4 py-4 text-sm font-medium text-text-primary">{icon.name}</td>
                      {SIZES.map((size) => (
                        <td key={`${surface.name}-${icon.src}-${size}`} className="px-4 py-4">
                          <div
                            className={`inline-flex items-center justify-center rounded-md border p-2 ${surface.cellClassName}`}
                          >
                            <Image
                              src={icon.src}
                              alt={`${icon.name} icon`}
                              width={size}
                              height={size}
                              className="shrink-0"
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
