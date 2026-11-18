import {
  Area,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { CASE04_FOOTER } from "../design-system/evidence";
import { colX, spanW } from "../design-system/grid";
import sellerTrainingPhoto from "../assets/alimarket-seller-training.jpg";

type Lane = {
  name: string;
  steps: { label: string; col: number; human?: boolean }[];
  tone: string;
};

const lanes: Lane[] = [
  {
    name: "Customer actions",
    tone: "bg-white border-charcoal/30 text-charcoal",
    steps: [
      "Recognize need",
      "Browse products",
      "Place order",
      "Track order",
      "Receive delivery",
    ].map((label, i) => ({ label, col: i + 1 })),
  },
  {
    name: "Frontstage interactions",
    tone: "bg-forest border-forest text-ivory",
    steps: [
      { label: "Alimarket app", col: 2 },
      { label: "Order confirmation", col: 3 },
      { label: "Order status", col: 4 },
      { label: "Human assistance when needed", col: 5, human: true },
    ],
  },
  {
    name: "Backstage operations",
    tone: "bg-sand border-sage text-charcoal",
    steps: [
      { label: "Order processing", col: 2 },
      { label: "Distributor coordination", col: 3 },
      { label: "Fulfilment", col: 4 },
      { label: "Delivery management", col: 5 },
    ],
  },
  {
    name: "Supporting systems & people",
    tone: "bg-ivory border-charcoal/30 border-dashed text-charcoal",
    steps: [
      "Technology",
      "Business operations",
      "Exclusive distributors",
      "Sales support",
      "Logistics",
    ].map((label, i) => ({ label, col: i + 1 })),
  },
];
const separators = ["Line of interaction", "Line of visibility", "Line of internal interaction"];

function Blueprint() {
  return (
    <div data-layer="Diagram / Service blueprint reconstruction">
      {lanes.map((lane, li) => (
        <div key={lane.name}>
          <div
            data-layer={`Lane / ${lane.name}`}
            className="grid h-[86px] grid-cols-[150px_1fr] items-center"
          >
            <div className="pr-4 text-[10.5px] font-semibold uppercase leading-[1.35] tracking-[0.14em] text-charcoal">
              <span className="mr-2 font-serif text-[13px] normal-case tracking-normal text-ochre">
                {String(li + 1).padStart(2, "0")}
              </span>
              {lane.name}
            </div>
            <div className="relative grid h-full grid-cols-5 items-center gap-3">
              <div
                className="absolute top-1/2 h-px bg-charcoal/25"
                style={{ left: `${((lane.steps[0].col - 1) / 5) * 100}%`, right: "10%" }}
              />
              {lane.steps.map((s) => (
                <div
                  key={s.label}
                  data-component="DiagramNode"
                  data-layer={`Step / ${s.label}`}
                  className={`relative flex h-[54px] items-center justify-center border px-2 text-center text-[12px] leading-[1.25] ${s.human ? "border-ochre bg-ivory text-charcoal" : lane.tone}`}
                  style={{ gridColumn: s.col }}
                >
                  {s.human && (
                    <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-ochre" />
                  )}
                  {s.label}
                </div>
              ))}
            </div>
          </div>
          {li < separators.length && (
            <div className="flex items-center gap-3 pl-[150px]">
              <span className="flex-1 border-t border-dashed border-charcoal/35" />
              <span className="text-[10px] uppercase tracking-[0.16em] text-warmgrey">
                {separators[li]}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const product = [
  { name: "Ordering", text: "Retailers could independently submit product orders." },
  { name: "Loyalty", text: "Customers could redeem points through the application." },
  { name: "Order visibility", text: "Retailers could track their orders." },
];
const confidence = [
  "Larger, more legible typography",
  "Interfaces suited to small screens and mid-range devices",
  "Progress indicators and reassuring feedback",
  "Gamified elements supporting confidence and engagement",
  "Price incentives for ordering through the app",
  "Continued human support where needed",
];
const notes = [
  {
    title: "Redefining the salesperson’s role",
    text: "Selected high-performing representatives could move from collecting orders to supporting and supervising stores — requiring collaboration with distribution stakeholders and attention to changing responsibilities.",
  },
  {
    title: "Behind the interface",
    text: "Digital processes for order management and distribution workflows replaced coordination that had depended heavily on manual effort across technology, business, operations, and logistics.",
  },
  {
    title: "My contribution",
    text: "User insights, co-creation facilitation, service experience mapping, and prototype validation. Product design, technical implementation, and deployment were delivered collaboratively by the relevant teams.",
  },
];

export default function Page20AlimarketService() {
  return (
    <Page id="p20" name="20 — Alimarket: Service Design & Implementation">
      <Area col={1} span={6} top={64} layer="Text stack">
        <SectionLabel>03 / Service Design &amp; Implementation</SectionLabel>
        <div className="mt-7">
          <Headline size={46}>Digitizing the Ecosystem, Not Just the Ordering Interface</Headline>
        </div>
      </Area>
      <Area col={8} span={5} top={100} layer="Editorial statement">
        <p className="font-serif text-[21px] italic leading-[1.32] text-forest">
          Meaningful service innovation required coordinating human roles, digital interactions, and
          logistics behind the screen.
        </p>
      </Area>

      <Area col={1} span={9} top={244} layer="Blueprint">
        <Caption className="mb-2">
          Fig. 03.1 — Conceptual reconstruction of the redesigned service ecosystem.
        </Caption>
        <Blueprint />
      </Area>

      <Area col={1} span={9} top={724} layer="Notes">
        <div className="grid grid-cols-3 gap-6 border-t border-charcoal/80 pt-3">
          {notes.map((n) => (
            <div key={n.title}>
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal">
                {n.title}
              </div>
              <p className="mt-1.5 text-[12px] leading-[1.45] text-charcoal/75">{n.text}</p>
            </div>
          ))}
        </div>
      </Area>

      <Area col={10} span={3} top={244} layer="Implemented product">
        <Caption>Implemented product</Caption>
        <ul className="mt-2">
          {product.map((p) => (
            <li key={p.name} className="border-t border-charcoal/15 py-2">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">
                {p.name}
              </div>
              <div className="mt-0.5 text-[12.5px] leading-[1.4] text-charcoal/80">{p.text}</div>
            </li>
          ))}
        </ul>
        <Caption className="mt-4">Designing for confidence · research informed</Caption>
        <ul className="mt-2 space-y-1 border-t border-charcoal/15 pt-2">
          {confidence.map((c) => (
            <li key={c} className="flex gap-2 text-[12px] leading-[1.4] text-charcoal/80">
              <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-ochre" />
              {c}
            </li>
          ))}
        </ul>
      </Area>

      <figure
        data-layer="SLIDE_20_OPTIONAL_PRODUCT_EVIDENCE"
        className="absolute"
        style={{ left: colX(10), width: spanW(3), top: 632, height: 176 }}
      >
        <div className="absolute inset-0 overflow-hidden border border-sage bg-sand">
          <img
            src={sellerTrainingPhoto}
            alt="Training and sensitization workshop with sales representatives on using Alimarket and transitioning to their new role"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 46%" }}
          />
        </div>
        <figcaption className="absolute left-0 right-0 top-full mt-2 text-[11px] leading-[1.35] text-warmgrey">
          Sales representative training on using the tool and adapting to their new role.
        </figcaption>
      </figure>

      <PageFooter left={CASE04_FOOTER} folio="20" />
    </Page>
  );
}
