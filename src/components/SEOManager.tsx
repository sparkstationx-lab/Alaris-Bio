/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

interface SEOManagerProps {
  viewMode: "home" | "products-catalog" | "contact-page";
}

export default function SEOManager({ viewMode }: SEOManagerProps) {
  useEffect(() => {
    let title = "Alaris Biosciences | WHO-GMP Third-Party Pharma Manufacturer India";
    let description =
      "Alaris Biosciences is a WHO-GMP & ISO certified third-party pharmaceutical medicine manufacturer in India. High-capacity contract manufacturing for tablets, capsules, liquid orals, ointments & PCD pharma franchise with guaranteed 31-day dispatch.";
    let canonical = "https://alarisbio.com";

    if (viewMode === "products-catalog") {
      title = "DCGI Approved Pharmaceutical Products & Formulations Index | Alaris Biosciences";
      description =
        "Browse 1200+ DCGI approved pharmaceutical product formulations including antibiotic tablets, pain relief capsules, pediatric syrups, and nutraceutical softgels for third-party contract manufacturing and PCD franchise.";
      canonical = "https://alarisbio.com/products";
    } else if (viewMode === "contact-page") {
      title = "Request Third-Party Manufacturing Quote & PCD Franchise | Alaris Biosciences";
      description =
        "Get instant commercial quotes for third-party pharmaceutical contract manufacturing and PCD franchise opportunities. Contact Mr. Amit Bhalla at +91-9753204758 or Sales.alarisbio@gmail.com.";
      canonical = "https://alarisbio.com/contact";
    }

    // 1. Update Title
    document.title = title;

    // 2. Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 3. Helper for link tag (canonical)
    const updateLinkTag = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Update Meta Description & Keywords
    updateMetaTag('meta[name="description"]', 'name', 'description', description);
    updateMetaTag(
      'meta[name="keywords"]',
      'name',
      'keywords',
      'Third Party Pharmaceutical Manufacturer, PCD Pharma Franchise India, WHO-GMP Certified Pharma Plant, Contract Manufacturing Tablets Capsules, DCGI Approved Medicine List, Pharmaceutical Third Party Manufacturing Company Gwalior'
    );

    // Update Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Alaris Biosciences');
    updateMetaTag(
      'meta[property="og:image"]',
      'property',
      'og:image',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80'
    );

    // Update Twitter Tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag(
      'meta[name="twitter:image"]',
      'name',
      'twitter:image',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80'
    );

    // Update Canonical
    updateLinkTag('canonical', canonical);

    // Dynamic JSON-LD Structured Data Injection
    const jsonLdId = "dynamic-jsonld-schema";
    let scriptEl = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = jsonLdId;
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }

    const organizationSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://alarisbio.com/#organization",
          "name": "Alaris Biosciences",
          "alternateName": "Alaris Bio",
          "url": "https://alarisbio.com",
          "logo": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80",
          "description": "WHO-GMP & ISO Certified Third-Party Pharmaceutical Manufacturer and Contract Manufacturing Supplier in India.",
          "telephone": "+91-9753204758",
          "email": "Sales.alarisbio@gmail.com",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-9753204758",
              "contactType": "Sales and Commercial Enquiries",
              "email": "Sales.alarisbio@gmail.com",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5, Basantkunj, Ramaua Triangle, NH44, Jhansi Agra Highway",
            "addressLocality": "Gwalior",
            "addressRegion": "Madhya Pradesh",
            "postalCode": "474006",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "MedicalBusiness",
          "@id": "https://alarisbio.com/#localbusiness",
          "name": "Alaris Biosciences Manufacturing Facilities",
          "image": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
          "telePhone": "+91-9753204758",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5, Basantkunj, Ramaua Triangle, NH44, Jhansi Agra Highway",
            "addressLocality": "Gwalior",
            "addressRegion": "Madhya Pradesh",
            "postalCode": "474006",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://alarisbio.com/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://alarisbio.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": viewMode === "products-catalog" ? "Products Catalog" : viewMode === "contact-page" ? "Contact & Quotation" : "Contract Manufacturing Services",
              "item": canonical
            }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://alarisbio.com/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the standard delivery timeline for third-party manufacturing orders?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The first batch takes approximately 31 working days from artwork finalization and drug approval clearance. Repeat batches are dispatched within 21-25 days."
              }
            },
            {
              "@type": "Question",
              "name": "Are your manufacturing facilities WHO-GMP certified?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our manufacturing hubs in Gwalior (M.P.), Nalagarh (H.P.), and Roorkee (U.K.) operate strictly under WHO-GMP, ISO 9001:2015, and cGMP certified protocols."
              }
            },
            {
              "@type": "Question",
              "name": "What is the Minimum Order Quantity (MOQ) for third-party medicine production?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MOQs vary by dosage form: Tablets/Capsules typically start at 30,000 to 50,000 units; Injections/Liquid Orals at 2,000 to 5,000 bottles."
              }
            },
            {
              "@type": "Question",
              "name": "Does Alaris Biosciences provide packaging design and artwork assistance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our in-house regulatory and graphic design team assists clients with full foil, box, and label design according to statutory DCGI packaging guidelines."
              }
            }
          ]
        }
      ]
    };

    scriptEl.textContent = JSON.stringify(organizationSchema);
  }, [viewMode]);

  return null;
}
