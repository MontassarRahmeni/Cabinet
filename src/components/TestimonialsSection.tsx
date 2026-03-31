import { Star, Quote, User } from "lucide-react";

const testimonials = [
  { name: "Sophie L.", text: "Un cabinet exceptionnel ! Le dentiste est très professionnel et à l'écoute. Le détartrage a été rapide et indolore. Je recommande vivement.", rating: 5 },
  { name: "Thomas M.", text: "Excellent blanchiment dentaire ! Résultat naturel et éclatant. Le cabinet est très moderne et propre. Je suis très satisfait du service.", rating: 5 },
  { name: "Marie D.", text: "J'avais très peur du dentiste, mais l'équipe m'a mise en confiance. Les soins sont de qualité et le suivi est impeccable.", rating: 5 },
  { name: "Ahmed K.", text: "Service professionnel et attentionné. Le dentiste prend le temps d'expliquer les traitements et les résultats sont parfaits.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="avis" className="section-padding bg-dental-warm overflow-hidden">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Témoignages</p>
        <h2 className="section-title">Ce que disent nos patients</h2>
        <p className="section-subtitle">La satisfaction de nos patients est notre plus grande récompense.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 animate-slide-in">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <Quote className="h-6 w-6 text-primary/20" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-semibold text-foreground text-sm">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;