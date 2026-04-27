import { useEffect, useState } from "react";
import { VoltaMark, VoltaWordmark } from "./Logo";
import { Hero } from "./Hero";
import {
  DAWStrip,
  IntentSection,
  MultitrackSection,
  CompareSection,
  HowSection,
  CasesSection,
  PricingSection,
  FAQSection,
  WaitlistSection,
  Footer,
} from "./Sections";
import type { Lang, Translation } from "./i18n";
import { useT } from "./i18n";

type NavProps = { t: Translation; lang: Lang; setLang: (l: Lang) => void };

function Nav({ t, lang, setLang }: NavProps) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "color-mix(in oklch, var(--bg), transparent 30%)",
        borderBottom: "1px solid var(--line-soft)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "var(--fg)",
          }}
        >
          <VoltaMark size={24} />
          <VoltaWordmark height={20} />
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 13,
            color: "var(--fg-2)",
          }}
        >
          <a href="#how">{t.nav.how}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "inline-flex",
              border: "1px solid var(--line)",
              borderRadius: 999,
              overflow: "hidden",
              fontFamily: "var(--mono)",
              fontSize: 11,
            }}
          >
            {(["ko", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: "5px 12px",
                  border: "none",
                  cursor: "pointer",
                  background: lang === l ? "var(--fg)" : "transparent",
                  color: lang === l ? "var(--bg)" : "var(--fg-2)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#"
            className="btn btn-ghost"
            style={{ height: 36, padding: "0 12px" }}
          >
            {t.nav.login}
          </a>
          <a
            href="#waitlist"
            className="btn btn-primary"
            style={{ height: 36 }}
          >
            {t.nav.waitlist}
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

const LANG_STORAGE_KEY = "volta.lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "ko";
  const qs = new URLSearchParams(window.location.search).get("lang");
  if (qs === "ko" || qs === "en") return qs;
  const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === "ko" || saved === "en") return saved;
  const nav = window.navigator.language || "";
  return nav.toLowerCase().startsWith("ko") ? "ko" : "en";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(detectInitialLang);
  const t = useT(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-theme", "dark");
    document.title =
      lang === "ko"
        ? "Volta — DAW 안의 대화형 믹싱 에이전트"
        : "Volta — Conversational Mixing for Pros";
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
      const url = new URL(window.location.href);
      if (lang === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      window.history.replaceState(null, "", url.toString());
    } catch {
      /* ignore storage / URL errors */
    }
  }, [lang]);

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} lang={lang} />
      <DAWStrip t={t} />
      <IntentSection t={t} />
      <MultitrackSection t={t} />
      <CompareSection t={t} />
      <HowSection t={t} />
      <CasesSection t={t} />
      <PricingSection t={t} />
      <FAQSection t={t} />
      <WaitlistSection t={t} />
      <Footer t={t} />
    </>
  );
}
