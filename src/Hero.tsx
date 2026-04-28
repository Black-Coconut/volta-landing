import { useEffect, useMemo, useState } from "react";
import type { Lang, Translation } from "./i18n";

type HeroPrompt = {
  p: string;
  tracks: { name: string; device: string; delta: string }[];
};

const HERO_PROMPTS: Record<Lang, HeroPrompt[]> = {
  ko: [
    {
      p: "이 후렴 보컬, 더 가까이 들리게. 시비란스는 그대로 둬.",
      tracks: [
        { name: "Vox Lead", device: "Comp · 1176", delta: "+2.3 dB makeup" },
        { name: "Vox Lead", device: "EQ · Pro-Q3", delta: "+1.2 dB @ 3.4 kHz" },
        { name: "Vox Doubles", device: "Reverb", delta: "−15% wet" },
        { name: "Vox Lead", device: "De-esser", delta: "no change" },
      ],
    },
    {
      p: "드럼 버스를 더 펀치 있게. 킥은 더 둥글게.",
      tracks: [
        { name: "Drum Bus", device: "Glue Comp", delta: "ratio 4:1, atk 30ms" },
        { name: "Kick In", device: "EQ", delta: "−1.8 dB @ 400 Hz" },
        { name: "Kick Sub", device: "Saturator", delta: "+8% drive" },
        { name: "OH", device: "Transient", delta: "+12% attack" },
      ],
    },
    {
      p: "전체 믹스를 LP “Currents”처럼 따뜻하게.",
      tracks: [
        { name: "Master", device: "Tape", delta: "15 IPS, +0.6 dB" },
        { name: "Bass DI", device: "EQ", delta: "+1.4 dB @ 120 Hz" },
        { name: "Synth Pad", device: "Reverb", delta: "+22% wet, plate" },
        { name: "Master", device: "Bus EQ", delta: "+0.4 dB tilt" },
      ],
    },
  ],
  en: [
    {
      p: "Bring the chorus vocal forward. Don't touch sibilance.",
      tracks: [
        { name: "Vox Lead", device: "Comp · 1176", delta: "+2.3 dB makeup" },
        { name: "Vox Lead", device: "EQ · Pro-Q3", delta: "+1.2 dB @ 3.4 kHz" },
        { name: "Vox Doubles", device: "Reverb", delta: "−15% wet" },
        { name: "Vox Lead", device: "De-esser", delta: "no change" },
      ],
    },
    {
      p: "Punchier drum bus. Rounder kick.",
      tracks: [
        { name: "Drum Bus", device: "Glue Comp", delta: "ratio 4:1, atk 30ms" },
        { name: "Kick In", device: "EQ", delta: "−1.8 dB @ 400 Hz" },
        { name: "Kick Sub", device: "Saturator", delta: "+8% drive" },
        { name: "OH", device: "Transient", delta: "+12% attack" },
      ],
    },
    {
      p: "Warm the master like Tame Impala's Currents.",
      tracks: [
        { name: "Master", device: "Tape", delta: "15 IPS, +0.6 dB" },
        { name: "Bass DI", device: "EQ", delta: "+1.4 dB @ 120 Hz" },
        { name: "Synth Pad", device: "Reverb", delta: "+22% wet, plate" },
        { name: "Master", device: "Bus EQ", delta: "+0.4 dB tilt" },
      ],
    },
  ],
};

export function waveformPath(
  seed: number,
  width: number,
  height: number,
  samples = 240,
) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const mid = height / 2;
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < samples; i++) {
    const x = (i / (samples - 1)) * width;
    const env = 0.35 + 0.65 * Math.sin((i / samples) * Math.PI);
    const a = (rand() * 2 - 1) * env * (height * 0.42);
    points.push({ x, y: mid + a });
  }
  let top = `M0 ${mid} `;
  for (const p of points) top += `L${p.x.toFixed(1)} ${p.y.toFixed(1)} `;
  top += `L${width} ${mid} Z`;
  let bottom = `M0 ${mid} `;
  for (const p of points)
    bottom += `L${p.x.toFixed(1)} ${(2 * mid - p.y).toFixed(1)} `;
  bottom += `L${width} ${mid} Z`;
  return { top, bottom };
}

type WaveformProps = {
  width?: number;
  height?: number;
  seed?: number;
  color: string;
  dim?: string;
};

export function Waveform({
  width = 720,
  height = 96,
  seed = 7,
  color,
  dim,
}: WaveformProps) {
  const { top, bottom } = useMemo(
    () => waveformPath(seed, width, height),
    [seed, width, height],
  );
  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      <path d={top} fill={color} opacity="0.95" />
      <path d={bottom} fill={dim || color} opacity="0.5" />
      <line
        x1="0"
        y1={height / 2}
        x2={width}
        y2={height / 2}
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
    </svg>
  );
}

type Phase = "typing" | "reveal" | "hold" | "next";

type HeroProps = { t: Translation; lang: Lang };

