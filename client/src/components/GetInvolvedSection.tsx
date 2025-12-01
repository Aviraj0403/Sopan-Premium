import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Gift, HandHeart, Handshake, Megaphone } from "lucide-react";

export default function GetInvolvedSection() {
  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Support therapy and schooling programs",
      action: "Donate Now",
    },
    {
      icon: DollarSign,
      title: "Sponsor a Child",
      description: "Make a direct impact on a child's life",
      action: "Sponsor",
    },
    {
      icon: Gift,
      title: "Provide Equipment",
      description: "Donate aids and assistive devices",
      action: "Contribute",
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Share your time and expertise",
      action: "Join Us",
    },
    {
      icon: Handshake,
      title: "CSR Partnership",
      description: "Partner with us through corporate social responsibility",
      action: "Partner",
    },
    {
      icon: Megaphone,
      title: "Spread Awareness",
      description: "Help us reach more families in need",
      action: "Share",
    },
  ];

  return (
    <section id="get-involved" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-involved-title">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-involved-subtitle">
            Together, we can build a more inclusive tomorrow. Here's how you can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ways.map((way, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-involved-${index + 1}`}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <way.icon className="w-7 h-7 text-primary" data-testid={`icon-involved-${index + 1}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`text-involved-title-${index + 1}`}>
                {way.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-involved-description-${index + 1}`}>
                {way.description}
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => console.log(`${way.action} clicked`)}
                data-testid={`button-involved-${index + 1}`}
              >
                {way.action}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20" data-testid="card-involved-cta">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Every Contribution Makes a Difference
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Your support helps us provide quality education, therapy, and care to children who need it most. Join us in creating a world where every child can thrive.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => console.log("Main donate clicked")}
              data-testid="button-involved-main-donate"
            >
              <Heart className="w-5 h-5 mr-2" />
              Make a Donation Today
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
