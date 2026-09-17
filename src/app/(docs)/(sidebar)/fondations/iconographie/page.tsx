import type { Metadata } from "next";
import type { ComponentType } from "react";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { Button } from "@/dsm/components/button";
import {
  ArrowForward,
  ArrowBack,
  ChevronForward,
  ChevronBack,
  ArrowOutward,
  Check,
  X,
  ExternalLink,
  Search,
  SearchX,
  Menu,
  Globe,
  Sun,
  Moon,
  Monitor,
  Info,
  CircleCheck,
  TriangleAlert,
  CircleAlert,
  Download,
  Share2,
  Printer,
  Copy,
  User,
  Users,
  LogIn,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  FileText,
  Paperclip,
  Upload,
  Filter,
  Eye,
  Lock,
  Star,
  Building2,
  Landmark,
  Home,
  Loader2,
  Accessibility,
  Languages,
  Bell,
  Settings,
  Pencil,
  RefreshCw,
  BadgeCheck,
  ShieldCheck,
  LayoutGrid,
  Mic,
  Camera,
  Car,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Scale,
  Wallet,
  Baby,
  HeartHandshake,
  Tractor,
  Plane,
  ScrollText,
  Fingerprint,
  QrCode,
  Send,
  Newspaper,
  Megaphone,
  Vote,
  Flag,
  Award,
  ClipboardList,
  SocialX,
  SocialFacebook,
  SocialInstagram,
  SocialYoutube,
  SocialLinkedin,
} from "@/dsm/icons";

export const metadata: Metadata = {
  title: "Iconographie",
  description: "Un jeu curaté de Lucide, importé uniquement depuis @/dsm/icons. Les glyphes directionnels (flèches, chevrons) se retournent seuls en contexte RTL ; les glyphes à sens fixe (validation, fermeture, lien externe) ne bougent jamais.",
  alternates: { canonical: "/fondations/iconographie" },
  openGraph: { url: "/fondations/iconographie" },
};

const iconGrid: { name: string; Icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }> }[] = [
  { name: "Search", Icon: Search },
  { name: "SearchX", Icon: SearchX },
  { name: "Menu", Icon: Menu },
  { name: "Globe", Icon: Globe },
  { name: "Sun", Icon: Sun },
  { name: "Moon", Icon: Moon },
  { name: "Monitor", Icon: Monitor },
  { name: "Info", Icon: Info },
  { name: "CircleCheck", Icon: CircleCheck },
  { name: "TriangleAlert", Icon: TriangleAlert },
  { name: "CircleAlert", Icon: CircleAlert },
  { name: "Download", Icon: Download },
  { name: "Share2", Icon: Share2 },
  { name: "Printer", Icon: Printer },
  { name: "Copy", Icon: Copy },
  { name: "User", Icon: User },
  { name: "Users", Icon: Users },
  { name: "LogIn", Icon: LogIn },
  { name: "Mail", Icon: Mail },
  { name: "Phone", Icon: Phone },
  { name: "MapPin", Icon: MapPin },
  { name: "Calendar", Icon: Calendar },
  { name: "Clock", Icon: Clock },
  { name: "FileText", Icon: FileText },
  { name: "Paperclip", Icon: Paperclip },
  { name: "Upload", Icon: Upload },
  { name: "Filter", Icon: Filter },
  { name: "Eye", Icon: Eye },
  { name: "Lock", Icon: Lock },
  { name: "Star", Icon: Star },
  { name: "Building2", Icon: Building2 },
  { name: "Landmark", Icon: Landmark },
  { name: "Home", Icon: Home },
  { name: "Loader2", Icon: Loader2 },
  { name: "Accessibility", Icon: Accessibility },
  { name: "Languages", Icon: Languages },
  { name: "Bell", Icon: Bell },
  { name: "Settings", Icon: Settings },
  { name: "Pencil", Icon: Pencil },
  { name: "RefreshCw", Icon: RefreshCw },
  { name: "BadgeCheck", Icon: BadgeCheck },
  { name: "ShieldCheck", Icon: ShieldCheck },
  { name: "LayoutGrid", Icon: LayoutGrid },
  { name: "Mic", Icon: Mic },
  { name: "Camera", Icon: Camera },
  { name: "Car", Icon: Car },
  { name: "Stethoscope", Icon: Stethoscope },
  { name: "GraduationCap", Icon: GraduationCap },
  { name: "Briefcase", Icon: Briefcase },
  { name: "Scale", Icon: Scale },
  { name: "Wallet", Icon: Wallet },
  { name: "Baby", Icon: Baby },
  { name: "HeartHandshake", Icon: HeartHandshake },
  { name: "Tractor", Icon: Tractor },
  { name: "Plane", Icon: Plane },
  { name: "ScrollText", Icon: ScrollText },
  { name: "Fingerprint", Icon: Fingerprint },
  { name: "QrCode", Icon: QrCode },
  { name: "Send", Icon: Send },
  { name: "Newspaper", Icon: Newspaper },
  { name: "Megaphone", Icon: Megaphone },
  { name: "Vote", Icon: Vote },
  { name: "Flag", Icon: Flag },
  { name: "Award", Icon: Award },
  { name: "ClipboardList", Icon: ClipboardList },
];

const directional = [
  { name: "ArrowForward", Icon: ArrowForward },
  { name: "ChevronForward", Icon: ChevronForward },
  { name: "ArrowBack", Icon: ArrowBack },
  { name: "ChevronBack", Icon: ChevronBack },
  { name: "ArrowOutward", Icon: ArrowOutward },
];

const fixed = [
  { name: "Check", Icon: Check },
  { name: "X", Icon: X },
  { name: "ExternalLink", Icon: ExternalLink },
];

