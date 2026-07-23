/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TumorModel, ServiceDetail, TeamMember } from "./types";

export const VALIDATED_MODELS: TumorModel[] = [
  {
    id: "m-01",
    name: "MC38",
    type: "Syngeneic",
    origin: "Colon",
    species: "Mouse (C57BL/6 origin)",
    hostStrain: "C57BL/6",
    growthRate: "Fast",
    doublingTimeDays: 3.5,
    standardTreatments: ["Anti-PD-1 (Responsive)", "Anti-CTLA-4", "5-Fluorouracil (5-FU)"],
    description: "An immunogenic murine colon tumor line widely used for evaluating immuno-oncology checkpoint inhibitors."
  },
  {
    id: "m-02",
    name: "CT26.WT",
    type: "Syngeneic",
    origin: "Colon",
    species: "Mouse (BALB/c origin)",
    hostStrain: "BALB/c",
    growthRate: "Fast",
    doublingTimeDays: 4.0,
    standardTreatments: ["Anti-PD-1 (Moderate)", "Anti-CTLA-4", "Gemcitabine"],
    description: "A syngeneic colon cancer model in BALB/c mice with moderate immune responsiveness."
  },
  {
    id: "m-03",
    name: "A549",
    type: "Xenograft (CDX)",
    origin: "Lung",
    species: "Human",
    hostStrain: "Athymic Nude",
    growthRate: "Moderate",
    doublingTimeDays: 6.2,
    standardTreatments: ["Paclitaxel", "Cisplatin", "Erlotinib"],
    description: "A standard human non-small cell lung cancer (NSCLC) xenograft model for therapeutic screening."
  },
  {
    id: "m-04",
    name: "MDA-MB-231",
    type: "Xenograft (CDX)",
    origin: "Breast",
    species: "Human",
    hostStrain: "Athymic Nude / NSG",
    growthRate: "Moderate",
    doublingTimeDays: 5.5,
    standardTreatments: ["Doxorubicin", "Docetaxel", "Gemcitabine"],
    description: "A triple-negative human breast adenocarcinoma model for chemotherapy and metastasis studies."
  },
  {
    id: "m-05",
    name: "PC3",
    type: "Xenograft (CDX)",
    origin: "Prostate",
    species: "Human",
    hostStrain: "Athymic Nude",
    growthRate: "Moderate",
    doublingTimeDays: 5.8,
    standardTreatments: ["Docetaxel", "Enzalutamide", "Cabazitaxel"],
    description: "Human prostate adenocarcinoma model for evaluating androgen-independent therapies."
  },
  {
    id: "m-06",
    name: "B16-F10",
    type: "Syngeneic",
    origin: "Skin / Melanoma",
    species: "Mouse (C57BL/6 origin)",
    hostStrain: "C57BL/6",
    growthRate: "Fast",
    doublingTimeDays: 2.8,
    standardTreatments: ["Anti-PD-1 (Refractory)", "Cisplatin", "Radiation Therapy"],
    description: "An aggressive murine melanoma model with high metastatic potential for immunotherapy testing."
  },
  {
    id: "m-07",
    name: "HCT116",
    type: "Xenograft (CDX)",
    origin: "Colon",
    species: "Human",
    hostStrain: "Athymic Nude",
    growthRate: "Fast",
    doublingTimeDays: 4.2,
    standardTreatments: ["5-FU", "Oxaliplatin", "Irinotecan"],
    description: "Highly tumorigenic colorectal cancer model with rapid growth for cytotoxic screens."
  },
  {
    id: "m-08",
    name: "Hu-PBMC (A549)",
    type: "Humanized",
    origin: "Lung (Hu-PBMC Reconstituted)",
    species: "Human-Mouse Chimera",
    hostStrain: "NSG",
    growthRate: "Moderate",
    doublingTimeDays: 7.0,
    standardTreatments: ["Pembrolizumab", "Cisplatin"],
    description: "Humanized mouse model with human PBMCs for evaluating immunotherapies."
  },
  {
    id: "m-09",
    name: "4T1",
    type: "Syngeneic",
    origin: "Breast",
    species: "Mouse (BALB/c origin)",
    hostStrain: "BALB/c",
    growthRate: "Fast",
    doublingTimeDays: 3.2,
    standardTreatments: ["Anti-PD-L1 (Moderate)", "Doxorubicin", "Cyclophosphamide"],
    description: "A highly metastatic mammary model spontaneously metastasizing to lungs and other organs."
  },
  {
    id: "m-10",
    name: "HepG2",
    type: "Xenograft (CDX)",
    origin: "Liver",
    species: "Human",
    hostStrain: "Athymic Nude",
    growthRate: "Slow",
    doublingTimeDays: 8.5,
    standardTreatments: ["Sorafenib", "Lenvatinib", "Doxorubicin"],
    description: "Human liver cancer model with slow, uniform growth kinetics for kinase inhibitors."
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "s-01",
    title: "Oncology & Immuno-Oncology",
    category: "Oncology",
    description: "Evaluate drug efficacy and anti-tumor immune responses using validated animal models.",
    bulletPoints: [
      "Subcutaneous & orthotopic tumor inoculation",
      "Immune profiling via multi-color flow cytometry",
      "Efficacy of checkpoint inhibitors, CAR-T, & ADCs",
      "High-frequency caliper & body weight monitoring",
      "Metastatic & survival endpoint monitoring"
    ],
    iconName: "ShieldAlert"
  },
  {
    id: "s-02",
    title: "Pharmacokinetics (PK) & ADME",
    category: "Pharmacokinetics",
    description: "Profile candidate absorption, distribution, metabolism, and excretion in vivo.",
    bulletPoints: [
      "Single & repeat-dose PK profiling in rodents",
      "Dosing pathways: IV, IP, PO, SC, and IT infusion",
      "Comprehensive tissue & biofluid harvesting",
      "High-precision blood & plasma microsampling",
      "Integrated LC-MS/MS bioanalytical quantification"
    ],
    iconName: "Activity"
  },
  {
    id: "s-03",
    title: "Tolerability & Toxicology",
    category: "Toxicology",
    description: "Define safety margins and dosage boundaries before clinical development.",
    bulletPoints: [
      "Maximum Tolerated Dose (MTD) escalation",
      "Dose-Range Finding (DRF) protocols",
      "7, 14, and 28-day repeat-dose toxicity assays",
      "Hematology, biochemistry & coagulation panels",
      "Gross necropsy, organ weights & histopathology"
    ],
    iconName: "HeartPulse"
  },
  {
    id: "s-04",
    title: "Ex Vivo Assays & Biomarkers",
    category: "Ex Vivo",
    description: "Validate drug mechanisms and biomarkers with high-fidelity tissue analysis.",
    bulletPoints: [
      "Tumor-Infiltrating Lymphocyte (TIL) isolation",
      "Multiplex cytokine profiling (ELISA, Luminex)",
      "Gene and protein expression (RT-qPCR, Western)",
      "Immunohistochemistry (IHC) tissue staining",
      "Target occupancy & receptor binding assays"
    ],
    iconName: "FlaskConical"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Dr. Elena Rostova",
    role: "Chief Scientific Officer",
    credentials: "PhD",
    bio: "Over 18 years leading preclinical pharmacology operations. Specialist in immuno-oncology and antibody profiling."
  },
  {
    name: "Dr. Marcus Vance",
    role: "Director of Veterinary Medicine",
    credentials: "DVM, DACLAM",
    bio: "Board-certified laboratory animal specialist managing facility designs, welfare, and IACUC compliance."
  },
  {
    name: "Dr. Kenji Tanaka",
    role: "Head of PK/PD & Bioanalytics",
    credentials: "PhD",
    bio: "Expert in pharmacokinetic modeling and regulatory pharmacology submissions for small molecules and ADCs."
  }
];

