import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-subtitle">
            Get in touch with us to learn more about our programs or how you can help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 hover-elevate" data-testid="card-contact-address">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" data-testid="icon-contact-address" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Registered Office</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ground Floor, Nirshu Babu Memorial Hospital,<br />
                    NH-31, Durga Mandir, Kapasiya,<br />
                    Begusarai, Bihar – 851101
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="card-contact-email">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" data-testid="icon-contact-email" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                  <a href="mailto:contact@sopanfoundation.org" className="text-primary hover:underline">
                    contact@sopanfoundation.org
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="card-contact-phone">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" data-testid="icon-contact-phone" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="card-contact-hours">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" data-testid="icon-contact-hours" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday – Saturday<br />
                    10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8" data-testid="card-contact-map">
            <h3 className="text-xl font-bold text-foreground mb-4">Find Us</h3>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Map Location</p>
                <p className="text-sm">Begusarai, Bihar</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
