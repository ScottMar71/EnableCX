import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "EnableCX — SaaS, CCaaS, and UCaaS training";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fffdf8 0%, #f7f3ed 45%, #e7dfd2 100%)",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#0f766e",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          EnableCX
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#374151",
            marginTop: 28,
            maxWidth: 880,
            lineHeight: 1.35,
            fontWeight: 500,
          }}
        >
          Practical SaaS, CCaaS, and UCaaS training that improves adoption, confidence, and customer
          outcomes.
        </div>
      </div>
    ),
    { ...size },
  );
}
