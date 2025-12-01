import { Card } from "@/components/ui/card";
import { Building2, Target, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Dedicated to transforming lives through compassionate care and comprehensive support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center hover-elevate" data-testid="card-about-who">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-primary" data-testid="icon-about-who" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed">
              A non-profit trust established by Ms. Supriya Kumari, committed to supporting children with disabilities.
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate" data-testid="card-about-purpose">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-secondary" data-testid="icon-about-purpose" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Core Purpose</h3>
            <p className="text-muted-foreground leading-relaxed">
              Providing comprehensive support through education, therapy, care, training, and advocacy.
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate" data-testid="card-about-why">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" data-testid="icon-about-why" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Why We Exist</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bridging the gap for millions of children with disabilities who lack proper support.
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-card" data-testid="card-about-story">
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sopan Foundation is a charitable organization dedicated to supporting children with neurodevelopmental and intellectual disabilities. We work towards creating an inclusive environment where every child receives equal opportunities for growth, dignity, and independence.
            </p>
            <p>
              The Foundation operates under a strong governance structure and is committed to transparency, equality, and charitable service. Our team includes qualified therapists, special educators, counsellors, caregivers, and volunteers dedicated to serving children with special needs.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
