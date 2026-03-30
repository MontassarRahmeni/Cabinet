import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  { src: gallery1, alt: "Fauteuil dentaire moderne du cabinet", label: "Salle de soins" },
  { src: gallery2, alt: "Équipements dentaires de dernière génération", label: "Technologie avancée" },
  { src: gallery3, alt: "Salle d'attente moderne et accueillante", label: "Espace accueil" },
];

const GallerySection = () => (
  <section id="galerie" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Galerie</p>
        <h2 className="section-title">Notre cabinet dentaire moderne</h2>
        <p className="section-subtitle">Un environnement propre, moderne et équipé des dernières technologies pour vos soins dentaires.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.label} className="group relative rounded-2xl overflow-hidden shadow-card">
            <img src={img.src} alt={img.alt} loading="lazy" width={800} height={600} className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-primary-foreground font-heading text-lg font-semibold">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
