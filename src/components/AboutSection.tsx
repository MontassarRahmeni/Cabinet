import { ShieldCheck, Award, HeartPulse, Sparkles } from "lucide-react";
import drMarwaPhoto from "@/assets/dr-marwa-photo.jpg";

const features = [
  { icon: Award, title: "Spécialiste en implantologie", desc: "Expertise reconnue en pose d'implants dentaires pour restaurer votre sourire." },
  { icon: Sparkles, title: "Esthétique dentaire", desc: "Techniques avancées de blanchiment et de cosmétique dentaire." },
  { icon: ShieldCheck, title: "Cabinet moderne et hygiénique", desc: "Équipements de dernière génération et protocoles d'hygiène stricts." },
  { icon: HeartPulse, title: "Relation de confiance", desc: "Approche douce et professionnelle pour un accompagnement personnalisé." },
];

const AboutSection = () => (
  <section id="apropos" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={drMarwaPhoto} alt="Dr Marwa Ben Dhia Boumaiza - Chirurgien-dentiste" loading="lazy" width={800} height={800} className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-6 py-3 shadow-soft font-heading text-lg font-semibold">
            Dr Marwa Ben Dhia Boumaiza
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">À propos</p>
            <h2 className="section-title">Une expertise au service de votre sourire</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Le Dr Marwa Ben Dhia Boumaiza, chirurgien-dentiste spécialisée en implantologie et esthétique dentaire, vous accueille dans un cabinet moderne et équipé des dernières technologies. Avec une approche douce et professionnelle, elle met tout en œuvre pour offrir des soins dentaires de qualité supérieure.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Forte d'une expérience significative en soins dentaires, détartrage, blanchiment et implantologie, le Dr Ben Dhia Boumaiza établit une relation de confiance avec chaque patient. Son objectif : des résultats naturels et durables dans un cadre sécurisant et confortable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <f.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{f.title}</p>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
