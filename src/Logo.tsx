type MarkProps = { size?: number; color?: string };

export function VoltaMark({ size = 28, color = "currentColor" }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-label="Volta"
    >
      <path
        d="M5 8 L5 24 M5 8 L11 8"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="square"
      />
      <path
        d="M27 8 L27 24 M27 8 L21 8"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="square"
      />
      <path
        d="M14 11 L16 10 L16 22"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <circle cx="20" cy="22" r="1" fill={color} />
    </svg>
  );
}

type WordmarkProps = { height?: number; color?: string };

export function VoltaWordmark({
  height = 22,
  color = "currentColor",
}: WordmarkProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 8,
        fontFamily: "var(--serif)",
        fontSize: height,
        lineHeight: 1,
        letterSpacing: "-0.01em",
        color,
      }}
    >
      <span
        style={{
          opacity: 0.55,
          fontFamily: "var(--mono)",
          fontSize: height * 0.55,
          transform: "translateY(-2px)",
        }}
      >
        ⌐
      </span>
      <span>Volta</span>
      <span
        style={{
          opacity: 0.55,
          fontFamily: "var(--mono)",
          fontSize: height * 0.55,
          transform: "translateY(-2px) scaleX(-1)",
        }}
      >
        ⌐
      </span>
    </span>
  );
}