export function Hero({ t, lang }: HeroProps) {
  const list = HERO_PROMPTS[lang] || HERO_PROMPTS.ko;
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    setIdx(0);
    setTyped("");
    setPhase("typing");
  }, [lang]);

  useEffect(() => {
    const target = list[idx].p;
    if (phase === "typing") {
      if (typed.length < target.length) {
        const tm = setTimeout(
          () => setTyped(target.slice(0, typed.length + 1)),
          28 + Math.random() * 30,
        );
        return () => clearTimeout(tm);
      }
      const tm = setTimeout(() => setPhase("reveal"), 350);
      return () => clearTimeout(tm);
    }
    if (phase === "reveal") {
      const tm = setTimeout(() => setPhase("hold"), 1100);
      return () => clearTimeout(tm);
    }
    if (phase === "hold") {
      const tm = setTimeout(() => setPhase("next"), 4200);
      return () => clearTimeout(tm);
    }
    if (phase === "next") {
      const tm = setTimeout(() => {
        setTyped("");
        setIdx((i) => (i + 1) % list.length);
        setPhase("typing");
      }, 220);
      return () => clearTimeout(tm);
    }
  }, [phase, typed, idx, list]);

  const cur = list[idx];
  const showProposal = phase === "reveal" || phase === "hold";

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--line-soft)",
      }}
    >
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.25,
          maskImage:
            "radial-gradient(ellipse at 70% 30%, #000 30%, transparent 70%)",
        }}
      />
      <div
        className="container hero-pad"
        style={{ position: "relative", paddingTop: 88, paddingBottom: 88 }}
      >
        <div
          className="split-2"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1.05fr)",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div className="pill" style={{ marginBottom: 28 }}>
              <span className="dot"></span>
              {t.hero.pill}
            </div>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(48px, 6.4vw, 88px)",
                lineHeight: 1.0,
                letterSpacing: "-0.025em",
              }}
            >
              {t.hero.title_a}
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                {t.hero.title_b}
              </em>
            </h1>
            <p
              className="mobile-fluid"
              style={{
                marginTop: 24,
                color: "var(--fg-2)",
                fontSize: 17,
                maxWidth: 520,
                lineHeight: 1.55,
              }}
            >
              {t.hero.sub}
            </p>
            <div
              className="hero-cta-row"
              style={{
                display: "flex",
                gap: 10,
                marginTop: 36,
                alignItems: "center",
              }}
            >
              <a href="#waitlist" className="btn btn-primary">
                {t.hero.cta_primary}
                <span className="arrow">→</span>
              </a>
              <a href="#demo" className="btn btn-ghost">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 2 L11 7 L3 12 Z" fill="currentColor" />
                </svg>
                {t.hero.cta_secondary}
              </a>
            </div>
            <div
              className="mono"
              style={{ marginTop: 56, color: "var(--fg-4)", fontSize: 11 }}
            >
              {t.hero.footnote}
            </div>
          </div>

          <div
            className="surface"
            style={{
              position: "relative",
              padding: 0,
              overflow: "hidden",
              boxShadow: "0 30px 80px -30px rgba(0,0,0,.6)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderBottom: "1px solid var(--line-soft)",
                background: "var(--surface-2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: "oklch(0.55 0.10 30)",
                  }}
                ></span>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: "oklch(0.65 0.12 80)",
                  }}
                ></span>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: "var(--accent-dim)",
                  }}
                ></span>
                <span className="mono" style={{ marginLeft: 10, fontSize: 10 }}>
                  volta · session “Track 03 — Mix v14.als”
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  className="mono"
                  style={{ fontSize: 10, color: "var(--fg-3)" }}
                >
                  120.0 BPM
                </span>
                <div className="meter" style={{ height: 10 }}>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.07}s` }} />
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: "16px 16px 4px", color: "var(--accent)" }}>
              <div
                className="mono"
                style={{
                  color: "var(--fg-3)",
                  fontSize: 10,
                  marginBottom: 6,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>VOX LEAD · 02:14 → 02:38 (CHORUS)</span>
                <span>−6.2 LUFS</span>
              </div>
              <Waveform
                seed={11 + idx * 7}
                color="var(--accent)"
                dim="var(--accent-dim)"
                height={86}
              />
            </div>

            <div
              style={{
                padding: "8px 16px 16px",
                borderBottom: "1px solid var(--line-soft)",
              }}
            >
              <div
                className="mono"
                style={{ fontSize: 10, color: "var(--fg-3)", marginBottom: 6 }}
              >
                {t.hero.caption_demo}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  color: "var(--fg)",
                  minHeight: 44,
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "var(--fg-4)" }}>›&nbsp;</span>
                <span>{typed}</span>
                {phase === "typing" && <span className="blink"></span>}
              </div>
            </div>

            <div style={{ padding: 16, minHeight: 192 }}>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: "var(--fg-3)",
                  marginBottom: 10,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{t.hero.caption_resp}</span>
                <span style={{ color: "var(--accent)" }}>
                  {showProposal ? `${cur.tracks.length} CHANGES` : "—"}
                </span>
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                {cur.tracks.map((tr, i) => (
                  <div
                    key={i}
                    className="proposal-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "120px 1fr auto",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 12px",
                      borderRadius: 4,
                      background: "var(--bg-2)",
                      border: "1px solid var(--line-soft)",
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      opacity: showProposal ? 1 : 0,
                      transform: showProposal
                        ? "translateY(0)"
                        : "translateY(6px)",
                      transition: `opacity .35s ease ${i * 0.08}s, transform .35s ease ${i * 0.08}s`,
                    }}
                  >
                    <span style={{ color: "var(--fg)" }}>{tr.name}</span>
                    <span style={{ color: "var(--fg-3)" }}>{tr.device}</span>
                    <span
                      style={{
                        color: tr.delta.includes("no change")
                          ? "var(--fg-4)"
                          : "var(--accent)",
                      }}
                    >
                      {tr.delta}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 14px",
                borderTop: "1px solid var(--line-soft)",
                background: "var(--surface-2)",
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: "var(--fg-3)",
              }}
            >
              <span>↵ APPLY · A/B PREVIEW · ⌘Z UNDO</span>
              <span style={{ color: "var(--accent)" }}>● READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
