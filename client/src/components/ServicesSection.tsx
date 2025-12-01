import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Briefcase, Accessibility, Users, Megaphone } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "Special Education",
      description: "Structured programs for children with autism, cerebral palsy, intellectual disabilities, and learning challenges.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Therapy & Rehabilitation",
      description: "Speech therapy, occupational therapy, physiotherapy, behavioral therapy, sensory integration, and psychological counselling.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Briefcase,
      title: "Vocational Training",
      description: "Skill-based programs including tailoring, handicrafts, computer literacy, and gardening based on each child's abilities.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Accessibility,
      title: "Assistive Support",
      description: "Providing mobility aids, adaptive tools, and assistive learning equipment for enhanced independence.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Users,
      title: "Parental Empowerment",
      description: "Workshops, counselling, peer support, and legal guidance to help families navigate their journey.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Megaphone,
      title: "Outreach & Awareness",
      description: "Campaigns, events, seminars, and rural visits to promote inclusion and reduce stigma in communities.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive support programs designed to empower children with special needs and their families
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all"
              data-testid={`card-service-${index + 1}`}
            >
              <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4`}>
                <service.icon className={`w-7 h-7 ${service.color}`} data-testid={`icon-service-${index + 1}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-service-title-${index + 1}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index + 1}`}>
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
