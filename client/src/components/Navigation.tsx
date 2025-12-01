import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#objectives", label: "Objectives" },
    { href: "#team", label: "Team" },
    { href: "#get-involved", label: "Get Involved" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <a className="flex items-center gap-2 hover-elevate rounded-lg px-3 py-2 transition-colors">
              <Heart className="w-6 h-6 text-primary" fill="currentColor" data-testid="icon-logo" />
              <span className="font-bold text-lg text-primary" data-testid="text-logo">
                SOPAN FOUNDATION
              </span>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors hover-elevate rounded-lg"
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="default"
              className="ml-2"
              onClick={() => {
                const element = document.querySelector("#get-involved");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-donate"
            >
              Donate Now
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-card-border" data-testid="container-mobile-menu">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors hover-elevate rounded-lg"
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="default"
                className="mt-2"
                onClick={() => {
                  const element = document.querySelector("#get-involved");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                data-testid="button-mobile-donate"
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
