import { Quote } from "@/dsm/components/quote";

const portrait =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' rx='20' fill='#e4ddd2'/><circle cx='20' cy='16' r='7' fill='#8b857b'/><path d='M6 35c2-8.5 8-13 14-13s12 4.5 14 13' fill='#8b857b'/></svg>",
  );

export default function QuoteWithPortrait() {
  return (
    <Quote size="lg" author="Karim A." role="Responsable innovation, Agence de Développement du Digital" image={portrait} className="max-w-xl">
      Idarati.ma a permis de réduire de moitié le temps moyen de traitement des démarches les plus demandées en un peu plus d&apos;un an.
    </Quote>
  );
}
