import { useEffect, useRef, useState } from "react";
import type { Translation } from "./i18n";
import { Waveform } from "./Hero";
import { VoltaWordmark } from "./Logo";

type SectionProps = { t: Translation };

export function DAWStrip({ t }: SectionProps) {
  const items: { name: string; glyph: string; soon?: boolean }[] = [
    { name: "Ableton Live", glyph: "≡" },
    { name: "Cubase", glyph: "◐" },
    { name: "Logic Pro", glyph: "◇" },
    { name: "Pro Tools", glyph: "◯", soon: true },
    { name: "Studio One", glyph: "△", soon: true },
    { name: "FL Studio", glyph: "▢", soon: true },
  ];
  const Row = () => (
    <div style={{ display: "flex", gap: 64, alignItems: "center" }}>
      {items.map((it, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "var(--fg-3)",
            fontFamily: "var(--mono)",
            fontSize: 13,
            letterSpacing: ".02em",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontSize: 18, color: "var(--fg-2)" }}>{it.glyph}</span>
          <span>{it.name}</span>
          {it.soon && (
            <span
              className="mono"
              style={{
                fontSize: 9,
                color: "var(--accent)",
                border: "1px solid var(--line)",
                padding: "2px 6px",
                borderRadius: 999,
              }}
            >
              SOON
            </span>
          )}
        </div>
      ))}
    </div>
  );
  return (
    <section
      style={{ padding: "32px 0", borderBottom: "1px solid var(--line-soft)" }}
    >
      <div className="container">
        <div
          className="mono"
          style={{ marginBottom: 18, color: "var(--fg-4)" }}
        >
          {t.daw.title}
        </div>
        <div className="marquee">
          <div className="marquee-track">
            <Row />
            <Row />
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntentSection({ t }: SectionProps) {
  return (
    <section
      className="section-tall"
      style={{ padding: "120px 0", borderBottom: "1px solid var(--line-soft)" }}
    >
      <div
        className="container split-2"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1.05fr)",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div>
          <div className="eyebrow">{t.intent.eyebrow}</div>
          <h2 className="serif" style={{ marginTop: 18 }}>
            <span className="uacc">{t.intent.title}</span>
          </h2>
          <p
            style={{
              marginTop: 22,
              color: "var(--fg-2)",
              fontSize: 16,
              maxWidth: 520,
            }}
          >
            {t.intent.body}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "32px 0 0",
              display: "grid",
              gap: 12,
            }}
          >
            {t.intent.bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "var(--fg-2)",
                  fontSize: 14,
                }}
              >
                <span
                  style={{ width: 18, height: 1, background: "var(--accent)" }}
                ></span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="surface surface-pad-lg" style={{ padding: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <div
                className="mono"
                style={{ fontSize: 10, color: "var(--fg-3)", marginBottom: 8 }}
              >
                {t.intent.prompt_label} · 02:14:08
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 14,
                  color: "var(--fg)",
                  padding: "14px 16px",
                  background: "var(--bg-2)",
                  borderLeft: "2px solid var(--fg-3)",
                  borderRadius: "0 6px 6px 0",
                }}
              >
                {t.intent.prompt_value}
              </div>
            </div>
            <div>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: "var(--accent)",
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: "var(--accent)",
                    boxShadow: "0 0 8px var(--accent)",
                  }}
                ></span>
                {t.intent.reply_label} · 02:14:09
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  color: "var(--fg)",
                  padding: "14px 16px",
                  background: "var(--bg-2)",
                  borderLeft: "2px solid var(--accent)",
                  borderRadius: "0 6px 6px 0",
                  lineHeight: 1.6,
                }}
              >
                {t.intent.reply_value}
              </div>
            </div>
            <div
              className="grid-2-cards"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginTop: 4,
              }}
            >
              {[
                { l: "Vox Lead · Comp", v1: "−12.0", v2: "−9.7", unit: "dB" },
                { l: "Vox Lead · EQ 3.4k", v1: "0.0", v2: "+1.2", unit: "dB" },
              ].map((d, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 14px",
                    border: "1px solid var(--line-soft)",
                    borderRadius: 4,
                    background: "var(--bg-2)",
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: "var(--fg-3)",
                      marginBottom: 6,
                    }}
                  >
                    {d.l}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 13,
                      display: "flex",
                      alignItems: "baseline",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--fg-4)",
                        textDecoration: "line-through",
                      }}
                    >
                      {d.v1}
                    </span>
                    <span style={{ color: "var(--fg-3)" }}>→</span>
                    <span style={{ color: "var(--accent)" }}>
                      {d.v2}{" "}
                      <span style={{ color: "var(--fg-3)", fontSize: 11 }}>
                        {d.unit}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MultitrackSection({ t }: SectionProps) {
  const tracks = [
    {
      n: "01",
      name: "Kick In",
      color: "oklch(0.72 0.18 30)",
      changes: [
        { k: "EQ · 60Hz", v: "+1.4 dB" },
        { k: "Sat", v: "+8%" },
      ],
    },
    {
      n: "02",
      name: "Snare Top",
      color: "oklch(0.78 0.18 80)",
      changes: [
        { k: "Comp", v: "ratio 4:1" },
        { k: "EQ · 5k", v: "+0.8 dB" },
      ],
    },
    {
      n: "03",
      name: "OH",
      color: "oklch(0.74 0.16 200)",
      changes: [{ k: "Transient", v: "+12%" }],
    },
    {
      n: "04",
      name: "Bass DI",
      color: "oklch(0.74 0.18 280)",
      changes: [
        { k: "EQ · 120Hz", v: "+1.4 dB" },
        { k: "Comp", v: "atk 18ms" },
      ],
    },
    {
      n: "05",
      name: "Synth Pad",
      color: "oklch(0.76 0.18 320)",
      changes: [{ k: "Reverb", v: "+22% wet" }],
    },
    {
      n: "06",
      name: "Vox Lead",
      color: "oklch(0.88 0.22 130)",
      changes: [
        { k: "Comp", v: "+2.3 dB mu" },
        { k: "EQ · 3.4k", v: "+1.2 dB" },
        { k: "De-ess", v: "—" },
      ],
    },
    {
      n: "07",
      name: "Vox Doubles",
      color: "oklch(0.78 0.22 130)",
      changes: [{ k: "Reverb", v: "−15% wet" }],
    },
    {
      n: "08",
      name: "Master",
      color: "oklch(0.85 0.05 200)",
      changes: [
        { k: "Bus EQ", v: "+0.4 dB tilt" },
        { k: "Tape", v: "15 IPS" },
      ],
    },
  ];
  return (
    <section
      className="section-tall"
      style={{ padding: "120px 0", borderBottom: "1px solid var(--line-soft)" }}
    >
      <div className="container">
        <div
          className="split-2"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1.6fr)",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div
            className="release-sticky"
            style={{ position: "sticky", top: 80 }}
          >
            <div className="eyebrow">{t.multitrack.eyebrow}</div>
            <h2 className="serif" style={{ marginTop: 18 }}>
              {t.multitrack.title}
            </h2>
            <p
              style={{
                marginTop: 22,
                color: "var(--fg-2)",
                fontSize: 16,
                maxWidth: 460,
              }}
            >
              {t.multitrack.body}
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "32px 0 0",
                display: "grid",
                gap: 12,
              }}
            >
              {t.multitrack.bullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "var(--fg-2)",
                    fontSize: 14,
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 1,
                      background: "var(--accent)",
                    }}
                  ></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface" style={{ padding: 0, overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderBottom: "1px solid var(--line-soft)",
                background: "var(--surface-2)",
              }}
            >
              <span className="mono" style={{ fontSize: 10 }}>
                SESSION · 8 / 32 TRACKS · DIFF VIEW
              </span>
              <span
                className="mono"
                style={{ fontSize: 10, color: "var(--accent)" }}
              >
                ● 11 CHANGES
              </span>
            </div>
            <div style={{ display: "grid" }}>
              {tracks.map((tr, i) => (
                <div
                  key={i}
                  className="track-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "44px 140px 1fr 80px",
                    alignItems: "center",
                    borderBottom:
                      i === tracks.length - 1
                        ? "none"
                        : "1px solid var(--line-soft)",
                    padding: "12px 16px",
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    background:
                      i % 2 === 0
                        ? "transparent"
                        : "oklch(0.21 0.014 200 / 0.5)",
                  }}
                >
                  <span style={{ color: "var(--fg-4)" }}>{tr.n}</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      color: "var(--fg)",
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 14,
                        background: tr.color,
                        borderRadius: 1,
                      }}
                    ></span>
                    {tr.name}
                  </span>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {tr.changes.map((c, j) => (
                      <span
                        key={j}
                        style={{
                          display: "inline-flex",
                          gap: 6,
                          padding: "3px 8px",
                          background: "var(--bg-2)",
                          border: "1px solid var(--line-soft)",
                          borderRadius: 3,
                          fontSize: 11,
                        }}
                      >
                        <span style={{ color: "var(--fg-3)" }}>{c.k}</span>
                        <span
                          style={{
                            color:
                              c.v === "—" ? "var(--fg-4)" : "var(--accent)",
                          }}
                        >
                          {c.v}
                        </span>
                      </span>
                    ))}
                  </div>
                  <div
                    className="meter"
                    style={{ justifySelf: "end", height: 12, color: tr.color }}
                  >
                    {Array.from({ length: 6 }).map((_, k) => (
                      <span
                        key={k}
                        style={{
                          background: tr.color,
                          animationDelay: `${(i + k) * 0.05}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderTop: "1px solid var(--line-soft)",
                background: "var(--surface-2)",
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--fg-3)",
              }}
            >
              <span>HOLD ⌥ TO COMPARE A·B</span>
              <span>↵ APPLY ALL · ⇧↵ APPLY SELECTED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CompareSection({ t }: SectionProps) {
  const [pos, setPos] = useState(54);
  const ref = useRef<HTMLDivElement | null>(null);
  const drag = useRef(false);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };
  useEffect(() => {
    const mm = (e: MouseEvent) => drag.current && onMove(e.clientX);
    const tm = (e: TouchEvent) => {
      if (drag.current && e.touches[0]) onMove(e.touches[0].clientX);
    };
    const up = () => {
      drag.current = false;
    };
    window.addEventListener("mousemove", mm);
    window.addEventListener("touchmove", tm);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <section
      className="section-tall"
      style={{ padding: "120px 0", borderBottom: "1px solid var(--line-soft)" }}
    >
      <div className="container">
        <div
          className="split-2"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            alignItems: "end",
            gap: 48,
            marginBottom: 36,
          }}
        >
          <div>
            <div className="eyebrow">{t.compare.eyebrow}</div>
            <h2 className="serif" style={{ marginTop: 18 }}>
              {t.compare.title}
            </h2>
          </div>
          <p
            className="mobile-text-left"
            style={{
              color: "var(--fg-2)",
              fontSize: 16,
              justifySelf: "end",
              maxWidth: 380,
              textAlign: "right",
            }}
          >
            {t.compare.sub}
          </p>
        </div>

        <div
          ref={ref}
          onMouseDown={(e) => {
            drag.current = true;
            onMove(e.clientX);
          }}
          onTouchStart={(e) => {
            drag.current = true;
            if (e.touches[0]) onMove(e.touches[0].clientX);
          }}
          style={{
            position: "relative",
            width: "100%",
            height: 240,
            background: "var(--surface)",
            border: "1px solid var(--line-soft)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            cursor: "ew-resize",
            userSelect: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "var(--fg-4)",
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 10,
                color: "var(--fg-4)",
                marginBottom: 8,
                textAlign: "right",
              }}
            >
              BEFORE · {t.compare.before_label}
            </div>
            <Waveform
              seed={3}
              color="oklch(0.55 0.012 200)"
              dim="oklch(0.42 0.012 200)"
              height={140}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              clipPath: `inset(0 ${100 - pos}% 0 0)`,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "var(--accent)",
              background:
                "linear-gradient(90deg, oklch(0.30 0.05 130 / 0.10), transparent 60%)",
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 10,
                color: "var(--accent)",
                marginBottom: 8,
                textAlign: "left",
              }}
            >
              {t.compare.after_label} · AFTER
            </div>
            <Waveform
              seed={3}
              color="var(--accent)"
              dim="var(--accent-dim)"
              height={140}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${pos}%`,
              transform: "translateX(-50%)",
              width: 1,
              background: "var(--accent)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 36,
                height: 36,
                borderRadius: 999,
                background: "var(--bg)",
                border: "1px solid var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent)",
                boxShadow: "0 0 24px oklch(0.88 0.22 130 / 0.45)",
                fontFamily: "var(--mono)",
                fontSize: 12,
              }}
            >
              ↔
            </div>
          </div>
          <div
            className="mono"
            style={{
              position: "absolute",
              bottom: 12,
              left: 0,
              right: 0,
              textAlign: "center",
              fontSize: 10,
              color: "var(--fg-3)",
            }}
          >
            {t.compare.drag_hint}
          </div>
        </div>

        <div
          className="split-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginTop: 28,
          }}
        >
          <div className="surface" style={{ padding: 24 }}>
            <div
              className="mono"
              style={{ marginBottom: 14, color: "var(--fg-3)" }}
            >
              {t.compare.before_label} · ~ 1H
            </div>
            <ol
              style={{
                paddingLeft: 0,
                margin: 0,
                listStyle: "none",
                display: "grid",
                gap: 10,
              }}
            >
              {t.compare.before_steps.map((s, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    color: "var(--fg-3)",
                    fontSize: 14,
                  }}
                >
                  <span className="mono" style={{ fontSize: 11 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div
            className="surface"
            style={{ padding: 24, borderColor: "var(--accent-dim)" }}
          >
            <div
              className="mono"
              style={{ marginBottom: 14, color: "var(--accent)" }}
            >
              {t.compare.after_label} · ~ 90 SEC
            </div>
            <ol
              style={{
                paddingLeft: 0,
                margin: 0,
                listStyle: "none",
                display: "grid",
                gap: 10,
              }}
            >
              {t.compare.after_steps.map((s, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    color: "var(--fg)",
                    fontSize: 14,
                  }}
                >
                  <span
                    className="mono"
                    style={{ fontSize: 11, color: "var(--accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowSection({ t }: SectionProps) {
  return (
    <section
      id="how"
      className="section-tall"
      style={{ padding: "120px 0", borderBottom: "1px solid var(--line-soft)" }}
    >
      <div className="container">
        <div className="eyebrow">{t.how.eyebrow}</div>
        <h2 className="serif" style={{ marginTop: 18, maxWidth: 720 }}>
          {t.how.title}
        </h2>
        <div
          className="grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            marginTop: 56,
            borderTop: "1px solid var(--line-soft)",
            borderLeft: "1px solid var(--line-soft)",
          }}
        >
          {t.how.steps.map((s, i) => (
            <div
              key={i}
              style={{
                borderRight: "1px solid var(--line-soft)",
                borderBottom: "1px solid var(--line-soft)",
                padding: "28px 24px 36px",
                minHeight: 220,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 28,
                }}
              >
                <span
                  className="mono"
                  style={{ color: "var(--accent)", fontSize: 13 }}
                >
                  {s.n}
                </span>
                <span
                  style={{ width: 28, height: 1, background: "var(--line)" }}
                ></span>
              </div>
              <h3 style={{ marginBottom: 10 }}>{s.t}</h3>
              <p
                style={{ color: "var(--fg-3)", fontSize: 14, lineHeight: 1.55 }}
              >
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CasesSection({ t }: SectionProps) {
  return (
    <section
      className="section-tall"
      style={{ padding: "120px 0", borderBottom: "1px solid var(--line-soft)" }}
    >
      <div className="container">
        <div className="eyebrow">{t.cases.eyebrow}</div>
        <h2 className="serif" style={{ marginTop: 18, maxWidth: 720 }}>
          {t.cases.title}
        </h2>
        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 56,
          }}
        >
          {t.cases.items.map((c, i) => (
            <div
              key={i}
              className="surface"
              style={{
                padding: 28,
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  className="mono"
                  style={{ color: "var(--fg-4)", marginBottom: 14 }}
                >
                  {String(i + 1).padStart(2, "0")} / 03
                </div>
                <h3>{c.t}</h3>
                <p
                  style={{ color: "var(--fg-3)", fontSize: 14, marginTop: 10 }}
                >
                  {c.d}
                </p>
              </div>
              <div
                className="meter"
                style={{ height: 18, color: "var(--accent)" }}
              >
                {Array.from({ length: 14 }).map((_, k) => (
                  <span key={k} style={{ animationDelay: `${k * 0.06}s` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection({ t }: SectionProps) {
  return (
    <section
      id="pricing"
      className="section-tall"
      style={{ padding: "120px 0", borderBottom: "1px solid var(--line-soft)" }}
    >
      <div className="container">
        <div
          className="split-2"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            alignItems: "end",
            gap: 48,
            marginBottom: 56,
          }}
        >
          <div>
            <div className="eyebrow">{t.pricing.eyebrow}</div>
            <h2 className="serif" style={{ marginTop: 18 }}>
              {t.pricing.title}
            </h2>
          </div>
          <p
            className="mobile-text-left"
            style={{
              color: "var(--fg-2)",
              fontSize: 16,
              justifySelf: "end",
              maxWidth: 380,
              textAlign: "right",
            }}
          >
            {t.pricing.sub}
          </p>
        </div>
        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {t.pricing.tiers.map((tier, i) => (
            <div
              key={i}
              className="surface"
              style={{
                padding: 28,
                borderColor: tier.primary
                  ? "var(--accent)"
                  : "var(--line-soft)",
                background: tier.primary
                  ? "oklch(0.30 0.05 130 / 0.06)"
                  : "var(--surface)",
                position: "relative",
              }}
            >
              {tier.primary && (
                <div
                  className="mono"
                  style={{
                    position: "absolute",
                    top: -10,
                    left: 24,
                    padding: "3px 8px",
                    background: "var(--accent)",
                    color: "var(--bg)",
                    fontSize: 10,
                    borderRadius: 3,
                  }}
                >
                  RECOMMENDED
                </div>
              )}
              <div className="mono" style={{ color: "var(--fg-3)" }}>
                {tier.n}
              </div>
              <div
                className="serif"
                style={{
                  fontSize: 44,
                  marginTop: 18,
                  color: tier.primary ? "var(--accent)" : "var(--fg)",
                }}
              >
                {tier.p}
              </div>
              <p style={{ color: "var(--fg-3)", marginTop: 8, fontSize: 13 }}>
                {tier.desc}
              </p>
              <div className="hairline" style={{ margin: "22px 0" }}></div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: 10,
                }}
              >
                {tier.feats.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "20px 1fr",
                      color: "var(--fg-2)",
                      fontSize: 14,
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>+</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`btn ${tier.primary ? "btn-primary" : "btn-ghost"}`}
                style={{
                  marginTop: 28,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                {tier.cta}
                <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ t }: SectionProps) {
  const [open, setOpen] = useState<number>(0);
  return (
    <section
      id="faq"
      className="section-tall"
      style={{ padding: "120px 0", borderBottom: "1px solid var(--line-soft)" }}
    >
      <div
        className="container split-2"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,2fr)",
          gap: 80,
          alignItems: "start",
        }}
      >
        <div className="release-sticky" style={{ position: "sticky", top: 80 }}>
          <div className="eyebrow">{t.faq.eyebrow}</div>
          <h2 className="serif" style={{ marginTop: 18 }}>
            {t.faq.title}
          </h2>
        </div>
        <div style={{ borderTop: "1px solid var(--line-soft)" }}>
          {t.faq.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{ borderBottom: "1px solid var(--line-soft)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "22px 0",
                    background: "transparent",
                    border: "none",
                    color: "var(--fg)",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                    gap: 24,
                    cursor: "pointer",
                    fontFamily: "var(--sans)",
                    fontSize: 17,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span>{it.q}</span>
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--mono)",
                      fontSize: 14,
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height .3s ease",
                  }}
                >
                  <p
                    style={{
                      color: "var(--fg-3)",
                      fontSize: 15,
                      paddingBottom: 22,
                      paddingRight: 40,
                      lineHeight: 1.6,
                    }}
                  >
                    {it.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WaitlistSection({ t }: SectionProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) setSent(true);
  };
  const taken = parseInt(t.cta.seats_taken.replace(/,/g, ""), 10);
  const total = parseInt(t.cta.seats_total.replace(/,/g, ""), 10);
  const pct = (taken / total) * 100;

  return (
    <section
      id="waitlist"
      style={{
        padding: "140px 0",
        borderBottom: "1px solid var(--line-soft)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.18,
          maskImage:
            "radial-gradient(ellipse at 50% 50%, #000 30%, transparent 70%)",
        }}
      />
      <div
        className="container"
        style={{ position: "relative", textAlign: "center", maxWidth: 720 }}
      >
        <h2 className="serif" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
          {t.cta.title}
        </h2>
        <p style={{ marginTop: 18, color: "var(--fg-2)", fontSize: 17 }}>
          {t.cta.sub}
        </p>

        <form
          onSubmit={submit}
          style={{
            marginTop: 36,
            display: "flex",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder={t.cta.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="waitlist-input"
            style={{
              minWidth: 320,
              height: 48,
              padding: "0 16px",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              color: "var(--fg)",
              borderRadius: "var(--radius)",
              fontFamily: "var(--mono)",
              fontSize: 14,
              outline: "none",
            }}
          />
          <button
            className="btn btn-primary"
            style={{ height: 48 }}
            type="submit"
          >
            {sent ? t.cta.sent : t.cta.button}
            <span className="arrow">→</span>
          </button>
        </form>

        <div style={{ maxWidth: 480, margin: "44px auto 0" }}>
          <div
            className="mono"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "var(--fg-3)",
              marginBottom: 8,
            }}
          >
            <span>
              {t.cta.seats_taken} / {t.cta.seats_total}
            </span>
            <span>{t.cta.seats_label}</span>
          </div>
          <div
            style={{
              height: 4,
              background: "var(--surface-2)",
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${pct}%`,
                height: "100%",
                background: "var(--accent)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ t }: SectionProps) {
  return (
    <footer style={{ padding: "72px 0 40px" }}>
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(4, 1fr)",
            gap: 40,
          }}
        >
          <div>
            <VoltaWordmark height={28} />
            <p
              style={{
                marginTop: 18,
                color: "var(--fg-3)",
                fontSize: 13,
                maxWidth: 260,
              }}
            >
              {t.footer.tag}
            </p>
            <div
              className="meter"
              style={{ marginTop: 24, height: 14, color: "var(--accent)" }}
            >
              {Array.from({ length: 16 }).map((_, k) => (
                <span key={k} style={{ animationDelay: `${k * 0.07}s` }} />
              ))}
            </div>
          </div>
          {t.footer.cols.map((col, i) => (
            <div key={i}>
              <div
                className="mono"
                style={{ color: "var(--fg-4)", marginBottom: 14, fontSize: 11 }}
              >
                {col.t}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: 10,
                }}
              >
                {col.l.map((l, j) => (
                  <li key={j}>
                    <a href="#" style={{ color: "var(--fg-2)", fontSize: 13 }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="hairline" style={{ margin: "40px 0 20px" }}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "var(--fg-4)",
            fontFamily: "var(--mono)",
            fontSize: 11,
          }}
        >
          <span>{t.footer.meta}</span>
          <span>VOLTA-1.0.0-BETA · BUILD 26.04.27</span>
        </div>
      </div>
    </footer>
  );
}
