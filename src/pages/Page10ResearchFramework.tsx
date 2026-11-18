import {
  Area,
  Body,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { CASE02_FOOTER, FlowSteps } from "../design-system/evidence";
import { colX, spanW } from "../design-system/grid";

type CardTone = "validated" | "unvalidated";

type FrameworkCard = {
  title: string;
  body?: string;
  tone: CardTone;
};

const stages: {
  name: string;
  answer: string;
  cards: FrameworkCard[];
}[] = [
  {
    name: "Exploration",
    answer: "Is there a conversational opportunity?",
    cards: [
      {
        title: "Identify conversational opportunities",
        body: "Start by asking whether conversation is truly the right channel, not assuming every problem needs a conversational solution",
        tone: "validated",
      },
      {
        title: "Understand the user’s natural language",
        tone: "unvalidated",
      },
      {
        title: "Understand expectations / mental models of AI",
        body: "What people think chatbots / assistants are, what they remember, what they can do, etc.",
        tone: "validated",
      },
      {
        title: "Research trust, privacy and willingness to share data",
        tone: "unvalidated",
      },
      {
        title: "Map the service ecosystem",
        body: "How conversation connects to data, internal systems, tools, channels and people.",
        tone: "unvalidated",
      },
    ],
  },
  {
    name: "Definition",
    answer: "What should it do and not do?",
    cards: [
      {
        title: "Define value, scope, intents and limits",
        body: "User value, AI’s role, risks, etc.",
        tone: "validated",
      },
      {
        title: "Set success criteria upfront",
        body: "What outcomes mean success for business and technology",
        tone: "unvalidated",
      },
    ],
  },
  {
    name: "Design",
    answer: "How should the conversation work?",
    cards: [
      {
        title: "Design conversational architecture",
        body: "Build the decision flow",
        tone: "validated",
      },
      {
        title: "Design language, tone and personality",
        body: "How it should express itself based on context, emotion and severity of the situation.",
        tone: "validated",
      },
    ],
  },
  {
    name: "Validation",
    answer: "Does it work for people and AI?",
    cards: [
      {
        title: "Evaluate end-to-end conversational usability",
        tone: "validated",
      },
      {
        title: "Evaluate Chatbot / CB Agent behavior",
        tone: "validated",
      },
      {
        title: "Keep understanding the user’s natural language",
        tone: "unvalidated",
      },
      {
        title: "Evaluate experience / user metrics",
        tone: "unvalidated",
      },
    ],
  },
  {
    name: "Performance",
    answer: "What should we improve?",
    cards: [
      {
        title: "Evaluate a pilot in a real-world context",
        body: "Measure usage and collect feedback",
        tone: "validated",
      },
      {
        title: "Post-launch experiments",
        body: "A/B testing and model comparisons with different response formats",
        tone: "validated",
      },
      {
        title: "Detect needs and failures",
        body: "Track the product and opportunities throughout its lifecycle",
        tone: "validated",
      },
    ],
  },
];

function BulbIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width={11}
      height={11}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      aria-hidden
    >
      <path d="M5.5 11.2c0-1.1-.9-1.8-1.4-2.7a4.2 4.2 0 1 1 7.8 0c-.5.9-1.4 1.6-1.4 2.7" />
      <path d="M6 12.8h4M6.6 14.3h2.8" strokeLinecap="round" />
    </svg>
  );
}

