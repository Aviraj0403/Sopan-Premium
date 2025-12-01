import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function TeamSection() {
  const lifeTrustees = [
    {
      name: "Ms. Supriya Kumari",
      role: "Settlor & President (Life Trustee)",
      initials: "SK",
    },
    {
      name: "Mr. Pawan Kumar",
      role: "Trustee & Treasurer",
      initials: "PK",
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-team-title">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-team-subtitle">
            Dedicated leadership committed to serving children with special needs
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Life Trustees</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {lifeTrustees.map((trustee, index) => (
              <Card key={index} className="p-8 text-center hover-elevate" data-testid={`card-trustee-${index + 1}`}>
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/10">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                    {trustee.initials}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-xl font-bold text-foreground mb-2" data-testid={`text-trustee-name-${index + 1}`}>
                  {trustee.name}
                </h4>
                <p className="text-muted-foreground" data-testid={`text-trustee-role-${index + 1}`}>
                  {trustee.role}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-card max-w-4xl mx-auto" data-testid="card-team-strength">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Strength</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team includes qualified therapists, special educators, counsellors, caregivers, and volunteers dedicated to serving children with special needs. Together, we bring expertise, compassion, and commitment to every child we support.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
