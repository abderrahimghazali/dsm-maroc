export type Locale = "fr" | "ar" | "zgh" | "en";
export type Dir = "ltr" | "rtl";

export const locales: Locale[] = ["fr", "ar", "zgh", "en"];
export const defaultLocale: Locale = "fr";

export const localeMeta: Record<
  Locale,
  { code: string; dir: Dir; label: string; nativeLabel: string; short: string; fontClass: string }
> = {
  fr: { code: "fr-MA", dir: "ltr", label: "Français", nativeLabel: "Français", short: "FR", fontClass: "font-sans" },
  ar: { code: "ar-MA", dir: "rtl", label: "Arabe", nativeLabel: "العربية", short: "AR", fontClass: "font-arabic" },
  zgh: { code: "zgh", dir: "ltr", label: "Amazighe", nativeLabel: "ⵜⴰⵎⴰⵣⵉⵖⵜ", short: "ⵣ", fontClass: "font-tifinagh" },
  en: { code: "en", dir: "ltr", label: "Anglais", nativeLabel: "English", short: "EN", fontClass: "font-sans" },
};

export function dirFor(locale: Locale): Dir {
  return localeMeta[locale].dir;
}

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

/** Strings used inside components (labels, aria, fallbacks). */
export type UiStrings = {
  kingdom: string;
  close: string;
  open: string;
  menu: string;
  search: string;
  searchPlaceholder: string;
  skipToContent: string;
  skipToNav: string;
  skipToFooter: string;
  backToTop: string;
  previous: string;
  next: string;
  page: string;
  pageOf: string;
  breadcrumb: string;
  home: string;
  required: string;
  optional: string;
  showMore: string;
  showLess: string;
  loading: string;
  error: string;
  language: string;
  selectLanguage: string;
  download: string;
  share: string;
  print: string;
  copy: string;
  copied: string;
  newTab: string;
  step: string;
  stepOf: string;
  nextStep: string;
  login: string;
  logout: string;
  myAccount: string;
  theme: string;
  themeLight: string;
  themeDark: string;
  themeSystem: string;
  info: string;
  success: string;
  warning: string;
  dismiss: string;
  clear: string;
  apply: string;
  cancel: string;
  confirm: string;
  results: string;
  noResults: string;
  consentTitle: string;
  consentBody: string;
  acceptAll: string;
  refuseAll: string;
  customise: string;
  seeAll: string;
  lastUpdated: string;
  readingTime: string;
  contents: string;
  notFound: string;
  followUs: string;
  newsletter: string;
  newsletterHint: string;
  subscribe: string;
  email: string;
  officialSite: string;
  officialBanner: string;
  fieldRequired: string;
  edit: string;
  draftSaved: string;
  summary: string;
  firstPage: string;
  lastPage: string;
  goToPage: string;
  currentPage: string;
  pagination: string;
  remove: string;
  chooseFile: string;
  dropFiles: string;
  noFile: string;
  sortAscending: string;
  sortDescending: string;
  selectAll: string;
  selectRow: string;
  expand: string;
  collapse: string;
  showTranscript: string;
  hideTranscript: string;
  copyLink: string;
  linkCopied: string;
  shareOn: string;
  shareByEmail: string;
  notifications: string;
  completed: string;
  current: string;
  upcoming: string;
  showPassword: string;
  hidePassword: string;
  selectPlaceholder: string;
  noOptions: string;
  charactersRemaining: string;
  digit: string;
  day: string;
  month: string;
  year: string;
  dateHint: string;
  datePlaceholder: string;
  readMore: string;
  learnMore: string;
  howToKnow: string;
  officialExplainer: string;
  officialDomainExplainer: string;
  secure: string;
  steps: string;
  menuTitle: string;
  acceptedFormats: string;
  maxSizeSuffix: string;
  footerLandmark: string;
  quickAccess: string;
  mainNav: string;
  moroccoMap: string;
  moroccoMapHint: string;
  regionCapital: string;
  cnieInvalid: string;
  iceInvalid: string;
  ribInvalid: string;
  phoneInvalid: string;
  dossierReference: string;
  dossierSubmittedOn: string;
  dossierUpdated: string;
  dossierExpected: string;
  dossierNextAction: string;
  statusSubmitted: string;
  statusInReview: string;
  statusActionRequired: string;
  statusApproved: string;
  statusRejected: string;
  statusReady: string;
};

