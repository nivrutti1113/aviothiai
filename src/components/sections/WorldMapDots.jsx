import React from 'react';

const BASE = "#2B2D42";   // dark navy
const ACCENT = "#7C3AED"; // purple

// --- Helper: build dots from small "clusters" (each cluster = a tiny rectangle of dots)
function rectDots(x0, y0, w, h, step, c = "base") {
  const dots = [];
  for (let y = y0; y <= y0 + h; y += step) {
    for (let x = x0; x <= x0 + w; x += step) {
      dots.push({ x, y, c });
    }
  }
  return dots;
}

/**
 * This map is a stylized dotted world (not a geo-accurate projection),
 * but it forms clear continent silhouettes like Vara.
 *
 * viewBox is wide: 0 0 900 420
 */
const dots = [
  // -------------------------
  // NORTH AMERICA (stylized)
  // -------------------------
  ...rectDots(90, 120, 140, 40, 14),
  ...rectDots(70, 160, 170, 60, 14),
  ...rectDots(110, 220, 110, 50, 14),
  ...rectDots(150, 270, 60, 35, 14),

  // Greenland-ish
  ...rectDots(210, 70, 60, 35, 14),

  // -------------------------
  // SOUTH AMERICA
  // -------------------------
  ...rectDots(210, 280, 70, 40, 14),
  ...rectDots(235, 320, 55, 70, 14),
  ...rectDots(255, 380, 35, 25, 14),

  // -------------------------
  // EUROPE
  // -------------------------
  ...rectDots(420, 145, 70, 35, 14),
  ...rectDots(450, 185, 70, 35, 14),

  // -------------------------
  // AFRICA
  // -------------------------
  ...rectDots(455, 225, 85, 55, 14),
  ...rectDots(470, 280, 85, 85, 14),
  ...rectDots(500, 365, 45, 35, 14),

  // -------------------------
  // ASIA (big)
  // -------------------------
  ...rectDots(540, 135, 260, 45, 14),
  ...rectDots(520, 180, 290, 70, 14),
  ...rectDots(560, 250, 260, 60, 14),
  ...rectDots(620, 310, 190, 45, 14),

  // Japan-ish
  ...rectDots(815, 220, 35, 35, 14),

  // -------------------------
  // AUSTRALIA
  // -------------------------
  ...rectDots(720, 345, 110, 55, 14),

  // -------------------------
  // Accent highlight clusters (purple)
  // Vara style: small clusters, not blocks
  // -------------------------

  // USA highlight
  ...rectDots(135, 185, 55, 25, 14, "accent"),
  ...rectDots(160, 210, 40, 15, 14, "accent"),

  // Europe highlight
  ...rectDots(450, 165, 30, 15, 14, "accent"),
  ...rectDots(465, 185, 30, 15, 14, "accent"),

  // India highlight
  ...rectDots(650, 265, 40, 25, 14, "accent"),
  ...rectDots(670, 290, 30, 15, 14, "accent"),

  // SE Asia highlight
  ...rectDots(730, 300, 40, 25, 14, "accent"),

  // Australia highlight
  ...rectDots(770, 365, 30, 15, 14, "accent"),
];

const WorldMapDots = ({
  className = "",
}) => {

  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 900 420"
        className="w-full h-auto"
        role="img"
        aria-label="Dotted world map"
      >
        {/* optional soft fade behind like Vara */}
        <defs>
          <radialGradient id="softGlow" cx="70%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#7C3AED" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="900" height="420" fill="url(#softGlow)" />

        {/* dots */}
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={4.2}
            fill={d.c === "accent" ? ACCENT : BASE}
            opacity={d.c === "accent" ? 1 : 0.95}
          />
        ))}
      </svg>
    </div>
  );
};

export default WorldMapDots;