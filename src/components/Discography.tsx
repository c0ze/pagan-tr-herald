import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Release {
  title: string;
  type: string;
  year: number;
  description?: string;
}

const releases: Release[] = [
  {
    title: "Acolytes",
    type: "EP",
    year: 2024,
    description: "Latest offering from the depths of the underground"
  },
  {
    title: "Rehearsal Tape '19",
    type: "Demo",
    year: 2019,
    description: "Marking the return after years of silence"
  },
  {
    title: "Oz : In Transcendence",
    type: "Full-length",
    year: 2007,
    description: "The band's magnum opus, exploring mystical realms"
  },
  {
    title: "Heathen Upheaval",
    type: "Demo",
    year: 1998,
    description: "Raw and uncompromising blackened assault"
  },
  {
    title: "Rehearsal Tape '96",
    type: "Demo",
    year: 1996,
    description: "Early recordings showcasing primitive intensity"
  },
  {
    title: "In Hoc Signo Vinces",
    type: "Demo",
    year: 1995,
    description: "The beginning - first recorded material"
  }
];

export const Discography = () => {
  return (
    <section id="discography" className="py-20 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-shadow-glow">
            DISCOGRAPHY
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Nearly three decades of darkness
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {releases.map((release, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                      {release.year}
                    </span>
                    <span className="text-xs uppercase tracking-wider px-2 py-1 bg-primary/20 text-primary rounded">
                      {release.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {release.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {release.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.metal-archives.com/bands/Pagan/4260"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground border border-border hover:border-primary transition-all duration-300 uppercase tracking-wider text-sm font-semibold"
            >
              View on Metal Archives
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
