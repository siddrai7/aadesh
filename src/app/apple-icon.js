import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12110f",
          color: "#f3efe7",
          fontSize: 92,
          fontStyle: "italic",
          fontFamily: "serif",
          letterSpacing: -6,
          position: "relative",
        }}
      >
        AS
        <div style={{ position: "absolute", top: 30, right: 30, width: 16, height: 16, borderRadius: 8, background: "#c4502a" }} />
      </div>
    ),
    size
  );
}
