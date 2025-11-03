import paganBandPhoto from "@/assets/pagan-band-photo.jpg";

export const Biography = () => {
  return (
    <section id="biography" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-shadow-glow">
            BIOGRAPHY
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                <span className="text-primary font-bold">Pagan</span> is a black metal band from Istanbul, Türkiye, formed in <span className="text-primary">1995</span>. 
                Pioneering the Turkish black metal scene, Pagan explores themes of paganism, shamanism, and mysticism through their raw and atmospheric sound.
              </p>

              <p>
                The band was active during the formative years of extreme metal in Turkey from 1995 to 2007, releasing several influential demos 
                and culminating in their full-length album <span className="italic text-primary">"Oz : In Transcendence"</span> in 2007.
              </p>

              <p>
                After a 12-year hiatus, Pagan returned to the underground in <span className="text-primary">2019</span>, reinvigorated and ready to 
                continue their journey into the darkness. In 2024, they released their latest work, the <span className="italic text-primary">"Acolytes"</span> EP, 
                showcasing their evolution while maintaining the raw essence that defines their sound.
              </p>

              <div className="pt-4 border-t border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">Current Lineup</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><span className="text-foreground font-semibold">Talciron</span> - Guitars, Vocals</li>
                  <li><span className="text-foreground font-semibold">Noctivagus</span> - Guitars, Vocals</li>
                  <li><span className="text-foreground font-semibold">War</span> - Drums</li>
                  <li><span className="text-foreground font-semibold">Anker</span> - Bass</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="border-2 border-primary/30 border-glow">
                <img 
                  src={paganBandPhoto} 
                  alt="Pagan Band" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
