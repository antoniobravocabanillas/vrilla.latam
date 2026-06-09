import { AboutExperience } from "@/components/about-visual";
import { InteriorPage } from "@/components/interior-page";

export default function NosotrosPage() {
  return (
    <InteriorPage
      eyebrow="Nosotros"
      title="Construimos sistemas para que organizaciones con alto potencial operen mejor y crezcan con claridad."
      copy="VRILLA integra estrategia, tecnología, automatización, inteligencia y crecimiento empresarial para transformar fricción operativa en ventaja competitiva real."
    >
      <AboutExperience />
    </InteriorPage>
  );
}
