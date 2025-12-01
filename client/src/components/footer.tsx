import { Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6" fill="currentColor" />
              <span className="font-bold text-lg">SOPAN FOUNDATION</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A Registered Charitable Trust Dedicated to Special Needs Children
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#about"); }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover-elevate inline-block"
                  data-testid="link-footer-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#services"); }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover-elevate inline-block"
                  data-testid="link-footer-services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#team"); }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover-elevate inline-block"
                  data-testid="link-footer-team"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#get-involved"); }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover-elevate inline-block"
                  data-testid="link-footer-involved"
                >
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Special Education</li>
              <li>Therapy & Rehabilitation</li>
              <li>Vocational Training</li>
              <li>Parental Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-80" />
                <span className="text-primary-foreground/80">
                  Nirshu Babu Memorial Hospital, NH-31, Begusarai, Bihar
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-80" />
                <a href="mailto:contact@sopanfoundation.org" className="text-primary-foreground/80 hover:text-primary-foreground">
                  contact@sopanfoundation.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="text-primary-foreground/80">+91-XXXXXXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80 mb-2">
            © 2025 SOPAN FOUNDATION. All rights reserved.
          </p>
          <p className="text-sm font-medium italic">
            Empower • Educate • Include
          </p>
        </div>
      </div>
    </footer>
  );
}
