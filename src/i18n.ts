export type Tier = {
  n: string;
  p: string;
  desc: string;
  feats: string[];
  cta: string;
  primary: boolean;
};

export type FAQItem = { q: string; a: string };
export type CaseItem = { t: string; d: string };
export type HowStep = { n: string; t: string; d: string };
export type FooterCol = { t: string; l: string[] };

export type Translation = {
  nav: {
    product: string;
    how: string;
    pricing: string;
    faq: string;
    login: string;
    waitlist: string;
  };
  hero: {
    pill: string;
    title_a: string;
    title_b: string;
    sub: string;
    cta_primary: string;
    cta_secondary: string;
    caption_demo: string;
    caption_resp: string;
    footnote: string;
  };
  daw: { title: string };
  intent: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    prompt_label: string;
    prompt_value: string;
    reply_label: string;
    reply_value: string;
  };
  multitrack: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
  };
  compare: {
    eyebrow: string;
    title: string;
    sub: string;
    before_label: string;
    after_label: string;
    before_steps: string[];
    after_steps: string[];
    drag_hint: string;
  };
  how: { eyebrow: string; title: string; steps: HowStep[] };
  cases: { eyebrow: string; title: string; items: CaseItem[] };
  pricing: { eyebrow: string; title: string; sub: string; tiers: Tier[] };
  faq: { eyebrow: string; title: string; items: FAQItem[] };
  cta: {
    title: string;
    sub: string;
    placeholder: string;
    button: string;
    sent: string;
    seats_taken: string;
    seats_total: string;
    seats_label: string;
  };
  footer: { tag: string; cols: FooterCol[]; meta: string };
};

export type Lang = "ko" | "en";