const socials = [
  { name: "SocialX", Icon: SocialX },
  { name: "SocialFacebook", Icon: SocialFacebook },
  { name: "SocialInstagram", Icon: SocialInstagram },
  { name: "SocialYoutube", Icon: SocialYoutube },
  { name: "SocialLinkedin", Icon: SocialLinkedin },
];

export default function Iconography() {
  return (
    <article>
      <PageHeader
        eyebrow="Fondations"
        title="Iconographie"
        titleAr="الأيقونات"
        description="Un jeu curaté de Lucide, importé uniquement depuis @/dsm/icons. Les glyphes directionnels (flèches, chevrons) se retournent seuls en contexte RTL ; les glyphes à sens fixe (validation, fermeture, lien externe) ne bougent jamais."
      />

      <Section
        id="principes"
        title="Principes"
        description="Quatre règles suffisent à garder les icônes cohérentes et accessibles dans tout le système."
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            ["Taille relative dans les contrôles", "Dans un bouton ou un champ, une icône fait 1.15em : elle suit la taille du texte porteur via [&_svg]:size-[1.15em]."],
            ["Décorative par défaut", "Une icône accompagnée d'un libellé visible reçoit aria-hidden : le lecteur d'écran ne la lit pas deux fois."],
            ["Nommée seule", "Un bouton icône-seul (fermer, menu, thème) porte aria-label sur le bouton, jamais sur l'icône."],
            ["Une seule provenance", "Toutes les icônes s'importent depuis @/dsm/icons, jamais directement depuis lucide-react, pour garder le jeu curaté et les variantes directionnelles."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="directionnelles"
        title="Glyphes directionnels"
        description="ArrowForward, ChevronForward, ArrowBack, ChevronBack et ArrowOutward portent la classe dsm-flip-rtl : ils pointent toujours dans le sens de lecture, sans code spécifique côté page."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-surface p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-subtle">LTR (dir=&quot;ltr&quot;)</p>
            <div className="flex flex-wrap items-center gap-6">
              {directional.map(({ name, Icon }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <Icon className="size-6 text-ink" />
                  <span className="font-mono text-[0.6875rem] text-ink-subtle">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div dir="rtl" className="rounded-lg border border-line bg-surface p-6">
            <p className="mb-4 text-end text-xs font-semibold uppercase tracking-wide text-ink-subtle">RTL (dir=&quot;rtl&quot;)</p>
            <div className="flex flex-wrap items-center gap-6">
              {directional.map(({ name, Icon }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <Icon className="size-6 text-ink" />
                  <span className="font-mono text-[0.6875rem] text-ink-subtle">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          Remarquez le miroir : en RTL, <code className="font-mono text-xs">ArrowForward</code> pointe vers la gauche parce que
          c&apos;est là que se trouve « la suite » du parcours.
        </p>
      </Section>

      <Section
        id="fixes"
        title="Glyphes à sens fixe"
        description="Une coche, une croix ou un lien externe ont un sens universel : ils ne se retournent jamais, quelle que soit la direction."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-surface p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-subtle">LTR</p>
            <div className="flex flex-wrap items-center gap-6">
              {fixed.map(({ name, Icon }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <Icon className="size-6 text-ink" />
                  <span className="font-mono text-[0.6875rem] text-ink-subtle">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div dir="rtl" className="rounded-lg border border-line bg-surface p-6">
            <p className="mb-4 text-end text-xs font-semibold uppercase tracking-wide text-ink-subtle">RTL</p>
            <div className="flex flex-wrap items-center gap-6">
              {fixed.map(({ name, Icon }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <Icon className="size-6 text-ink" />
                  <span className="font-mono text-[0.6875rem] text-ink-subtle">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="social" title="Icônes sociales" description="Cinq pictogrammes de réseaux, dessinés en trait plein pour s'accorder au reste du jeu.">
        <div className="flex flex-wrap items-center gap-6 rounded-lg border border-line bg-surface p-6">
          {socials.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <Icon className="size-6 text-ink" />
              <span className="font-mono text-[0.6875rem] text-ink-subtle">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="jeu"
        title="Jeu d'icônes"
        description="Un aperçu du jeu curaté exposé par @/dsm/icons — imports nommés uniquement, jamais d'import dynamique."
      >
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-8">
          {iconGrid.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-md border border-line bg-surface py-4 text-center"
            >
              <Icon className="size-5 text-ink-muted" />
              <span className="px-1 font-mono text-[0.625rem] leading-tight text-ink-subtle">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="code" title="Utilisation">
        <div className="space-y-4">
          <CodeBlock
            lang="tsx"
            code={`import { ArrowForward, X } from "@/dsm/icons";\n\n// Icône décorative à côté d'un libellé visible\n<Button iconEnd={<ArrowForward />}>Continuer</Button>\n\n// Icône seule : le libellé va sur le bouton, pas sur l'icône\n<button aria-label="Fermer">\n  <X aria-hidden className="size-4" />\n</button>`}
          />
          <div className="flex items-center gap-3 rounded-lg border border-line bg-surface p-5">
            <Button variant="secondary" size="icon" aria-label="Fermer">
              <X aria-hidden />
            </Button>
            <p className="text-sm text-ink-muted">
              Bouton icône-seul : <code className="font-mono text-xs">aria-label</code> sur <code className="font-mono text-xs">Button</code>, <code className="font-mono text-xs">aria-hidden</code> sur l&apos;icône.
            </p>
          </div>
          <Alert tone="warning" title="N'importez jamais depuis lucide-react directement">
            Le jeu curaté garantit un rendu homogène et les variantes directionnelles. Si une icône manque, ajoutez-la à
            <code className="ms-1 font-mono text-xs">src/dsm/icons/index.tsx</code> plutôt que de contourner l&apos;import.
          </Alert>
        </div>
      </Section>
    </article>
  );
}
