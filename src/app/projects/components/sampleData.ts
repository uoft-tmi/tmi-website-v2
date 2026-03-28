import { Project } from "./types";

export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Explainable Censorship",
    description:
      "Analyzing open-source moderation models to examine how they behave in ambiguous cases. Explores interpretability, calibration, and explanation techniques to improve transparency in automated content moderation using the UC Berkeley Measuring Hate Speech dataset.",
    status: "Active",
    tags: ["Content Moderation", "Interpretability", "Fairness", "Transformers", "NLP"],
    leads: ["Yiping Chen"],
    links: {},
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure1.png",
        alt: "Toxic-BERT flagging accuracy confusion matrix",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure2.png",
        alt: "Mis-classification rate by targeted demographic group",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure3.png",
        alt: "False positives - RoBERTa categories driving over-flagging",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure4.png",
        alt: "False negatives - RoBERTa categories missed",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure5.png",
        alt: "False negatives - harm categories humans identified",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure6.png",
        alt: "Effect of typo frequency on model performance",
      },
    ],
  },
  {
    id: "2",
    title: "Context Based Captioning",
    description:
      "Context-Based Captioning is a high-accuracy, live transcription system designed to master complex STEM terminology through a hybrid multi-stage architecture. By integrating course-specific materials via ModernBERT and Shallow Fusion, the pipeline dynamically biases distil-whisper to ensure technical accuracy in real-time university environments.",
    status: "Active",
    tags: [
      "Accessibility",
      "Explainable AI",
      "Real Time Systems",
      "Ed Tech",
      "Speech Recognition",
      "ASR",
      "NLP",
    ],
    leads: [
      "Christina Xie",
    ],
    advisor: "Steve Engels",
    links: {
      github: "https://github.com/uoft-tmi/context-based-captioning/",
      huggingface: "https://huggingface.co/TMICCProj",
    },
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure1.png",
        alt: "Context Based Captioning figure 1",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure2.png",
        alt: "Context Based Captioning figure 2",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure3.png",
        alt: "Context Based Captioning figure 3",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure4.png",
        alt: "Context Based Captioning figure 4",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure5.png",
        alt: "Context Based Captioning figure 5",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure6.png",
        alt: "Context Based Captioning figure 6",
      },
    ],
  },
  {
    id: "3",
    title: "Machine Unlearning",
    description:
      "Evaluating the performance trade-offs of diverse machine unlearning frameworks by simulating user data removal requests within social media recommender systems.",
    status: "Active",
    tags: ["Machine Unlearning", "Data Privacy", "AI Safety", "GDPR", "Benchmark"],
    leads: ["Seoyun Yang"],
    links: {
      github: "https://github.com/seoyunyang31/machine_unlearning",
      proposal: "https://docs.google.com/document/d/1DOOZNwlPp33dMcIkNiYM5xNLXm147IPjf-WB8COrdZ4/edit?usp=sharing",
      slides: "https://docs.google.com/presentation/d/1pvaj-36cZTPxDmqwFCc6sK4-BkKW7B4ivpam8pDfG54/edit?usp=sharing",
    },
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "/images/projects/machine-unlearning/mu-figure1.png",
        alt: "Machine Unlearning figure 1",
      },
      {
        type: "image",
        src: "/images/projects/machine-unlearning/mu-figure2.png",
        alt: "Machine Unlearning figure 2",
      },
      {
        type: "image",
        src: "/images/projects/machine-unlearning/mu-figure3.png",
        alt: "Machine Unlearning figure 3",
      },
      {
        type: "image",
        src: "/images/projects/machine-unlearning/mu-figure4.png",
        alt: "Machine Unlearning figure 4",
      },
    ],
  },
  {
    id: "4",
    title: "LLM Social Simulation",
    description:
      "Studying collective behavior of LLM agents in multi-agent environments with shared resource constraints. Investigates cooperation vs. collapse dynamics, resource competition, social norm emergence, and governance mechanisms when agents compete over regenerating resources.",
    status: "Active",
    tags: ["Multi-Agent Systems", "LLM Agents", "Social Simulation", "Cooperation", "Game Theory"],
    leads: ["Clementine Yang"],
    links: {},
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "/images/projects/llm-social-simulation/lss-figure1.png",
        alt: "LLM Social Simulation figure 1",
      },
      {
        type: "image",
        src: "/images/projects/llm-social-simulation/lss-figure2.png",
        alt: "LLM Social Simulation figure 2",
      },
      {
        type: "image",
        src: "/images/projects/llm-social-simulation/lss-figure3.png",
        alt: "LLM Social Simulation figure 3",
      },
      {
        type: "image",
        src: "/images/projects/llm-social-simulation/lss-figure4.png",
        alt: "LLM Social Simulation figure 4",
      },
    ],
  },
];
