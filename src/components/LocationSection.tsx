import { MapPin, Clock, Phone } from "lucide-react";

const hours = [
  { day: "Lundi - Samedi", time: "08:30 - 18:00" },
  { day: "Dimanche", time: "Fermé" },
];

const LocationSection = () => (
  <section id="localisation" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Localisation</p>
        <h2 className="section-title">Où nous trouver</h2>
        <p className="section-subtitle">Facilement accessible au cœur de Menzah 9 Médical</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-card h-80 lg:h-full min-h-[320px]">
          <iframe
            title="Localisation du cabinet dentaire Dr Marwa Ben Dhia Boumaiza"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.365961734563!2d10.189876315326!3d36.8425073799453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd2b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s40+Avenue+Salah+Ben+Youssef%2C+El+Menzah+9%2C+Menzah+9+M%C3%A9dical%2C+1013+Tunis!5e0!3m2!1sfr!2stn!4v1600000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">Adresse</h3>
              <p className="text-muted-foreground">40 Avenue Salah Ben Youssef<br />El Menzah 9<br />Menzah 9 Médical<br />1013 Tunis, Tunisie</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">Téléphone</h3>
              <p className="text-muted-foreground">22 123 123</p>
              <p className="text-muted-foreground">WhatsApp: 216 22 123 123</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">Horaires</h3>
              <div className="space-y-1">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-8 text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium text-foreground">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
