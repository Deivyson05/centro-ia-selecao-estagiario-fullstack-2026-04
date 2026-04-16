import { Navbar } from "@/components/layout/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
//import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Smile, 
  Stethoscope, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  CheckCircle2, 
  Calendar,
  Star
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-body text-foreground overflow-x-hidden">
      <Navbar />

      {/* === HERO SECTION === */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary/40 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6 md:space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-semibold border border-secondary">
                <Sparkles className="w-4 h-4" />
                <span>Excelência em Odontologia</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-foreground">
                Seu sorriso, <br />
                <span className="text-primary relative">
                  nossa prioridade.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Tratamentos odontológicos com qualidade, tecnologia e cuidado humano. Redescubra a confiança de sorrir sem medo.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="h-14 px-8 rounded-full text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all"
                >
                  Agendar consulta
                </Button>
                <Button 
                  variant="outline" 
                  className="h-14 px-8 rounded-full text-lg font-semibold border-2 border-primary/20 hover:bg-primary/5 text-primary"
                  onClick={() => window.open("https://instagram.com/dravivianequintasodonto", "_blank")}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Siga no Instagram
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-400">
                      IMG
                    </div>
                  ))}
                </div>
                <p>Junte-se a mais de <span className="font-bold text-foreground">500+ pacientes</span> satisfeitos</p>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white">
                {/* Hero dentist/patient interaction */}
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                  alt="Dentist treating patient with care"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Agendamento Fácil</p>
                    <p className="text-xs text-muted-foreground">Horários flexíveis para você</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === ABOUT SECTION === */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
               <div className="aspect-square relative rounded-full overflow-hidden border-[12px] border-white shadow-xl max-w-md mx-auto">
                 {/* Portrait of female dentist */}
                 <img 
                   src="https://pixabay.com/get/gf2600de2feefc6ecd23cef8a2c35c6971c1442ec253f8c4ef928cf69e6d36ae554244835ebf6475dd696deabaf3acdf4f7acb6e190b8355d34c18aa55f80a5de_1280.jpg" 
                   alt="Dra. Viviane Quintas"
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="absolute -bottom-6 -right-6 md:right-10 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-display font-bold text-center p-4 shadow-lg rotate-12">
                 <span className="text-sm">Cirurgiã Dentista</span>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Sobre a <span className="text-primary">Dra. Viviane Quintas</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A Dra. Viviane Quintas é cirurgiã-dentista formada pela FOP-UPE, com vasta experiência em clínica geral, endodontia e estética dental.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Seu propósito vai além do tratamento clínico: é transformar sorrisos com excelência técnica, segurança e, acima de tudo, um atendimento profundamente humanizado que acolhe as necessidades de cada paciente.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary"><CheckCircle2 className="w-5 h-5"/></div>
                  <span className="font-medium text-sm">Formada pela FOP-UPE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary"><CheckCircle2 className="w-5 h-5"/></div>
                  <span className="font-medium text-sm">Especialista em Endodontia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary"><CheckCircle2 className="w-5 h-5"/></div>
                  <span className="font-medium text-sm">Estética Dental</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary"><CheckCircle2 className="w-5 h-5"/></div>
                  <span className="font-medium text-sm">Clínica Geral</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section id="treatments" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/3 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Nossos Tratamentos</h2>
            <p className="text-muted-foreground text-lg">
              Oferecemos uma gama completa de procedimentos para cuidar da sua saúde bucal e estética do seu sorriso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Stethoscope className="w-8 h-8" />}
              title="Clínica Geral"
              description="Prevenção, diagnóstico completo e tratamentos essenciais para manter sua saúde bucal sempre em dia."
              delay={0}
            />
            <ServiceCard 
              icon={<Sparkles className="w-8 h-8" />}
              title="Clareamento Dental"
              description="Procedimentos estéticos seguros para um sorriso mais branco, brilhante e harmônico."
              delay={0.1}
            />
            <ServiceCard 
              icon={<Smile className="w-8 h-8" />}
              title="Endodontia"
              description="Tratamento de canal realizado com alta tecnologia e conforto, preservando seus dentes naturais."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* === BENEFITS SECTION === */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Por que escolher nossa clínica?</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Acreditamos que ir ao dentista deve ser uma experiência tranquila e positiva. Nossa clínica foi projetada pensando no seu bem-estar.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Atendimento humanizado e acolhedor",
                  "Tecnologia moderna para diagnósticos precisos",
                  "Profissional altamente qualificada",
                  "Ambiente confortável e relaxante",
                  "Foco em resultados estéticos e funcionais"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                 {/* Clean modern dental office interior */}
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Consultório moderno" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                   <h4 className="font-bold text-2xl mb-1">5.0</h4>
                   <div className="flex text-accent mb-2">
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                     <Star className="w-4 h-4 fill-current" />
                   </div>
                   <p className="text-sm opacity-80">Avaliação média dos nossos pacientes</p>
                </div>
              </div>
              <div className="space-y-4">
                 {/* Dental tools sterilized */}
                 <div className="bg-accent text-accent-foreground p-6 rounded-2xl h-48 flex flex-col justify-center">
                    <Sparkles className="w-10 h-10 mb-4" />
                    <h4 className="font-bold text-xl leading-tight">Tecnologia de Ponta</h4>
                 </div>
                 {/* Friendly interaction */}
                 <img 
                   src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                   alt="Atendimento humanizado" 
                   className="rounded-2xl shadow-lg w-full h-48 object-cover"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SOCIAL PROOF === */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16">O que dizem nossos pacientes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Ana Paula Silva"
              text="A Dra. Viviane é maravilhosa! Tinha muito medo de dentista, mas ela me deixou super tranquila. O resultado do meu clareamento ficou incrível."
            />
            <TestimonialCard 
              name="Ricardo Oliveira"
              text="Profissionalismo exemplar. O consultório é impecável e o atendimento é pontual. Recomendo para toda a família."
            />
            <TestimonialCard 
              name="Mariana Santos"
              text="Fiz meu tratamento de canal sem dor nenhuma. A tecnologia que ela usa faz toda a diferença. Muito obrigada pelo cuidado!"
            />
          </div>
        </div>
      </section>

      {/* === CONTACT & CTA SECTION === */}
      <section id="contact" className="py-24 bg-gradient-to-b from-secondary/30 to-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Contact Info */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Agende sua consulta</h2>
                <p className="text-muted-foreground text-lg">
                  Estamos prontos para cuidar do seu sorriso. Entre em contato pelos canais abaixo ou preencha o formulário.
                </p>
              </div>

              <div className="space-y-6">
                <ContactItem 
                  icon={<Phone className="w-6 h-6" />}
                  title="Telefone"
                  value="(81) 3221-1681"
                  sub="Segunda a Sexta, 8h às 18h"
                />
                <ContactItem 
                  icon={<MapPin className="w-6 h-6" />}
                  title="Endereço"
                  value="R. Joaquim Nabuco, 409 - Madalena"
                  sub="Recife, PE, 50720-005"
                />
                <ContactItem 
                  icon={<Instagram className="w-6 h-6" />}
                  title="Instagram"
                  value="@dravivianequintasodonto"
                  isLink
                />
              </div>

              <div className="pt-8">
                 <Button 
                   size="lg" 
                   className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white rounded-xl h-14 text-lg shadow-lg shadow-green-600/20"
                   onClick={() => window.open("https://wa.me/5581999999999", "_blank")}
                 >
                   <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                   Conversar no WhatsApp
                 </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-foreground text-background py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display font-bold">Dra. Viviane Quintas</h3>
              <p className="text-sm text-white/60 mt-2">Amo transformar sorrisos.</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">Início</a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">Sobre</a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">Tratamentos</a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">Contato</a>
            </div>

            <div className="text-sm text-white/40">
              © {new Date().getFullYear()} Dra. Viviane Quintas.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl p-8 shadow-xl shadow-black/5 border border-border hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({ name, text }: { name: string, text: string }) {
  return (
    <div className="bg-secondary/20 p-8 rounded-3xl relative">
      <div className="text-accent absolute -top-4 left-8 text-6xl font-serif leading-none">"</div>
      <p className="text-muted-foreground italic mb-6 relative z-10 pt-4">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
          {name[0]}
        </div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <div className="flex text-accent text-xs">
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, value, sub, isLink }: { icon: React.ReactNode, title: string, value: string, sub?: string, isLink?: boolean }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-primary shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-foreground">{title}</h4>
        {isLink ? (
          <a href={`https://instagram.com/${value.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-muted-foreground">{value}</p>
        )}
        {sub && <p className="text-sm text-muted-foreground/60 mt-1">{sub}</p>}
      </div>
    </div>
  );
}
