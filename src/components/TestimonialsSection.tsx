import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarra T.",
    text: "Le blanchiment dentaire chez le Dr Marwa a dépassé mes attentes ! Résultat naturel et éclatant. Elle explique parfaitement chaque étape.",
    rating: 5,
  },
  {
    name: "Karim B.",
    text: "Excellent détartrage ! Le Dr Marwa est très douce et professionnelle. Le cabinet est impeccable et moderne. Je me suis senti en confiance.",
    rating: 5,
  },
  {
    name: "Leila M.",
    text: "Dr Marwa est vraiment à l'écoute et très professionnelle. Elle prend le temps d'expliquer les soins et les résultats sont naturels. Je recommande !",
    rating: 5,
  },
  {
    name: "Youssef K.",
    text: "Implant dentaire réussi parfaitement ! Le suivi est impeccable et le Dr Marwa est une véritable professionnelle. Cabinet très propre.",
    rating: 5,
  },
  {
    name: "Amine H.",
    text: "Très bonne expérience chez Dr Marwa. Cabinet moderne, accueil professionnel et soins sans douleur. Je recommande vivement.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="avis" className="section-padding bg-dental-warm overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Témoignages
          </p>
          <h2 className="section-title">4.9/5 étoiles • 58 avis Google</h2>
          <p className="section-subtitle">
            Découvrez ce que nos patients disent du Dr Marwa Ben Dhia Boumaiza
          </p>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{t.text}"
                </p>

                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="font-semibold text-foreground text-sm">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;