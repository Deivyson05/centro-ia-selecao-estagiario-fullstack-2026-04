import { ChatCard } from "@/components/chat";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AboutSection } from "@/components/sections/aboutSection";
import { AssessmentsSection } from "@/components/sections/assessments";
import { ContactSection } from "@/components/sections/contactSection";
import { HomeSection } from "@/components/sections/homeSection";
import { LocalizationSection } from "@/components/sections/localizationSection";
import { ServicesSection } from "@/components/sections/servicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <Header/>
      <HomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <AssessmentsSection/>
      <LocalizationSection/>
      <ContactSection/>
      <Footer/>
      <ChatCard/>
    </main>
  );
}
