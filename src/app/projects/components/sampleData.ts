import { Project } from "./types";

export const sampleProjects: Project[] = [
  // 26/27 projects
  {
    id: "5",
    title: "LLM Sycophancy Mitigation",
    description:
      "LLMs can change correct answers simply because users push back. How can we stop AI from blindly agreeing without making it less helpful or accurate?",
    status: "Active",
    tags: ["LLMs", "Sycophancy", "Alignment", "Robustness"],
    leads: [],
    links: {
      proposal:
        "https://docs.google.com/document/d/18ixg4s_yK7XIg57KUF7iQx4igkmsfxPke4AEb0am4Wk/edit?usp=sharing",
    },
    media: [{ type: "overview" }],
  },
  {
    id: "6",
    title: "Socratic AI Tutor",
    description:
      "How can we build an AI tutor that helps students solve problems without solving them for them?",
    status: "Active",
    tags: ["AI in Education", "LLMs", "Human-AI Interaction"],
    leads: [],
    links: {
      proposal:
        "https://docs.google.com/document/d/1rL0hzYbRthrpLczFMHq1yX5OD7W0vqo5eatygBtXl1A/edit?usp=sharing",
    },
    media: [{ type: "overview" }],
  },
  {
    id: "7",
    title: "Whiteboxing LLM Behaviour",
    description:
      "What happens inside an LLM before it produces a harmful response? Can we detect the warning signs hidden in its internal activations?",
    status: "Active",
    tags: ["Interpretability", "LLMs", "AI Safety"],
    leads: [],
    links: {},
    media: [{ type: "overview" }],
  },
  {
    id: "8",
    title: "Synthetic Data Screening",
    description:
      "Not all synthetic training data is created equal. What makes synthetic data trustworthy enough to train AI?",
    status: "Active",
    tags: ["Synthetic Data", "Data Quality", "Responsible AI"],
    leads: [],
    links: {
      proposal:
        "https://docs.google.com/document/d/1wGd7tVCHAJ8ntJD-n_MAHbqc8EWJhJi_ZhhxXn36Lj0/edit?usp=sharing",
    },
    media: [{ type: "overview" }],
  },
  {
    id: "9",
    title: "Uncertainty-Aware RAG",
    description:
      "What if AI could decide not only what to answer, but whether its evidence is good enough to answer at all?",
    status: "Active",
    tags: ["RAG", "Uncertainty", "LLMs", "Reliability"],
    leads: [],
    links: {
      proposal:
        "https://docs.google.com/document/d/1oxy9txFOXoEpWfCnNlQ8bOCk9ruSjBrhTLEzDjnRIPk/edit?usp=sharing",
    },
    media: [{ type: "overview" }],
  },
  {
    id: "10",
    title: "Copyright Safeguarding",
    description:
      "AI promises copyright protection. Can we put those safeguards to the test and make them stronger?",
    status: "Active",
    tags: ["Copyright", "AI Safety", "Generative AI"],
    leads: [],
    links: {},
    media: [{ type: "overview" }],
  },
  {
    id: "11",
    title: "Privacy-Preserving LLM Gateway",
    description:
      "How can we protect sensitive data while preserving the usefulness of LLM responses?",
    status: "Active",
    tags: ["Privacy", "LLMs", "Data Protection"],
    leads: [],
    links: {
      proposal:
        "https://docs.google.com/document/d/1oDY23HJIKzhTuS8ukdYnuBkjADiQgc19OZtcNxqMAf0/edit?usp=sharing",
    },
    media: [{ type: "overview" }],
  },
  // Past projects
  {
    id: "1",
    title: "Explainable Censorship",
    description:
      "Analyzing open-source moderation models to examine how they behave in ambiguous cases. Explores interpretability, calibration, and explanation techniques to improve transparency in automated content moderation using the UC Berkeley Measuring Hate Speech dataset.",
    status: "Completed",
    tags: ["Content Moderation", "Interpretability", "Fairness", "Transformers", "NLP"],
    leads: ["Yiping Chen"],
    links: {},
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure1.png",
        alt: "",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure2.png",
        alt: "",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure3.png",
        alt: "",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure4.png",
        alt: "",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure5.png",
        alt: "",
      },
    ],
  },
  {
    id: "2",
    title: "Context Based Captioning",
    description:
      "Context-Based Captioning is a high-accuracy, live transcription system designed to master complex STEM terminology through a hybrid multi-stage architecture. By integrating course-specific materials via ModernBERT and Shallow Fusion, the pipeline dynamically biases distil-whisper to ensure technical accuracy in real-time university environments.",
    status: "Completed",
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
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure7.png",
        alt: "Context Based Captioning figure 7",
      }
    ],
  },
  {
    id: "3",
    title: "Machine Unlearning",
    description:
      "Evaluating the performance trade-offs of diverse machine unlearning frameworks by simulating user data removal requests within social media recommender systems.",
    status: "Completed",
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
    status: "Completed",
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