import { Card } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover-elevate" data-testid="card-mission">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" data-testid="icon-mission" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-mission">
              To empower children with special needs through education, therapy, rehabilitation, skill development, and community support—ensuring a life of independence and respect.
            </p>
          </Card>

          <Card className="p-8 hover-elevate" data-testid="card-vision">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-secondary" data-testid="icon-vision" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-vision">
              A society where every differently-abled child is valued, included, and given the opportunity to reach their fullest potential.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
