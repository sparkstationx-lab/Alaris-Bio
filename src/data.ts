/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductItem, ServiceDetail, TeamMember } from "./types";

export const PRODUCTS: ProductItem[] = [
  { sNo: 1, name: "Acamprosate Calcium 333 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 2, name: "Acetazolamide 250 Mg (SR) Capsules", packing: "10x10 Alu Alu", form: "Capsules" },
  { sNo: 3, name: "Alfuzosin Hcl 5 / 10 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 4, name: "Alfuzosin Hydrochloride 10 Mg + Dutasteride 0.5 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 5, name: "Alpha Galactosidase 150 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 6, name: "Amantadine Hcl 100 Mg Capsule", packing: "10x10 Alu Alu", form: "Capsules" },
  { sNo: 7, name: "Anatrozole 1 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 8, name: "Apremilast 10 Mg / 20 Mg / 30 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 9, name: "Arpiprazole 5 Mg / 10 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 10, name: "Artemether 20 Mg / 40 Mg / 80 Mg + Lumefantrine 120 Mg / 240 Mg / 480 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 11, name: "Azathioprine 25 Mg / 50 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 12, name: "Baclofen 10 Mg / 25 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 13, name: "Bepotastine Besylate 10 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 14, name: "Betahistine 24 Mg + Ginkgo Biloba 60 Mg + Vitamin D3 400Iu Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 15, name: "Biotin 5 Mg + Folic Acid 5 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 16, name: "Birvacetam 50 Mg / 100 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 17, name: "Bromocriptine 1.25 Mg / 2.5 Mg / 5 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 18, name: "Cabergoline 0.25 Mg / 0.5 Mg / 1 Mg / 2 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 19, name: "Capecitabine Tablets I.P 500 Mg", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 20, name: "Cerebroprotein Hyrolysate 90 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 21, name: "Chloroquine Phosphate 200 Mg / 400 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 22, name: "Co-Enzyme Q10 Bp 100 Mg", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 23, name: "Co-Enzyme Q10(Ubidecarenone) Bp 300 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 24, name: "Co-Enzyme Q1o 50 Mg + L-Cartaine L-Tartrate Usp.-500 Mg", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 25, name: "Co-Enzyme Q1o 50 Mg + L-Cartaine L-Tartrate Usp.-500 Mg + Lycopane 2.5 Mg", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 26, name: "Co-Enzyme Q1o 50 Mg + L-Cartaine L-Tartrate Usp.-500 Mg + Lycopane 2.5 Mg + El.Zinc 12.5 Mg", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 27, name: "Conjugated Estrogens 0.625 Mg / 1.25 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 28, name: "Danozol 50 Mg / 100 Mg / 200 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 29, name: "Dapoxetine 30 Mg / 60 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 30, name: "Dapoxetine 30 Mg And Sildenafil 50 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 31, name: "Digoxin 0.25 Mg (Coated) Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 32, name: "Disulfiram 250 Mg / 500 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 33, name: "Divalproex Sodium 250 Mg / 250 Mg Er / 500 Mg / 750 Mg / 750 Mg Er / 1000 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 34, name: "Doxazosin Mesylate 2 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 36, name: "Everolimus 0.25 Mg / 0.5 Mg / 0.75 Mg / 1 Mg / 2.5 Mg / 5 Mg / 10 Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 37, name: "Exemestane 25 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 38, name: "Febuxostat 40 Mg / 80 Mg / 120 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 39, name: "Granisetron Dispersible 1 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 40, name: "Hydroxychloroquine Sulphate 200 Mg / 300 Mg / 400 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 41, name: "Ibandronic Acid 150 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 42, name: "Irbesartan 150 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 43, name: "Isradipine 5 Mg Capsules", packing: "10x10 Alu Alu", form: "Capsules" },
  { sNo: 44, name: "Ivabradine 5 Mg / 7.5 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 45, name: "Ivermectin 6 Mg + Albendazole 400 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 46, name: "Ivermectin 6 Mg / 12 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 47, name: "L-Carnitine L-Tartrate 500 Mg + Methylcobalamin 1500 Mcg + Folic Acid 1.5 Mg", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 48, name: "L-Carnitine L-Tartrate Tablets 500 Mg", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 49, name: "Letrozole Tablets 5 Mg", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 50, name: "Levocarnitine 330 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 51, name: "Lithium Carbonate 300 Mg / 450 Mg (SR) Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 52, name: "Mesalamine 400 / 500 / 800 / 1200 Mg Sr Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 53, name: "Methotrexate 2.5 Mg / 5 Mg / 7.5 Mg / 10 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 54, name: "Methylprednisolone 4 Mg / 8 Mg / 16 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 55, name: "Mycophenolate Mofetil 250 / 500 / 750 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 56, name: "Mycophenolate Sodium 180 / 360 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 57, name: "Myo Inositol 750 Mg + Metformin Hcl 500 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 58, name: "Naltrexone Hydrochloride 50 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 59, name: "Nevirapine 50 Mg / 200 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 60, name: "Nicorandril 5 Mg / 10 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 61, name: "Nifedipine 20 Mg (ER) Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 62, name: "Obeticholic Acid 5 Mg / 10 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 63, name: "Olopatadine 5 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 64, name: "Orlistat 60 / 120 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 65, name: "Paliperidone 1.5 Mg / 3 Mg / 6 Mg / 9 Mg / 12 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 66, name: "Pancreatin 150 / 300 Mg Capsules", packing: "10x10 Alu Alu", form: "Capsules" },
  { sNo: 67, name: "Pancreatin 170 Mg + Activated Dimethicone 80 Mg Capsules", packing: "10x10 Alu Alu", form: "Capsules" },
  { sNo: 68, name: "Pancreatin 192 Mg + Bile Constituent 25 Mg + Activated Dimethicone 40 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 69, name: "Pancreatin Minimicrospheres I.P 150 Mg / 300 Mg Capsules", packing: "10x10 Alu Alu", form: "Capsules" },
  { sNo: 70, name: "Pebamipide 100 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 71, name: "Pentoxifylline Extended Release 400 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 72, name: "Phenobarbitone 30 Mg / 60 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 73, name: "Phenytoin Sodium 50 Mg / 100 Mg / 300 Mg Tablets Sr", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 74, name: "Pitavastatin Tablets 1 / 2 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 75, name: "Pramipexole Dihydrochloride 0.125 Mg / 0.25 Mg / 0.375 Mg / 0.50 Mg / 0.75 Mg / 1 Mg / 1.5 Mg / 3 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 76, name: "Prasugral 5 / 10 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 77, name: "Propylthiouracil 50 Mg / 100 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 78, name: "Prucalopride 1 Mg / 2 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 79, name: "Raloxifene Hcl 60 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 80, name: "Rifaximin 200 / 400 / 550 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 81, name: "Rifaxmin 200 Mg + Metronidazole 400 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 82, name: "Roflumilast 500 Mcg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 83, name: "Sertaconazole Nitrate Vaginal 500 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 84, name: "Sevelemer Carbonate 400 / 800 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 85, name: "Sildenafil 50 / 100 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 86, name: "Sildenafil Citerate 100 Mg + Dapoxetine 30 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 87, name: "Sildenafil Citerate 100 Mg + Dupoxetine 30 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 88, name: "Sildenafil Citerate 50 Mg + Dapoxetine 30 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 89, name: "Sildenafil Citrate 25 Mg / 50 Mg / 100 Mg / 200 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 90, name: "Sildenafil Citrate 25 Mg Eq To Sildenafil 100 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 91, name: "Sirolimus 1 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 92, name: "Sulfasalazine 500 / 1000 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 93, name: "Tadafafil 20 Mg + Dapoxetine 30 Mg / 60 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 94, name: "Tadalafil 10 Mg + Dapoxetine 30 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 95, name: "Tadalafil 5 Mg / 10 Mg / 20 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 96, name: "Thyroxine Sodium 12.5 Mcg / 25 Mcg / 37.5 Mcg / 50 Mcg / 62.5 Mg / 75 Mcg / 88 Mcg / 100 Mcg / 125 Mcg / 150 Mcg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 97, name: "Tofacitinib Cirate 5 Mg / 10 Mg (ER) Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 98, name: "Tolvaptan 15 / 30 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 99, name: "Triamcinolone 4 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 100, name: "Trimetazidine Hydrochloride 35 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 101, name: "Trioxsalen 25 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 102, name: "Ursodeoxycholic Acid 150 Mg / 300 Mg Tablets", packing: "10x10 Alu Alu", form: "Tablets" },
  { sNo: 103, name: "Zonisamide 25 / 50 / 100 Mg Capsules", packing: "10x10 Alu Alu", form: "Capsules" }
];

export const VALIDATED_MODELS = PRODUCTS;


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
