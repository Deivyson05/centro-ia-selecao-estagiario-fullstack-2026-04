import { useState, useEffect } from "react";
//import { Link } from "router";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const NavLinks = () => (
    <>
      <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">Início</button>
      <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">Dra. Viviane</button>
      <button onClick={() => scrollToSection("treatments")} className="text-sm font-medium hover:text-primary transition-colors">Tratamentos</button>
      <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">Contato</button>
    </>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-border/40 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex flex-col items-start leading-none"
        >
          <span className="font-display font-bold text-xl md:text-2xl text-primary tracking-tight">
            Dra. Viviane Quintas
          </span>
          <span className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-widest uppercase">
            Odontologia Especializada
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button 
            onClick={() => scrollToSection("contact")}
            className="rounded-full px-6 font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
          >
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80">
            <Instagram className="w-5 h-5" />
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground p-1">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <NavLinks />
          <hr className="border-muted my-2" />
          <Button 
            onClick={() => scrollToSection("contact")}
            className="w-full rounded-xl bg-primary hover:bg-primary/90"
          >
            Agendar Agora
          </Button>
        </div>
      )}
    </nav>
  );
}