export const ui: Record<Locale, UiStrings> = {
  fr: {
    kingdom: "Royaume du Maroc",
    close: "Fermer",
    open: "Ouvrir",
    menu: "Menu",
    search: "Rechercher",
    searchPlaceholder: "Rechercher un service, une démarche…",
    skipToContent: "Aller au contenu",
    skipToNav: "Aller au menu",
    skipToFooter: "Aller au pied de page",
    backToTop: "Haut de page",
    previous: "Précédent",
    next: "Suivant",
    page: "Page",
    pageOf: "sur",
    breadcrumb: "Vous êtes ici",
    home: "Accueil",
    required: "obligatoire",
    optional: "facultatif",
    showMore: "Afficher plus",
    showLess: "Afficher moins",
    loading: "Chargement",
    error: "Erreur",
    language: "Langue",
    selectLanguage: "Choisir la langue",
    download: "Télécharger",
    share: "Partager",
    print: "Imprimer",
    copy: "Copier",
    copied: "Copié",
    newTab: "nouvelle fenêtre",
    step: "Étape",
    stepOf: "sur",
    nextStep: "Étape suivante",
    login: "Se connecter",
    logout: "Se déconnecter",
    myAccount: "Mon espace",
    theme: "Affichage",
    themeLight: "Clair",
    themeDark: "Sombre",
    themeSystem: "Système",
    info: "Information",
    success: "Succès",
    warning: "Attention",
    dismiss: "Masquer",
    clear: "Effacer",
    apply: "Appliquer",
    cancel: "Annuler",
    confirm: "Confirmer",
    results: "résultats",
    noResults: "Aucun résultat",
    consentTitle: "À propos des cookies",
    consentBody: "Ce site utilise des cookies pour mesurer son audience et améliorer votre expérience. Vous pouvez accepter ou refuser les traceurs non essentiels.",
    acceptAll: "Tout accepter",
    refuseAll: "Tout refuser",
    customise: "Personnaliser",
    seeAll: "Voir tout",
    lastUpdated: "Mis à jour le",
    readingTime: "min de lecture",
    contents: "Sommaire",
    notFound: "Page introuvable",
    followUs: "Suivez-nous",
    newsletter: "Lettre d'information",
    newsletterHint: "Recevez l'actualité des services publics.",
    subscribe: "S'abonner",
    email: "Adresse e-mail",
    officialSite: "Site officiel",
    officialBanner: "Un site officiel du Royaume du Maroc",
    fieldRequired: "Ce champ est obligatoire.",
    edit: "Modifier",
    draftSaved: "Brouillon enregistré",
    summary: "Récapitulatif",
    firstPage: "Première page",
    lastPage: "Dernière page",
    goToPage: "Aller à la page",
    currentPage: "Page actuelle",
    pagination: "Pagination",
    remove: "Retirer",
    chooseFile: "Choisir un fichier",
    dropFiles: "ou glissez-déposez ici",
    noFile: "Aucun fichier sélectionné",
    sortAscending: "Trier par ordre croissant",
    sortDescending: "Trier par ordre décroissant",
    selectAll: "Tout sélectionner",
    selectRow: "Sélectionner la ligne",
    expand: "Déplier",
    collapse: "Replier",
    showTranscript: "Afficher la transcription",
    hideTranscript: "Masquer la transcription",
    copyLink: "Copier le lien",
    linkCopied: "Lien copié",
    shareOn: "Partager sur",
    shareByEmail: "Partager par e-mail",
    notifications: "Notifications",
    completed: "Terminée",
    current: "En cours",
    upcoming: "À venir",
    showPassword: "Afficher le mot de passe",
    hidePassword: "Masquer le mot de passe",
    selectPlaceholder: "Sélectionner",
    noOptions: "Aucune option",
    charactersRemaining: "caractères restants",
    digit: "Chiffre",
    day: "Jour",
    month: "Mois",
    year: "Année",
    dateHint: "Par exemple : 12/05/1990",
    datePlaceholder: "JJ/MM/AAAA",
    readMore: "Lire la suite",
    learnMore: "En savoir plus",
    howToKnow: "Comment le savoir ?",
    officialExplainer: "Les sites officiels utilisent le domaine gov.ma et une connexion sécurisée (https). Ne partagez vos informations que sur des sites officiels.",
    officialDomainExplainer: "Les sites officiels du Royaume utilisent le domaine .gov.ma, réservé à l'administration marocaine.",
    secure: "Sécurisé",
    steps: "Étapes",
    menuTitle: "Dans cette rubrique",
    acceptedFormats: "Formats acceptés",
    maxSizeSuffix: "Mo max",
    footerLandmark: "Pied de page",
    quickAccess: "Accès rapide",
    mainNav: "Navigation principale",
    moroccoMap: "Carte du Maroc par région",
    moroccoMapHint: "Survolez ou sélectionnez une région",
    regionCapital: "Chef-lieu",
    cnieInvalid: "Numéro de CNIE invalide : une ou deux lettres suivies de 5 à 7 chiffres (ex. AB123456).",
    iceInvalid: "L'ICE comporte exactement 15 chiffres.",
    ribInvalid: "RIB invalide : 24 chiffres et une clé de contrôle correcte.",
    phoneInvalid: "Numéro invalide : 10 chiffres commençant par 05, 06, 07 ou 08.",
    dossierReference: "Référence",
    dossierSubmittedOn: "Déposé le",
    dossierUpdated: "Mis à jour le",
    dossierExpected: "Délai estimé",
    dossierNextAction: "Prochaine étape pour vous",
    statusSubmitted: "Déposé",
    statusInReview: "En cours d'instruction",
    statusActionRequired: "Action requise",
    statusApproved: "Accepté",
    statusRejected: "Refusé",
    statusReady: "Prêt",
  },
  ar: {
    kingdom: "المملكة المغربية",
    close: "إغلاق",
    open: "فتح",
    menu: "القائمة",
    search: "بحث",
    searchPlaceholder: "ابحث عن خدمة أو إجراء…",
    skipToContent: "الانتقال إلى المحتوى",
    skipToNav: "الانتقال إلى القائمة",
    skipToFooter: "الانتقال إلى أسفل الصفحة",
    backToTop: "أعلى الصفحة",
    previous: "السابق",
    next: "التالي",
    page: "صفحة",
    pageOf: "من",
    breadcrumb: "أنت هنا",
    home: "الرئيسية",
    required: "إلزامي",
    optional: "اختياري",
    showMore: "عرض المزيد",
    showLess: "عرض أقل",
    loading: "جارٍ التحميل",
    error: "خطأ",
    language: "اللغة",
    selectLanguage: "اختر اللغة",
    download: "تحميل",
    share: "مشاركة",
    print: "طباعة",
    copy: "نسخ",
    copied: "تم النسخ",
    newTab: "نافذة جديدة",
    step: "الخطوة",
    stepOf: "من",
    nextStep: "الخطوة التالية",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    myAccount: "فضائي",
    theme: "العرض",
    themeLight: "فاتح",
    themeDark: "داكن",
    themeSystem: "النظام",
    info: "معلومة",
    success: "نجاح",
    warning: "تنبيه",
    dismiss: "إخفاء",
    clear: "مسح",
    apply: "تطبيق",
    cancel: "إلغاء",
    confirm: "تأكيد",
    results: "نتائج",
    noResults: "لا توجد نتائج",
    consentTitle: "حول ملفات تعريف الارتباط",
    consentBody: "يستخدم هذا الموقع ملفات تعريف الارتباط لقياس الزيارات وتحسين تجربتكم. يمكنكم قبول أو رفض المتتبعات غير الضرورية.",
    acceptAll: "قبول الكل",
    refuseAll: "رفض الكل",
    customise: "تخصيص",
    seeAll: "عرض الكل",
    lastUpdated: "آخر تحديث",
    readingTime: "دقائق للقراءة",
    contents: "الفهرس",
    notFound: "الصفحة غير موجودة",
    followUs: "تابعونا",
    newsletter: "النشرة الإخبارية",
    newsletterHint: "توصلوا بجديد الخدمات العمومية.",
    subscribe: "اشتراك",
    email: "البريد الإلكتروني",
    officialSite: "موقع رسمي",
    officialBanner: "موقع رسمي للمملكة المغربية",
    fieldRequired: "هذا الحقل إلزامي.",
    edit: "تعديل",
    draftSaved: "تم حفظ المسودة",
    summary: "ملخص",
    firstPage: "الصفحة الأولى",
    lastPage: "الصفحة الأخيرة",
    goToPage: "الانتقال إلى الصفحة",
    currentPage: "الصفحة الحالية",
    pagination: "ترقيم الصفحات",
    remove: "إزالة",
    chooseFile: "اختيار ملف",
    dropFiles: "أو اسحب وأفلت هنا",
    noFile: "لم يتم اختيار أي ملف",
    sortAscending: "ترتيب تصاعدي",
    sortDescending: "ترتيب تنازلي",
    selectAll: "تحديد الكل",
    selectRow: "تحديد الصف",
    expand: "توسيع",
    collapse: "طي",
    showTranscript: "عرض النص",
    hideTranscript: "إخفاء النص",
    copyLink: "نسخ الرابط",
    linkCopied: "تم نسخ الرابط",
    shareOn: "مشاركة على",
    shareByEmail: "مشاركة عبر البريد الإلكتروني",
    notifications: "الإشعارات",
    completed: "مكتملة",
    current: "جارية",
    upcoming: "قادمة",
    showPassword: "إظهار كلمة المرور",
    hidePassword: "إخفاء كلمة المرور",
    selectPlaceholder: "اختيار",
    noOptions: "لا توجد خيارات",
    charactersRemaining: "حرفًا متبقيًا",
    digit: "الرقم",
    day: "اليوم",
    month: "الشهر",
    year: "السنة",
    dateHint: "مثال: 12/05/1990",
    datePlaceholder: "يوم/شهر/سنة",
    readMore: "قراءة المزيد",
    learnMore: "معرفة المزيد",
    howToKnow: "كيف تتأكد من ذلك؟",
    officialExplainer: "تستخدم المواقع الرسمية النطاق gov.ma واتصالًا آمنًا (https). لا تشاركوا معلوماتكم إلا على المواقع الرسمية.",
    officialDomainExplainer: "تستخدم المواقع الرسمية للمملكة نطاق gov.ma.، المخصص للإدارة المغربية.",
    secure: "آمن",
    steps: "الخطوات",
    menuTitle: "في هذا القسم",
    acceptedFormats: "الصيغ المقبولة",
    maxSizeSuffix: "ميغابايت كحد أقصى",
    footerLandmark: "تذييل الصفحة",
    quickAccess: "وصول سريع",
    mainNav: "التنقل الرئيسي",
    moroccoMap: "خريطة المغرب حسب الجهات",
    moroccoMapHint: "مرّروا المؤشر أو اختاروا جهة",
    regionCapital: "العاصمة الجهوية",
    cnieInvalid: "رقم البطاقة الوطنية غير صالح: حرف أو حرفان ثم 5 إلى 7 أرقام (مثال AB123456).",
    iceInvalid: "يتكون المعرف الموحد للمقاولة من 15 رقمًا بالضبط.",
    ribInvalid: "رقم الحساب البنكي غير صالح: 24 رقمًا ومفتاح تحقق صحيح.",
    phoneInvalid: "رقم غير صالح: 10 أرقام تبدأ بـ 05 أو 06 أو 07 أو 08.",
    dossierReference: "المرجع",
    dossierSubmittedOn: "تاريخ الإيداع",
    dossierUpdated: "آخر تحديث",
    dossierExpected: "الأجل المتوقع",
    dossierNextAction: "الخطوة التالية من جهتكم",
    statusSubmitted: "تم الإيداع",
    statusInReview: "قيد الدراسة",
    statusActionRequired: "يتطلب إجراءً",
    statusApproved: "مقبول",
    statusRejected: "مرفوض",
    statusReady: "جاهز",
  },
  // Standard Moroccan Amazigh (IRCAM) — to be reviewed by a native speaker
  zgh: {
    kingdom: "ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ",
    close: "ⵔⴳⵍ",
    open: "ⵕⵥⵎ",
    menu: "ⵓⵎⵍⴰⵏ",
    search: "ⴰⵔⵣⵣⵓ",
    searchPlaceholder: "ⵔⵣⵓ ⵅⴼ ⵜⴰⵏⴰⴼⵓⵜ…",
    skipToContent: "ⴷⴷⵓ ⵖⵔ ⵓⵙⵏⴼⵍ",
    skipToNav: "ⴷⴷⵓ ⵖⵔ ⵓⵎⵍⴰⵏ",
    skipToFooter: "ⴷⴷⵓ ⵖⵔ ⵉⴹⴰⵕⵏ ⵏ ⵜⴰⵙⵏⴰ",
    backToTop: "ⴰⴼⵍⵍⴰ ⵏ ⵜⴰⵙⵏⴰ",
    previous: "ⵉⵣⵡⴰⵔⵏ",
    next: "ⴰⴹⴼⴰⵕ",
    page: "ⵜⴰⵙⵏⴰ",
    pageOf: "ⵙⴳ",
    breadcrumb: "ⵜⵍⵍⵉⴷ ⴷⴰ",
    home: "ⵜⴰⵙⵏⴰ ⵜⴰⵎⵣⵡⴰⵔⵓⵜ",
    required: "ⵉⵜⵜⵡⴰⵜⵜⵔ",
    optional: "ⵓⵔ ⵉⵜⵜⵡⴰⵜⵜⵔ",
    showMore: "ⵙⵙⴽⵏ ⵓⴳⴳⴰⵔ",
    showLess: "ⵙⵙⴽⵏ ⴷⵔⵓⵙ",
    loading: "ⴰⵙⴰⵍⵢ",
    error: "ⵜⴰⵣⴳⵍⵜ",
    language: "ⵜⵓⵜⵍⴰⵢⵜ",
    selectLanguage: "ⵙⵜⵉ ⵜⵓⵜⵍⴰⵢⵜ",
    download: "ⴰⵣⴷⴰⵎ",
    share: "ⴱⴹⵓ",
    print: "ⵙⵉⵖⵍ",
    copy: "ⵙⵙⵏⵖⵍ",
    copied: "ⵉⵜⵜⵓⵙⵏⵖⵍ",
    newTab: "ⵜⴰⵙⵏⴰ ⵜⴰⵎⴰⵢⵏⵓⵜ",
    step: "ⵜⴰⵙⵓⵔⵉⴼⵜ",
    stepOf: "ⵙⴳ",
    nextStep: "ⵜⴰⵙⵓⵔⵉⴼⵜ ⵉⴹⴼⴰⵕⵏ",
    login: "ⴽⵛⵎ",
    logout: "ⴼⴼⵖ",
    myAccount: "ⴰⵎⵉⴹⴰⵏ ⵉⵏⵓ",
    theme: "ⴰⵙⵙⴽⵏ",
    themeLight: "ⴰⵎⵍⵍⴰⵍ",
    themeDark: "ⴰⴱⵔⴽⴰⵏ",
    themeSystem: "ⴰⵏⴳⵔⴰⵡ",
    info: "ⵜⴰⵍⵖⴰ",
    success: "ⴰⵎⵓⵔⵙ",
    warning: "ⴰⵙⵙⴼⵍⴷ",
    dismiss: "ⴼⴼⵔ",
    clear: "ⵙⴼⴹ",
    apply: "ⵙⵏⵙ",
    cancel: "ⵙⵙⵔ",
    confirm: "ⵙⴷⴷⵉⴷ",
    results: "ⵉⵎⵢⴰⵡⴰⴹⵏ",
    noResults: "ⵓⵔ ⵉⵍⵍⵉ ⵓⵎⵢⴰⵡⴰⴹ",
    consentTitle: "ⵅⴼ ⵉⴽⵓⴽⵉⵣ",
    consentBody: "ⴰⵙⵉⵜ ⴰⴷ ⵉⵙⵙⵎⵔⴰⵙ ⵉⴽⵓⴽⵉⵣ ⵃⵎⴰ ⴰⴷ ⵉⵙⵙⵖⵓⴷ ⵜⴰⵔⵎⵉⵜ ⵏⵏⵓⵏ.",
    acceptAll: "ⵇⴱⵍ ⴽⵓⵍⵍⵓ",
    refuseAll: "ⴰⴳⵢ ⴽⵓⵍⵍⵓ",
    customise: "ⵙⵏⵎⵍ",
    seeAll: "ⵥⵕ ⴽⵓⵍⵍⵓ",
    lastUpdated: "ⴰⵙⵎⴰⵢⵏⵓ ⴰⵏⴳⴳⴰⵔⵓ",
    readingTime: "ⵜⵓⵙⴷⵉⴷⵉⵏ ⵏ ⵜⵖⵓⵔⵉ",
    contents: "ⴰⵙⵓⴳⵣ",
    notFound: "ⵓⵔ ⵜⵜⵓⵢⴰⴼ ⵜⴰⵙⵏⴰ",
    followUs: "ⴹⴼⵕ ⴰⵖ",
    newsletter: "ⵜⴰⴱⵔⴰⵜ ⵏ ⵉⵏⵖⵎⵉⵙⵏ",
    newsletterHint: "ⵙⵙⵏ ⵉⵏⵖⵎⵉⵙⵏ ⵏ ⵜⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⴳⴷⵓⴷⴰⵏⵉⵏ.",
    subscribe: "ⵣⵎⵎⴻⵎ",
    email: "ⵉⵎⴰⵢⵍ",
    officialSite: "ⴰⵙⵉⵜ ⵓⵏⵚⵉⴱ",
    officialBanner: "ⴰⵙⵉⵜ ⵓⵏⵚⵉⴱ ⵏ ⵜⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ",
    fieldRequired: "ⵉⴳⵔ ⴰⴷ ⵉⵜⵜⵡⴰⵜⵜⵔ.",
    edit: "ⵙⵏⴼⵍ",
    draftSaved: "ⵉⵜⵜⵓⵃⴹⴰ ⵓⵔⵥⵥⵓⵎ",
    summary: "ⴰⴳⵣⵓⵍ",
    firstPage: "ⵜⴰⵙⵏⴰ ⵜⴰⵎⵣⵡⴰⵔⵓⵜ",
    lastPage: "ⵜⴰⵙⵏⴰ ⵜⴰⵏⴳⴳⴰⵔⵓⵜ",
    goToPage: "ⴷⴷⵓ ⵖⵔ ⵜⴰⵙⵏⴰ",
    currentPage: "ⵜⴰⵙⵏⴰ ⵏ ⵖⵉⵍⴰ",
    pagination: "ⴰⵙⵎⴹⵏ ⵏ ⵜⴰⵙⵏⵉⵡⵉⵏ",
    remove: "ⴽⴽⵙ",
    chooseFile: "ⵙⵜⵉ ⴰⴼⴰⵢⵍⵓ",
    dropFiles: "ⵏⵖ ⵙⵔⵙ ⴷⴰ",
    noFile: "ⵓⵔ ⵉⵜⵜⵓⵙⵜⴰⵢ ⵓⴼⴰⵢⵍⵓ",
    sortAscending: "ⵙⵎⵢⵓⵔ ⵙ ⵓⵙⴰⵍⵢ",
    sortDescending: "ⵙⵎⵢⵓⵔ ⵙ ⵓⴳⴳⵣ",
    selectAll: "ⵙⵜⵉ ⴽⵓⵍⵍⵓ",
    selectRow: "ⵙⵜⵉ ⴰⵙⵔⵉⵔ",
    expand: "ⵙⵙⴱⵔⵔⴽ",
    collapse: "ⵙⵙⴳⵣ",
    showTranscript: "ⵙⵙⴽⵏ ⴰⴹⵔⵉⵙ",
    hideTranscript: "ⴼⴼⵔ ⴰⴹⵔⵉⵙ",
    copyLink: "ⵙⵙⵏⵖⵍ ⴰⵣⴷⴰⵢ",
    linkCopied: "ⵉⵜⵜⵓⵙⵏⵖⵍ ⵓⵣⴷⴰⵢ",
    shareOn: "ⴱⴹⵓ ⵅⴼ",
    shareByEmail: "ⴱⴹⵓ ⵙ ⵉⵎⴰⵢⵍ",
    notifications: "ⵉⵏⵖⵎⵉⵙⵏ",
    completed: "ⵜⵙⴰⵍⴰ",
    current: "ⴷⴰ ⵜⵜⵓⴳⴰ",
    upcoming: "ⴷ ⵉⵜⵜⴷⴷⵓⵏ",
    showPassword: "ⵙⵙⴽⵏ ⵜⴰⴳⵓⵔⵉ ⵏ ⵓⵣⵔⴰⵢ",
    hidePassword: "ⴼⴼⵔ ⵜⴰⴳⵓⵔⵉ ⵏ ⵓⵣⵔⴰⵢ",
    selectPlaceholder: "ⵙⵜⵉ",
    noOptions: "ⵓⵔ ⵍⵍⵉⵏ ⵉⵙⵜⴰⵢⵏ",
    charactersRemaining: "ⵉⵙⴽⴽⵉⵍⵏ ⵉⵇⵇⵉⵎⵏ",
    digit: "ⵓⵟⵟⵓⵏ",
    day: "ⴰⵙⵙ",
    month: "ⴰⵢⵢⵓⵔ",
    year: "ⴰⵙⴳⴳⵯⴰⵙ",
    dateHint: "ⴰⵎⴷⵢⴰ: 12/05/1990",
    datePlaceholder: "ⴰⵙⵙ/ⴰⵢⵢⵓⵔ/ⴰⵙⴳⴳⵯⴰⵙ",
    readMore: "ⵖⵔ ⵓⴳⴳⴰⵔ",
    learnMore: "ⵙⵙⵏ ⵓⴳⴳⴰⵔ",
    howToKnow: "ⵎⴰⵎⴽ ⴰⴷ ⵜⵙⵙⵏⴷ?",
    officialExplainer: "ⵉⵙⵉⵜⵏ ⵓⵏⵚⵉⴱⵏ ⵙⵙⵎⵔⴰⵙⵏ gov.ma ⴷ https.",
    officialDomainExplainer: "ⴰⵙⵉⵜ ⵓⵏⵚⵉⴱ ⵉⵙⵙⵎⵔⴰⵙ gov.ma.",
    secure: "ⵉⵜⵜⵓⴼⵔⴰⴳ",
    steps: "ⵜⵉⵙⵓⵔⵉⴼⵉⵏ",
    menuTitle: "ⴳ ⵜⵉⴳⵣⵎⵉ ⴰⴷ",
    acceptedFormats: "ⵜⴰⵍⵖⵉⵡⵉⵏ ⵉⵜⵜⵓⵇⴱⴰⵍⵏ",
    maxSizeSuffix: "ⵎⴱ ⵙ ⵓⴼⵍⵍⴰ",
    footerLandmark: "ⴰⴹⴰⵕ ⵏ ⵜⴰⵙⵏⴰ",
    quickAccess: "ⴰⴽⵛⵛⵓⵎ ⴰⵔⵓⵔⴰⴷ",
    mainNav: "ⴰⵏⵏⴰⵢ ⴰⴳⵊⴷⴰⵏ",
    moroccoMap: "ⵜⴰⴽⴰⵕⴹⴰ ⵏ ⵍⵎⵖⵔⵉⴱ ⵙ ⵜⵙⴳⵉⵡⵉⵏ",
    moroccoMapHint: "ⵙⵜⵉ ⵏⵖ ⴼⵔⵏ ⵜⴰⵙⴳⴰ",
    regionCapital: "ⵜⴰⵎⴰⵥⵓⵏⵜ ⵏ ⵜⵙⴳⴰ",
    cnieInvalid: "ⵓⵟⵟⵓⵏ ⵏ ⵜⴽⴰⵕⴹⴰ ⵜⴰⵏⴰⵎⵓⵔⵜ ⵓⵔ ⵉⵖⵉ: ⵢⴰⵏ ⵏⵖ ⵙⵉⵏ ⵉⵙⴽⴽⵉⵍⵏ ⴷ 5 ⴰⵔ 7 ⵓⵟⵟⵓⵏⵏ (ⴰⵎⴷⵢⴰ AB123456).",
    iceInvalid: "ICE ⵉⵍⴰ 15 ⵓⵟⵟⵓⵏⵏ ⵙ ⵓⵎⴰⵜⴰ.",
    ribInvalid: "RIB ⵓⵔ ⵉⵖⵉ: 24 ⵓⵟⵟⵓⵏⵏ ⴷ ⵜⵙⴰⵔⵓⵜ ⵏ ⵓⵙⴼⵙⵉ ⵜⴰⵎⵖⵜⴰⵙⵜ.",
    phoneInvalid: "ⵓⵟⵟⵓⵏ ⵓⵔ ⵉⵖⵉ: 10 ⵓⵟⵟⵓⵏⵏ ⵉⴱⴷⴷⴰⵏ ⵙ 05, 06, 07 ⵏⵖ 08.",
    dossierReference: "ⴰⵙⴰⵖⵓⵍ",
    dossierSubmittedOn: "ⵉⵜⵜⵓⵙⵔⵙ ⴳ",
    dossierUpdated: "ⵉⵜⵜⵓⵙⵎⴰⵢⵏⵓ ⴳ",
    dossierExpected: "ⴰⵣⵎⵣ ⵉⵜⵜⵓⵔⴰⵊⴰⵏ",
    dossierNextAction: "ⵜⴰⵙⵓⵔⵉⴼⵜ ⵜⴰⴷ ⵉⴹⴼⴰⵕⵏ ⵉ ⴽⵯⵏⵏⵉ",
    statusSubmitted: "ⵉⵜⵜⵓⵙⵔⵙ",
    statusInReview: "ⴳ ⵓⵙⵡⵉⵏⴳⵎ",
    statusActionRequired: "ⵜⵍⴰ ⵢⴰⵜ ⵜⵉⴳⴰⵡⵜ",
    statusApproved: "ⵉⵜⵜⵓⵇⴱⴰⵍ",
    statusRejected: "ⵉⵜⵜⵡⴰⴳⵉ",
    statusReady: "ⵉⵡⵊⴷ",
  },
  en: {
    kingdom: "Kingdom of Morocco",
    close: "Close",
    open: "Open",
    menu: "Menu",
    search: "Search",
    searchPlaceholder: "Search a service or procedure…",
    skipToContent: "Skip to content",
    skipToNav: "Skip to navigation",
    skipToFooter: "Skip to footer",
    backToTop: "Back to top",
    previous: "Previous",
    next: "Next",
    page: "Page",
    pageOf: "of",
    breadcrumb: "You are here",
    home: "Home",
    required: "required",
    optional: "optional",
    showMore: "Show more",
    showLess: "Show less",
    loading: "Loading",
    error: "Error",
    language: "Language",
    selectLanguage: "Select language",
    download: "Download",
    share: "Share",
    print: "Print",
    copy: "Copy",
    copied: "Copied",
    newTab: "new window",
    step: "Step",
    stepOf: "of",
    nextStep: "Next step",
    login: "Sign in",
    logout: "Sign out",
    myAccount: "My account",
    theme: "Display",
    themeLight: "Light",
    themeDark: "Dark",
    themeSystem: "System",
    info: "Information",
    success: "Success",
    warning: "Warning",
    dismiss: "Dismiss",
    clear: "Clear",
    apply: "Apply",
    cancel: "Cancel",
    confirm: "Confirm",
    results: "results",
    noResults: "No results",
    consentTitle: "About cookies",
    consentBody: "This site uses cookies to measure its audience and improve your experience. You can accept or refuse non-essential trackers.",
    acceptAll: "Accept all",
    refuseAll: "Refuse all",
    customise: "Customise",
    seeAll: "See all",
    lastUpdated: "Last updated",
    readingTime: "min read",
    contents: "Contents",
    notFound: "Page not found",
    followUs: "Follow us",
    newsletter: "Newsletter",
    newsletterHint: "Get the latest on public services.",
    subscribe: "Subscribe",
    email: "Email address",
    officialSite: "Official website",
    officialBanner: "An official website of the Kingdom of Morocco",
    fieldRequired: "This field is required.",
    edit: "Edit",
    draftSaved: "Draft saved",
    summary: "Summary",
    firstPage: "First page",
    lastPage: "Last page",
    goToPage: "Go to page",
    currentPage: "Current page",
    pagination: "Pagination",
    remove: "Remove",
    chooseFile: "Choose a file",
    dropFiles: "or drag and drop here",
    noFile: "No file selected",
    sortAscending: "Sort ascending",
    sortDescending: "Sort descending",
    selectAll: "Select all",
    selectRow: "Select row",
    expand: "Expand",
    collapse: "Collapse",
    showTranscript: "Show transcript",
    hideTranscript: "Hide transcript",
    copyLink: "Copy link",
    linkCopied: "Link copied",
    shareOn: "Share on",
    shareByEmail: "Share by email",
    notifications: "Notifications",
    completed: "Completed",
    current: "In progress",
    upcoming: "Upcoming",
    showPassword: "Show password",
    hidePassword: "Hide password",
    selectPlaceholder: "Select",
    noOptions: "No options",
    charactersRemaining: "characters remaining",
    digit: "Digit",
    day: "Day",
    month: "Month",
    year: "Year",
    dateHint: "For example: 12/05/1990",
    datePlaceholder: "DD/MM/YYYY",
    readMore: "Read more",
    learnMore: "Learn more",
    howToKnow: "Here's how you know",
    officialExplainer: "Official websites use gov.ma and a secure (https) connection. Share sensitive information only on official, secure websites.",
    officialDomainExplainer: "Official websites of the Kingdom use the .gov.ma domain, reserved for the Moroccan administration.",
    secure: "Secure",
    steps: "Steps",
    menuTitle: "In this section",
    acceptedFormats: "Accepted formats",
    maxSizeSuffix: "MB max",
    footerLandmark: "Footer",
    quickAccess: "Quick access",
    mainNav: "Main navigation",
    moroccoMap: "Map of Morocco by region",
    moroccoMapHint: "Hover or select a region",
    regionCapital: "Capital",
    cnieInvalid: "Invalid CNIE number: one or two letters followed by 5 to 7 digits (e.g. AB123456).",
    iceInvalid: "The ICE has exactly 15 digits.",
    ribInvalid: "Invalid RIB: 24 digits with a correct control key.",
    phoneInvalid: "Invalid number: 10 digits starting with 05, 06, 07 or 08.",
    dossierReference: "Reference",
    dossierSubmittedOn: "Submitted on",
    dossierUpdated: "Updated on",
    dossierExpected: "Expected by",
    dossierNextAction: "Your next step",
    statusSubmitted: "Submitted",
    statusInReview: "Under review",
    statusActionRequired: "Action required",
    statusApproved: "Approved",
    statusRejected: "Rejected",
    statusReady: "Ready",
  },
};

/** Trilingual national wordmark lines, in the order they appear on official signage. */
export const kingdomWordmark = [
  { lang: "ar", text: "المملكة المغربية" },
  { lang: "zgh", text: "ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ" },
  { lang: "fr", text: "Royaume du Maroc" },
] as const;