function ConversationalFrameworkMatrix() {
  return (
    <div
      data-layer="SLIDE_10_REAL_RESEARCH_FRAMEWORK_PLACEHOLDER"
      className="relative flex flex-col justify-between"
      style={{ width: spanW(12), height: 536 }}
    >
      <div className="grid grid-cols-[74px_repeat(5,minmax(0,1fr))] gap-x-3 gap-y-1.5">
        {/* Initiative grouping */}
        <div />
        <div className="rounded bg-forest py-1 text-center text-[11px] font-medium tracking-[0.04em] text-ivory">
          New initiative
        </div>
        <div className="rounded bg-forest py-1 text-center text-[11px] font-medium tracking-[0.04em] text-ivory">
          In development
        </div>
        <div className="col-span-3 rounded bg-forest py-1 text-center text-[11px] font-medium tracking-[0.04em] text-ivory">
          Existing initiative
        </div>

        {/* Stage headers */}
        <div />
        {stages.map((st) => (
          <div
            key={st.name}
            className="rounded bg-sand py-1 text-center text-[11.5px] font-semibold tracking-[0.02em] text-charcoal"
          >
            {st.name}
          </div>
        ))}

        {/* Answers row */}
        <div className="flex items-center justify-center rounded bg-sand/70 px-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-warmgrey">
          Answers
        </div>
        {stages.map((st) => (
          <div
            key={st.name}
            className="flex items-center justify-center rounded border border-charcoal/12 bg-white/80 px-3 py-1.5 text-center text-[10.5px] leading-[1.3] text-charcoal/80"
          >
            {st.answer}
          </div>
        ))}

        {/* Does divider */}
        <div className="flex items-center justify-center rounded bg-sand/70 px-2 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-warmgrey">
          Does
        </div>
        <div className="col-span-5 flex items-center">
          <div className="h-px w-full border-t border-dashed border-charcoal/20" />
        </div>

        {/* Cards per stage */}
        <div />
        {stages.map((st) => (
          <div key={st.name} className="flex flex-col gap-1.5 pt-0.5">
            {st.cards.map((card) => {
              const validated = card.tone === "validated";
              return (
                <div
                  key={card.title}
                  className={`relative ml-2 rounded-r border py-1.5 pl-3.5 pr-2.5 ${
                    validated
                      ? "border-forest/30 border-l-4 border-l-forest bg-[#eef2f0]"
                      : "border-ochre/45 border-l-4 border-l-ochre bg-[#faf4ea]"
                  }`}
                >
                  <span
                    className={`absolute -left-[13px] top-1/2 flex h-[20px] w-[20px] -translate-y-1/2 items-center justify-center rounded-full border border-ivory text-ivory ${
                      validated ? "bg-forest" : "bg-ochre"
                    }`}
                  >
                    <BulbIcon />
                  </span>
                  <div className="text-[10.5px] font-semibold leading-[1.25] text-charcoal">
                    {card.title}
                  </div>
                  {card.body && (
                    <p className="mt-0.5 text-[9.5px] leading-[1.28] text-charcoal/75">
                      {card.body}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Caption + Legend */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-[11.5px] text-warmgrey">
          Research methodology across AI development stages · Original framework developed by the
          author
        </span>
        <div className="flex items-center gap-5 text-[10.5px] text-charcoal/80">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-forest" />
            What is usually validated
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-ochre" />
            What often goes unvalidated
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Page10ResearchFramework() {
  return (
    <Page id="p10" name="10 — Banquero Digital: Conversational Research Framework">
      <Area col={1} span={5} top={64} layer="Text stack">
        <SectionLabel>02 / Research Framework</SectionLabel>
        <div className="mt-7">
          <Headline size={46}>Embedding Human Research into the AI Development Lifecycle</Headline>
        </div>
      </Area>

      <Area col={7} span={6} top={64} layer="Diagram / Five stages">
        <Caption className="mb-4">Fig. 02.1 — Five development stages</Caption>
        <FlowSteps steps={["Explore", "Define", "Design", "Validate", "Analyze"]} />
      </Area>
      <Area col={7} span={4} top={176} layer="Explanation">
        <Body size={14.5}>
          <p>
            An original framework mapping which human research methods apply at each stage of
            conversational AI development — and the decisions each stage should inform. Research
            becomes a continuous input, not a final validation step.
          </p>
        </Body>
      </Area>
      <Area col={11} span={2} top={182} layer="Authorship label">
        <div className="mb-2.5 h-px w-8 bg-ochre" />
        <div className="text-[11px] leading-[1.5] tracking-[0.04em] text-warmgrey">
          Research framework led by Martha Valdez
        </div>
      </Area>

      <Area col={1} span={12} top={280} layer="Conversational research framework">
        <ConversationalFrameworkMatrix />
      </Area>

      <PageFooter left={CASE02_FOOTER} folio="10" />
    </Page>
  );
}
