/**
 * Content model for the demo portal ("Portail national des services publics").
 * One file per locale exports a `DemoContent`. All hrefs are locale-relative
 * (e.g. "/demarches") — the demo prefixes them with /demo/<locale>.
 */
export type DemoIcon =
  | "FileText"
  | "Fingerprint"
  | "Car"
  | "Wallet"
  | "Stethoscope"
  | "GraduationCap"
  | "Briefcase"
  | "Home"
  | "Baby"
  | "Scale"
  | "Tractor"
  | "Plane"
  | "Building2"
  | "Landmark"
  | "HeartHandshake"
  | "Vote";

export type DemoLink = { label: string; href: string; description?: string };

export type DemoNavItem = {
  label: string;
  href?: string;
  children?: DemoLink[];
  featured?: { title: string; text: string; href: string; cta: string };
};

export type DemoTheme = { icon: DemoIcon; title: string; description: string; href: string; count: number };

export type DemoNews = { id: string; date: string; category: string; title: string; summary: string; body: string[] };

export type DemoService = {
  slug: string;
  title: string;
  ministry: string;
  theme: string;
  summary: string;
  online: boolean;
  free: boolean;
  duration: string;
  popular?: boolean;
};

export type DemoFormField =
  | { kind: "text" | "email" | "tel"; name: string; label: string; hint?: string; required?: boolean; placeholder?: string; addonStart?: string }
  | { kind: "date"; name: string; label: string; hint?: string; required?: boolean }
  | { kind: "select"; name: string; label: string; hint?: string; required?: boolean; options: { value: string; label: string }[] }
  | { kind: "radio"; name: string; label: string; hint?: string; required?: boolean; options: { value: string; label: string; hint?: string }[] }
  | { kind: "checkbox"; name: string; label: string; hint?: string; required?: boolean }
  | { kind: "file"; name: string; label: string; hint?: string; required?: boolean; accept?: string };

export type DemoFormStep = { title: string; description?: string; fields: DemoFormField[] };

export type DemoContent = {
  meta: {
    siteTitle: string;
    tagline: string;
    entity: string;
    description: string;
    officialBanner: string;
  };
  nav: DemoNavItem[];
  common: {
    home: string;
    allServices: string;
    seeAll: string;
    readMore: string;
    startProcedure: string;
    online: string;
    free: string;
    paid: string;
    duration: string;
    updatedOn: string;
    share: string;
    print: string;
    helpTitle: string;
    helpText: string;
    helpCta: string;
    contact: string;
    backHome: string;
    results: string;
    filters: string;
    theme: string;
    ministry: string;
    sortBy: string;
    relevance: string;
    recent: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroText: string;
    searchLabel: string;
    popularLabel: string;
    popular: DemoLink[];
    themesTitle: string;
    themesText: string;
    themes: DemoTheme[];
    noticeTitle: string;
    noticeText: string;
    noticeLink: DemoLink;
    figuresTitle: string;
    figures: { value: string; label: string }[];
    newsTitle: string;
    news: DemoNews[];
    servicesTitle: string;
    services: DemoService[];
    identityTitle: string;
    identityText: string;
    identityCta: string;
    identityPoints: string[];
    appTitle: string;
    appText: string;
    appCta: string;
  };
  procedure: {
    slug: string;
    breadcrumb: string[];
    eyebrow: string;
    title: string;
    ministry: string;
    summary: string;
    facts: { label: string; value: string }[];
    tabs: { about: string; documents: string; steps: string; faq: string };
    about: string[];
    eligibility: { title: string; items: string[] };
    documents: { title: string; items: { label: string; required: boolean; hint?: string }[] };
    stepsTitle: string;
    steps: { title: string; text: string }[];
    faq: { q: string; a: string }[];
    warning: { title: string; text: string };
    form: {
      title: string;
      steps: DemoFormStep[];
      reviewTitle: string;
      reviewText: string;
      consent: string;
      submit: string;
      previous: string;
      next: string;
      saveDraft: string;
      success: { title: string; text: string; reference: string; nextSteps: string[]; download: string; track: string };
    };
  };
  ministry: {
    breadcrumb: string[];
    name: string;
    short: string;
    mission: string;
    missionsTitle: string;
    missions: { title: string; text: string }[];
    servicesTitle: string;
    services: DemoLink[];
    figures: { value: string; label: string }[];
    newsTitle: string;
    organisationTitle: string;
    organisation: { title: string; text: string }[];
    contactTitle: string;
    contact: { address: string; phone: string; email: string; hours: string };
    documentsTitle: string;
    documents: { title: string; format: string; size: string; date: string }[];
  };
  search: {
    title: string;
    query: string;
    resultsCount: string;
    filterThemes: string[];
    filterMinistries: string[];
    results: { title: string; href: string; ministry: string; summary: string; online: boolean; updated: string }[];
    noResults: string;
    suggestions: string[];
  };
  news: {
    title: string;
    intro: string;
    categories: string[];
  };
  errors: {
    notFoundTitle: string;
    notFoundText: string;
    serverTitle: string;
    serverText: string;
    maintenanceTitle: string;
    maintenanceText: string;
    suggestionsTitle: string;
    suggestions: DemoLink[];
  };
  footer: {
    description: string;
    ecosystem: { label: string; href: string }[];
    columns: { title: string; links: DemoLink[] }[];
    bottomLinks: DemoLink[];
    license: string;
    newsletterTitle: string;
    newsletterText: string;
  };
};
