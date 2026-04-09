import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<string, Record<Language, string>> = {
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.solutions": { en: "Solutions", ar: "الحلول" },
  "nav.industries": { en: "Industries", ar: "القطاعات" },
  "nav.procurement": { en: "Procurement", ar: "المشتريات" },
  "nav.blog": { en: "Blog", ar: "المدونة" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا" },
  "hero.title": { en: "Industrial Procurement & MRO Solutions in Qatar — Simplified", ar: "حلول المشتريات الصناعية والصيانة في قطر - مبسطة" },
  "hero.cta": { en: "Explore Capabilities", ar: "اكتشف قدراتنا" },
  "footer.rights": { en: "All Rights Reserved", ar: "جميع الحقوق محفوظة" },
  "contact.form.title": { en: "Start a Conversation", ar: "ابدأ محادثة" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  
  const t = (key: string) => translations[key]?.[language] || key;
  
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dir }}>
      <div dir={dir} className={language === 'ar' ? 'font-sans' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
