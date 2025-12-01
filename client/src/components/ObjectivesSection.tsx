import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function ObjectivesSection() {
  const primaryObjectives = [
    "Establish and operate special schools, therapy centers, inclusive education units, and residential care homes",
    "Provide speech, occupational, physiotherapy, behavioral therapy, sensory integration, and psychological counselling",
    "Promote inclusive education, sports, and vocational training for differently-abled children",
    "Support parents through training, counselling, and awareness programs",
    "Collaborate with government bodies, NGOs, CSR partners, and professionals for resource mobilization",
  ];

  const otherObjectives = [
    "Set up early intervention centres for young children",
    "Create panels of doctors, therapists, educators, and volunteers",
    "Provide mobility aids, assistive devices, and educational tools",
    "Offer scholarships and financial aid to underprivileged families",
    "Conduct campaigns, street plays, seminars, and awareness programs on disability inclusion",
    "Publish educational materials, manuals, and research documents",
    "Help families access government schemes, disability certificates, and legal guidance",
    "Run rural outreach programs and mobile service units",
    "Train teachers and caregivers through workshops and certification courses",
  ];

  return (
    <section id="objectives" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-objectives-title">
            Our Objectives
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-objectives-subtitle">
            Structured goals to create lasting impact in the lives of children with special needs
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8" data-testid="card-primary-objectives">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              Primary Objectives
            </h3>
            <ul className="space-y-4">
              {primaryObjectives.map((objective, index) => (
                <li key={index} className="flex gap-3" data-testid={`item-primary-objective-${index + 1}`}>
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8" data-testid="card-other-objectives">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-secondary rounded-full"></span>
              Other Key Objectives
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {otherObjectives.map((objective, index) => (
                <li key={index} className="flex gap-3" data-testid={`item-other-objective-${index + 1}`}>
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
