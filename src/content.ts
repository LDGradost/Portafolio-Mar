// Editable portfolio content. Update `pages` when a case study is added.
export type ProjectMotif = "network" | "matrix" | "behaviour" | "ecosystem";
export type SectionKey = "mibanco" | "banquero" | "behavioral" | "alimarket";

export const projects: {
  key: SectionKey;
  number: string;
  context?: string;
  chapters: { page: string; title: string }[];
  name: string;
  title: string;
  description: string;
  disciplines: string[];
  pages: string;
  complete: boolean;
  /** Overrides the default status label in the index. */
  status?: string;
  motif: ProjectMotif;
}[] = [
  {
    key: "mibanco",
    number: "01",
    context: "Mibanco, Peru · 2025–2026",
    chapters: [
      { page: "03", title: "The Challenge" },
      { page: "04", title: "Strategic Visioning" },
      { page: "05", title: "Zero-Based Design" },
      { page: "06", title: "Design Research" },
      { page: "07", title: "Research into Design" },
      { page: "08", title: "Outcomes & Reflection" },
    ],
    name: "Mibanco",
    title: "Reimagining Banking for Entrepreneurs",
    description:
      "Reimagining financial services through strategic visioning, human-centred research, and digital autonomy.",
    disciplines: ["Strategic Visioning", "Zero-Based Design", "Design Research"],
    pages: "03–08",
    complete: true,
    motif: "network",
  },
  {
    key: "banquero",
    number: "02",
    chapters: [
      { page: "09", title: "The Challenge" },
      { page: "10", title: "Research Framework" },
      { page: "11", title: "Experience Principles" },
      { page: "12", title: "Desirability" },
      { page: "13", title: "Synthesis & Reflection" },
    ],
    name: "Digital Banker",
    status: "Pilot Launch Upcoming",
    title: "Making Human-Centred AI Measurable",
    description:
      "Translating empathy, desirability, and human-centred design principles into evaluation frameworks for conversational AI.",
    disciplines: ["Human-Centred AI", "Design Research", "Conversational Frameworks"],
    pages: "09–13",
    complete: true,
    motif: "matrix",
  },
  {
    key: "behavioral",
    number: "03",
    context: "Sierra Sun Group, Arequipa, Peru · May–November 2026",
    chapters: [
      { page: "14", title: "The Challenge" },
      { page: "15", title: "Behavioural Diagnosis" },
      { page: "16", title: "Intervention Design" },
      { page: "17", title: "Pilot, Early Outcomes & Reflection" },
    ],
    name: "Behavioral Design",
    status: "Experiment Ongoing",
    title: "Creating Safer Reporting Pathways",
    description:
      "Applying behavioural science to understand and address barriers to workplace sexual harassment reporting.",
    disciplines: ["Behavioural Science", "COM-B", "Intervention Design"],
    pages: "14–17",
    complete: true,
    motif: "behaviour",
  },
  {
    key: "alimarket",
    number: "04",
    context: "Alicorp, Peru · January–December 2022",
    chapters: [
      { page: "18", title: "The Ecosystem Challenge" },
      { page: "19", title: "Research & Human Insights" },
      { page: "20", title: "Service Design & Implementation" },
      { page: "21", title: "Outcomes & Portfolio Closing" },
    ],
    name: "AliMarket",
    title: "Redesigning a Retail Service Ecosystem",
    description:
      "Reimagining service relationships between small retailers, distributors, and suppliers.",
    disciplines: ["Service Design", "Systems Thinking", "Customer Research"],
    pages: "18–21",
    complete: true,
    motif: "ecosystem",
  },
];
