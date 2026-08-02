import { ImageResponse } from "next/og";

export const alt =
  "Paws & Tasks — Build better pet habits, five minutes at a time";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#FAF0E6",
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 85% 20%, rgba(255,107,53,0.16), transparent 60%), radial-gradient(ellipse 55% 50% at 10% 85%, rgba(0,128,128,0.14), transparent 55%)",
          color: "#1C3245",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "999px",
              background: "#008080",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            ♥
          </div>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#008080",
              letterSpacing: "-0.02em",
            }}
          >
            Paws & Tasks
          </div>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          Build better pet habits, five minutes at a time.
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#6B7280",
            lineHeight: 1.45,
            maxWidth: "820px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Free Welcome Home starter kit · custom Pathfinder toolkits
        </div>
      </div>
    ),
    { ...size },
  );
}
