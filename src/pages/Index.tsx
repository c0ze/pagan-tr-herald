import { Hero } from "@/components/Hero";
import { Biography } from "@/components/Biography";
import { Discography } from "@/components/Discography";
import { Media } from "@/components/Media";
import { Links } from "@/components/Links";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Biography />
      <Discography />
      <Media />
      <Links />
      <Footer />
    </main>
  );
};

export default Index;
