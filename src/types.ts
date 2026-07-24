/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductItem {
  sNo: number;
  name: string;
  packing: string;
  form: "Tablets" | "Capsules" | "Other";
  category?: string;
}

// Retain alias if needed for backwards compatibility
export type TumorModel = ProductItem;


export interface ServiceDetail {
  id: string;
  title: string;
  category: "Oncology" | "Pharmacokinetics" | "Toxicology" | "Ex Vivo";
  description: string;
  bulletPoints: string[];
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string; // e.g. PhD, DVM
  bio: string;
  avatarUrl?: string;
}

export interface InquiryFormState {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  interestedService: string;
  urgency: "Urgent (Within 1 month)" | "Medium (1-3 months)" | "Exploratory (>3 months)";
  uploadedProtocolName?: string;
}
