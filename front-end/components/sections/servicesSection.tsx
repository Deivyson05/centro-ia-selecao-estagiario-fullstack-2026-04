'use client';

import { ChevronLeft, ChevronRight, HeartIcon, LayersIcon, SmileIcon, StarsIcon, WrenchIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";

export function ServicesSection() {
    const [ isMobile, setIsMobile ] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768? true : false);
            
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        console.log(window.innerWidth);
        console.log(isMobile);
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return (
        <section id="services" className=" flex flex-col items-center justify-start bg-gray-50 p-10 gap-6">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl font-extrabold">Nossos <span className="text-primary">Serviços</span></h2>
                <p className="text-xl font-semibold text-black/70 text-center">Oferecemos uma ampla gama de tratamentos odontológicos <br /> com tecnologia moderna e profissionais especializados.</p>
            </div>

            {
                isMobile != true ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        <Card className="p-10 shadow-lg border hover:border-primary hover:-translate-y-1 transition-transform">
                            <StarsIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary" />
                            <CardContent className="p-0">
                                <CardTitle className="text-xl font-semibold">Limpeza e Prevenção</CardTitle>
                                <CardDescription className="text-md font-semibold">Profilaxia profissional, aplicação de flúor e orientações para manter seu sorriso sempre saudável.</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="p-10 shadow-lg border hover:border-primary hover:-translate-y-1 transition-transform">
                            <SmileIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary" />
                            <CardContent className="p-0">
                                <CardTitle className="text-xl font-semibold">Clareamento Dental</CardTitle>
                                <CardDescription className="text-md font-semibold">Técnicas modernas e seguras para deixar seus dentes mais brancos e seu sorriso radiante.</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="p-10 shadow-lg border hover:border-primary hover:-translate-y-1 transition-transform">
                            <StarsIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary" />
                            <CardContent className="p-0">
                                <CardTitle className="text-xl font-semibold">Ortodontia</CardTitle>
                                <CardDescription className="text-md font-semibold">Aparelhos fixos e móveis para corrigir o alinhamento dos dentes e melhorar sua mordida.</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="p-10 shadow-lg border hover:border-primary hover:-translate-y-1 transition-transform">
                            <LayersIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary" />
                            <CardContent className="p-0">
                                <CardTitle className="text-xl font-semibold">Implantes Dentários</CardTitle>
                                <CardDescription className="text-md font-semibold">Reabilitação oral com implantes de alta qualidade para recuperar função e estética.</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="p-10 shadow-lg border hover:border-primary hover:-translate-y-1 transition-transform">
                            <WrenchIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary" />
                            <CardContent className="p-0">
                                <CardTitle className="text-xl font-semibold">Restauração</CardTitle>
                                <CardDescription className="text-md font-semibold">Tratamento de cáries com materiais estéticos e duradouros para preservar seus dentes.</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="p-10 shadow-lg border hover:border-primary hover:-translate-y-1 transition-transform">
                            <HeartIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary" />
                            <CardContent className="p-0">
                                <CardTitle className="text-xl font-semibold">Tratamento de Canal</CardTitle>
                                <CardDescription className="text-md font-semibold">Endodontia com tecnologia avançada para salvar dentes e eliminar dores de forma confortável.</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                ): (
                    <Carousel
                        className="w-[90%] "
                    >
                        <CarouselContent className="w-full flex gap-6">
                            <CarouselItem className="basis-1/1">
                                <Card className="p-10 shadow-lg border hover:border-primary hover:-translate-y-1 transition-transform">
                                    <StarsIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary" />
                                    <CardContent className="p-0">
                                        <CardTitle className="text-xl font-semibold">Limpeza e Prevenção</CardTitle>
                                        <CardDescription className="text-md font-semibold">Higiene bucal completa com profissionalismo e tecnologia de ponta.</CardDescription>
                                    </CardContent>
                                </Card>
                            </CarouselItem>

                            <CarouselItem className="basis-1/1">
                                <Card className="p-10 shadow-lg border hover:border-primary hover:-translate-y-1 transition-transform">
                                    <SmileIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary" />
                                    <CardContent className="p-0">
                                        <CardTitle className="text-xl font-semibold">Clareamento Dental</CardTitle>
                                        <CardDescription className="text-md font-semibold">Técnicas modernas e seguras para deixar seus dentes mais brancos e seu sorriso radiante.</CardDescription>
                                    </CardContent>
                                </Card>
                            </CarouselItem>

                            <CarouselItem className="basis-1/1 ">
                                <Card className="p-10 shadow-lg border hover:border-primary hover:-translate-y-1 transition-transform">
                                    <StarsIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary" />
                                    <CardContent className="p-0">
                                        <CardTitle className="text-xl font-semibold">Ortodontia</CardTitle>
                                        <CardDescription className="text-md font-semibold">Aparelhos fixos e móveis para corrigir o alinhamento dos dentes e melhorar sua mordida.</CardDescription>
                                    </CardContent>
                                </Card>
                            </CarouselItem>

                            <CarouselItem className="basis-1/1">
                                <Card className="p-10 shadow-lg border hover:border-primary hover:-translate-y-1 transition-transform">
                                    <WrenchIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary" />
                                    <CardContent className="p-0">
                                        <CardTitle className="text-xl font-semibold">Restauração</CardTitle>
                                        <CardDescription className="text-md font-semibold">Tratamento de cáries com materiais estéticos e duradouros para preservar seus dentes.</CardDescription>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            
                        </CarouselContent>
                        
                        <CarouselNext className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                            <ChevronRight size={24} />
                        </CarouselNext>

                        <CarouselPrevious className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                            <ChevronLeft size={24} />
                        </CarouselPrevious>
                    </Carousel>
                )
            }
        </section>
    );
}