export const I18N: Record<Lang, Translation> = {
  ko: {
    nav: {
      product: "프로덕트",
      how: "작동 방식",
      pricing: "가격",
      faq: "FAQ",
      login: "로그인",
      waitlist: "베타 신청",
    },
    hero: {
      pill: "BETA · Q3 2026",
      title_a: "노동집약적인 믹싱은",
      title_b: "여기서 끝납니다",
      sub: "Volta는 Ableton, Cubase, Logic Pro 안에서 함께 일하는 대화형 믹싱 에이전트입니다. 자연어 지시를 이해하고, 트랙과 디바이스 파라미터를 멀티트랙으로 동시에 조정합니다.",
      cta_primary: "베타 웨이트리스트",
      cta_secondary: "데모 보기",
      caption_demo: "프롬프트 예시 — 라이브 데모",
      caption_resp: "Volta가 제안한 변경사항",
      footnote: "Apple Silicon · Windows 11 · 64-bit VST3 / AU / AAX",
    },
    daw: { title: "지원 DAW · Q3 베타" },
    intent: {
      eyebrow: "특장점 01",
      title: "‘더 따뜻하게’를 알아듣습니다.",
      body: "Volta는 자연어로 받은 의도를 신호처리 의사결정으로 풉니다. ‘보컬을 살려줘’ 한마디면 Volta는 컴프레션 비율, EQ 디핑, 새튜레이션, 패닝의 균형을 동시에 조정해 의도를 충족시키는 변경안을 제시합니다.",
      bullets: [
        "자연어 → 신호처리 그래프 매핑",
        "변경안은 항상 미리듣기·롤백 가능",
        "장르·레퍼런스 트랙 컨텍스트 인식",
      ],
      prompt_label: "엔지니어",
      prompt_value: "이 후렴 보컬, 더 가까이 들리게. 시비란스는 그대로 둬.",
      reply_label: "Volta",
      reply_value:
        "Vox Lead에 +2.3 dB makeup, 3.4 kHz +1.2 dB shelf, de-esser는 그대로 두었습니다. 미리듣기 ▸",
    },
    multitrack: {
      eyebrow: "특장점 02",
      title: "트랙·디바이스 파라미터를 멀티트랙으로.",
      body: "단일 노브를 한 번에 하나씩 돌리는 시대는 끝났습니다. Volta는 한 지시 안에서 여러 트랙의 EQ·컴프·새튜레이터·리버브 파라미터를 동시에 일관되게 조정합니다. 결과는 그대로 DAW 안에서 검토하고 커밋하세요.",
      bullets: [
        "트랙 그룹 단위의 일관된 변경",
        "디바이스 체인의 모든 파라미터 인식",
        "Undo / Diff / A·B 비교 내장",
      ],
    },
    compare: {
      eyebrow: "워크플로 비교",
      title: "전과 후.",
      sub: "한 시간짜리 작업이 한 마디로.",
      before_label: "기존 워크플로",
      after_label: "Volta와 함께",
      before_steps: [
        "각 트랙을 솔로로 듣고 문제 지점 메모",
        "EQ 대역 찾고 dB·Q값 미세조정",
        "컴프 비율·어택·릴리즈 반복 조정",
        "버스로 보내고 새튜레이션 점검",
        "리버브 양 다시 잡고 다시 비교",
      ],
      after_steps: [
        "‘후렴 보컬을 더 가깝게’ 한 줄",
        "Volta가 4개 트랙·11개 파라미터 변경안 제시",
        "A/B로 미리듣고, 마음에 들면 커밋",
      ],
      drag_hint: "드래그해서 비교",
    },
    how: {
      eyebrow: "작동 방식",
      title: "DAW 안에서, 4 단계.",
      steps: [
        {
          n: "01",
          t: "익스텐션 설치",
          d: "Ableton·Cubase·Logic Pro에 VST3/AU 익스텐션을 추가합니다. 세션 데이터는 로컬에 머무릅니다.",
        },
        {
          n: "02",
          t: "지시 또는 레퍼런스",
          d: "자연어로 적거나, 레퍼런스 트랙을 끌어다 놓으세요. ‘이 트랙처럼’이면 충분합니다.",
        },
        {
          n: "03",
          t: "변경안 검토",
          d: "Volta는 변경할 트랙·디바이스·파라미터를 Diff로 보여줍니다. 미리듣기와 부분 적용 가능.",
        },
        {
          n: "04",
          t: "커밋 또는 롤백",
          d: "마음에 드는 부분만 채택하세요. 모든 단계는 DAW의 Undo 스택에 그대로 남습니다.",
        },
      ],
    },
    cases: {
      eyebrow: "타겟 사용자",
      title: "프로 엔지니어를 위해 만들었습니다.",
      items: [
        { t: "믹싱 엔지니어", d: "세션 30개·트랙 100개의 일관성을 분 단위로." },
        {
          t: "프로듀서·아티스트",
          d: "데모를 망치지 않고 프리프로덕션을 끌어올립니다.",
        },
        {
          t: "포스트·사운드 디자인",
          d: "내레이션·환경음·이펙트 톤을 한 번에 정렬합니다.",
        },
      ],
    },
    pricing: {
      eyebrow: "가격",
      title: "베타는 무료입니다.",
      sub: "정식 출시 시 베타 사용자에게 평생 50% 할인이 적용됩니다.",
      tiers: [
        {
          n: "Beta",
          p: "무료",
          desc: "Q3 2026 정식 출시 전까지",
          feats: [
            "전체 기능 사용",
            "지원 DAW 3종",
            "디스코드 커뮤니티 액세스",
            "월 5,000 지시 / 사용자",
          ],
          cta: "웨이트리스트 가입",
          primary: true,
        },
        {
          n: "Studio",
          p: "$39 /월",
          desc: "프리랜서·소규모 스튜디오",
          feats: [
            "무제한 지시",
            "세션 다중 동기화",
            "레퍼런스 라이브러리",
            "베타 가입자 평생 −50%",
          ],
          cta: "정식 출시 알림",
          primary: false,
        },
        {
          n: "Facility",
          p: "협의",
          desc: "다인 스튜디오 · 포스트 시설",
          feats: ["로컬 / 사내 모델", "SSO·SAML", "감사 로그", "전담 온보딩"],
          cta: "영업팀 문의",
          primary: false,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "자주 묻는 질문.",
      items: [
        {
          q: "Volta는 무엇인가요?",
          a: "Ableton·Cubase·Logic Pro 안에서 동작하는 대화형 믹싱 에이전트입니다. 자연어 지시를 이해해 트랙과 디바이스 파라미터를 멀티트랙으로 조정합니다.",
        },
        {
          q: "오디오를 새로 만드나요?",
          a: "아니요. Volta는 트랙을 생성하지 않습니다. 이미 세션에 있는 트랙·디바이스의 파라미터만 조정하므로 결과물은 항상 사용자의 세션에 귀속됩니다.",
        },
        {
          q: "오프라인에서도 동작하나요?",
          a: "베타에서는 클라우드 추론을 사용합니다. 정식 출시 시 Apple Silicon 로컬 모드와 시설용 사내 모델 옵션이 제공됩니다.",
        },
        {
          q: "내 세션 데이터는 어떻게 처리되나요?",
          a: "오디오 파일 자체는 업로드하지 않습니다. 분석에는 트랙 메타데이터, 파형 임베딩, 그리고 사용자가 명시적으로 보낸 짧은 스템만 사용됩니다.",
        },
        {
          q: "지원 포맷은요?",
          a: "VST3 / AU / AAX. Apple Silicon, Windows 11 64-bit. M1 이상 권장.",
        },
        {
          q: "환불·취소는요?",
          a: "베타는 무료이며, 정식 출시 후 첫 14일은 무조건 환불됩니다.",
        },
      ],
    },
    cta: {
      title: "다음 세션을 다르게.",
      sub: "Q3 2026 베타에 합류하세요. 1,200명 한정.",
      placeholder: "name@studio.com",
      button: "웨이트리스트 가입",
      sent: "초대 메일을 보냈습니다.",
      seats_taken: "847",
      seats_total: "1,200",
      seats_label: "자리 남음",
    },
    footer: {
      tag: "Volta — 한 지시로 끝나는 믹싱.",
      cols: [
        { t: "프로덕트", l: ["기능", "지원 DAW", "릴리즈 노트", "로드맵"] },
        { t: "회사", l: ["소개", "블로그", "프레스 키트", "채용"] },
        { t: "리소스", l: ["문서", "프롬프트 가이드", "디스코드", "문의"] },
        {
          t: "법적 고지",
          l: ["이용약관", "개인정보처리방침", "보안", "라이선스"],
        },
      ],
      meta: "© 2026 Volta Audio Inc. 서울·베를린.",
    },
  },
  en: {
    nav: {
      product: "Product",
      how: "How it works",
      pricing: "Pricing",
      faq: "FAQ",
      login: "Sign in",
      waitlist: "Join beta",
    },
    hero: {
      pill: "BETA · Q3 2026",
      title_a: "Mixing, without the",
      title_b: "labor.",
      sub: "Volta is a conversational mixing agent that lives inside Ableton, Cubase, and Logic Pro. It reads your intent in plain language and adjusts tracks and device parameters in lockstep — multitrack.",
      cta_primary: "Join the beta",
      cta_secondary: "Watch demo",
      caption_demo: "Live prompt — example",
      caption_resp: "Volta's proposal",
      footnote: "Apple Silicon · Windows 11 · 64-bit VST3 / AU / AAX",
    },
    daw: { title: "Supported DAWs · Q3 beta" },
    intent: {
      eyebrow: "Capability 01",
      title: "It understands “warmer.”",
      body: "Volta translates intent in natural language into signal-processing decisions. Ask for ‘bring the chorus vocal forward’ and Volta balances compression ratio, EQ dipping, saturation, and panning together — in one move.",
      bullets: [
        "Natural language → DSP graph mapping",
        "Always preview & roll back",
        "Aware of genre and reference tracks",
      ],
      prompt_label: "Engineer",
      prompt_value:
        "Bring the chorus vocal forward. Don't touch the sibilance.",
      reply_label: "Volta",
      reply_value:
        "+2.3 dB makeup on Vox Lead, +1.2 dB shelf at 3.4 kHz, de-esser left as-is. Preview ▸",
    },
    multitrack: {
      eyebrow: "Capability 02",
      title: "Tracks & device params, all at once.",
      body: "One knob at a time is over. Volta moves EQs, compressors, saturators, and reverbs across many tracks in a single, coherent change — and shows you the diff before you commit.",
      bullets: [
        "Coherent edits across track groups",
        "Aware of every device in the chain",
        "Built-in Undo / Diff / A·B compare",
      ],
    },
    compare: {
      eyebrow: "Workflow",
      title: "Before & after.",
      sub: "An hour of work, in a single sentence.",
      before_label: "The old way",
      after_label: "With Volta",
      before_steps: [
        "Solo each track, take notes",
        "Hunt for EQ band, fine-tune dB and Q",
        "Iterate compressor ratio, attack, release",
        "Send to bus, check saturation",
        "Re-balance reverb, compare again",
      ],
      after_steps: [
        "“Bring the chorus vocal forward.”",
        "Volta proposes 11 changes across 4 tracks",
        "Preview A/B, commit if you like it",
      ],
      drag_hint: "Drag to compare",
    },
    how: {
      eyebrow: "How it works",
      title: "Inside your DAW, in four steps.",
      steps: [
        {
          n: "01",
          t: "Install the extension",
          d: "Add the VST3/AU extension to Ableton, Cubase, or Logic. Session data stays local.",
        },
        {
          n: "02",
          t: "Prompt or reference",
          d: "Type intent, or drag a reference track. ‘Like this one’ is enough.",
        },
        {
          n: "03",
          t: "Review the diff",
          d: "Volta shows the tracks, devices, and parameters it would touch. Preview and accept partially.",
        },
        {
          n: "04",
          t: "Commit or roll back",
          d: "Take only what you like. Everything sits in your DAW's native undo stack.",
        },
      ],
    },
    cases: {
      eyebrow: "Built for",
      title: "Pros, first.",
      items: [
        {
          t: "Mix engineers",
          d: "Consistency across 30 sessions and 100 tracks — in minutes.",
        },
        {
          t: "Producers & artists",
          d: "Lift pre-production without ruining the demo's vibe.",
        },
        {
          t: "Post & sound design",
          d: "Align dialogue, ambience, and FX in one pass.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Beta is free.",
      sub: "Beta members keep 50% off, for life.",
      tiers: [
        {
          n: "Beta",
          p: "Free",
          desc: "Until Q3 2026 GA",
          feats: [
            "All features",
            "All 3 DAWs",
            "Discord access",
            "5,000 prompts/mo",
          ],
          cta: "Join the waitlist",
          primary: true,
        },
        {
          n: "Studio",
          p: "$39 /mo",
          desc: "Freelancers & small studios",
          feats: [
            "Unlimited prompts",
            "Multi-session sync",
            "Reference library",
            "−50% for beta members",
          ],
          cta: "Notify on launch",
          primary: false,
        },
        {
          n: "Facility",
          p: "Talk to us",
          desc: "Multi-room studios · post",
          feats: [
            "Local / on-prem model",
            "SSO·SAML",
            "Audit logs",
            "Dedicated onboarding",
          ],
          cta: "Contact sales",
          primary: false,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions.",
      items: [
        {
          q: "What is Volta?",
          a: "A conversational mixing agent that runs inside Ableton, Cubase, and Logic Pro. It reads intent in natural language and adjusts tracks and device parameters multitrack.",
        },
        {
          q: "Does it generate audio?",
          a: "No. Volta does not create new tracks. It only adjusts parameters on tracks and devices already in your session, so the result is always yours.",
        },
        {
          q: "Does it work offline?",
          a: "Beta uses cloud inference. At GA we ship an Apple Silicon local mode and an on-prem option for facilities.",
        },
        {
          q: "How is my session data handled?",
          a: "We don't upload audio files. Analysis uses metadata, waveform embeddings, and short stems you explicitly send.",
        },
        {
          q: "Formats?",
          a: "VST3 / AU / AAX, Apple Silicon and Windows 11 64-bit. M1 or newer recommended.",
        },
        {
          q: "Refunds?",
          a: "Beta is free; the first 14 days after GA are no-questions-asked.",
        },
      ],
    },
    cta: {
      title: "Make your next session different.",
      sub: "Join the Q3 2026 beta. 1,200 seats only.",
      placeholder: "name@studio.com",
      button: "Join the waitlist",
      sent: "Invite sent — check your inbox.",
      seats_taken: "847",
      seats_total: "1,200",
      seats_label: "seats left",
    },
    footer: {
      tag: "Volta — mixing in a single sentence.",
      cols: [
        {
          t: "Product",
          l: ["Features", "Supported DAWs", "Release notes", "Roadmap"],
        },
        { t: "Company", l: ["About", "Blog", "Press kit", "Careers"] },
        { t: "Resources", l: ["Docs", "Prompt guide", "Discord", "Contact"] },
        { t: "Legal", l: ["Terms", "Privacy", "Security", "Licenses"] },
      ],
      meta: "© 2026 Volta Audio Inc. Seoul · Berlin.",
    },
  },
};

export function useT(lang: Lang): Translation {
  return I18N[lang] ?? I18N.ko;
}