export const FAQS = [
  {
    question: "What is your typical lead time for study initiation?",
    answer: "Standard efficacy studies can be initiated within 10 to 14 business days of compound receipt and protocol sign-off."
  },
  {
    question: "Are your animal facilities accredited?",
    answer: "Yes, our state-of-the-art barrier facilities feature 100% IACUC oversight and comply strictly with the Guide for Care and Use of Laboratory Animals."
  },
  {
    question: "How do we receive updates during a live study?",
    answer: "Clients receive weekly reports with raw data and charts. For critical parameters, updates are shared within 24 hours."
  },
  {
    question: "Do you offer bioanalytical services?",
    answer: "Yes, we provide fully integrated bioanalysis including plasma concentration mapping via validated LC-MS/MS partners."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Design",
    description: "Collaborate with our PhD scientists to design the optimal study protocol and endpoints."
  },
  {
    step: "02",
    title: "IACUC Approval & Prep",
    description: "Fast-track internal IACUC approval, reagent formulation, and barrier scheduling."
  },
  {
    step: "03",
    title: "Study Inception",
    description: "Sourcing from pathogen-free vendors, careful cell inoculation, and cohort randomization."
  },
  {
    step: "04",
    title: "Live Execution",
    description: "Daily dosing, clinical indexing, and multi-weekly tumor caliper and body weight measurements."
  },
  {
    step: "05",
    title: "Necropsy & Bioanalysis",
    description: "Standardized tissue collection, blood fractionation, and multi-color flow cytometry."
  },
  {
    step: "06",
    title: "Final IND-Ready Report",
    description: "A fully audited study report containing all raw data, graphs, and statistics for regulatory filing."
  }
];
