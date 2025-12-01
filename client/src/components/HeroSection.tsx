import { Button } from "@/components/ui/button";
import { Heart, Users, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/hero_image_therapy_children.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Children with special needs in therapy and learning environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-8 h-8 text-accent" fill="currentColor" data-testid="icon-hero-heart" />
            <span className="text-accent font-semibold text-lg" data-testid="text-hero-subtitle">
              A Charitable Trust for Special Needs Children
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
            Empowering Special Lives With Love & Purpose
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed" data-testid="text-hero-description">
            Supporting children with neurodevelopmental and intellectual disabilities through education, therapy, rehabilitation, and community support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
              onClick={() => scrollToSection("#get-involved")}
              data-testid="button-hero-donate"
            >
              <Heart className="w-5 h-5 mr-2" />
              Support Our Mission
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8"
              onClick={() => scrollToSection("#services")}
              data-testid="button-hero-learn"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" data-testid="card-hero-stat-1">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-8 h-8 text-accent" />
                <div className="text-3xl font-bold text-white">100+</div>
              </div>
              <div className="text-white/90 font-medium">Children Supported</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" data-testid="card-hero-stat-2">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-8 h-8 text-accent" fill="currentColor" />
                <div className="text-3xl font-bold text-white">6+</div>
              </div>
              <div className="text-white/90 font-medium">Core Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" data-testid="card-hero-stat-3">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-8 h-8 text-accent" />
                <div className="text-3xl font-bold text-white">24/7</div>
              </div>
              <div className="text-white/90 font-medium">Dedicated Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
