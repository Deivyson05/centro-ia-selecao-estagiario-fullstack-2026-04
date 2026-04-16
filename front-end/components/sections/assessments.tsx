'use client';
import { StarIcon } from "@phosphor-icons/react";
import { Card, CardContent } from "../ui/card";
import { ChevronLeft, ChevronRight, QuoteIcon } from "lucide-react";
import { AssessmentsCard } from "../assessmentCard";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function AssessmentsSection() {
    const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768 ? true : false);

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
        <section id="assessments" className="flex flex-col items-center justify-start bg-gray-50 p-10 gap-6">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl font-extrabold">O que nossos <span className="text-primary">pacientes dizem</span></h2>
                <p className="text-xl text-black/70 font-semibold text-center">A satisfação dos nossos pacientes é nossa maior conquista.<br /> Veja alguns depoimentos.</p>
            </div>

            {
                isMobile != true ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        <AssessmentsCard
                            user="Maria Silva"
                            text="Excelente atendimento! A equipe é super atenciosa e o ambiente é muito acolhedor. Meu tratamento de canal foi tranquilo e sem dor. Recomendo!"
                            img="M"
                        />

                        <AssessmentsCard
                            user="João Santos"
                            text="Fiz meu clareamento dental aqui e o resultado superou minhas expectativas. Profissionais muito qualificados e equipamentos modernos. Nota 10!"
                            img="J"
                        />

                        <AssessmentsCard
                            user="Ana Costa"
                            text="Sempre tive medo de dentista, mas aqui me senti muito à vontade. O Dr. e sua equipe são incríveis, muito cuidadosos e pacientes. Virei fã!"
                            img="A"
                        />

                        <AssessmentsCard
                            user="Pedro Oliveira"
                            text="Clínica muito organizada e limpa. Fizeram minha restauração com perfeição. O atendimento desde a recepção até o consultório é impecável."
                            img="P"
                        />

                        <AssessmentsCard
                            user="Carla Mendes"
                            text="Minha família toda se trata aqui. Confio totalmente no trabalho dos profissionais. Preço justo e qualidade excepcional!"
                            img="C"
                        />

                        <AssessmentsCard
                            user="Lucas Pereira"
                            text="Coloquei aparelho ortodôntico e estou muito satisfeito com o acompanhamento. Explicam tudo detalhadamente e são super pontuais nos horários."
                            img="L"
                        />
                    </div>
                ) : (
                    <Carousel className="w-[90%] ">
                        <CarouselContent className="w-full flex gap-6">
                            <CarouselItem className="basis-1/1">
                                <AssessmentsCard
                                    user="Maria Silva"
                                    text="Excelente atendimento! A equipe é super atenciosa e o ambiente é muito acolhedor. Meu tratamento de canal foi tranquilo e sem dor. Recomendo!"
                                    img="M"
                                />
                            </CarouselItem>
                            <CarouselItem className="basis-1/1">
                                <AssessmentsCard
                                    user="João Santos"
                                    text="Fiz meu clareamento dental aqui e o resultado superou minhas expectativas. Profissionais muito qualificados e equipamentos modernos. Nota 10!"
                                    img="J"
                                />
                            </CarouselItem>

                            <CarouselItem className="basis-1/1">
                                <AssessmentsCard
                                    user="Ana Costa"
                                    text="Sempre tive medo de dentista, mas aqui me senti muito à vontade. O Dr. e sua equipe são incríveis, muito cuidadosos e pacientes. Virei fã!"
                                    img="A"
                                />
                            </CarouselItem>

                            <CarouselItem className="basis-1/1">
                                <AssessmentsCard
                                    user="Pedro Oliveira"
                                    text="Clínica muito organizada e limpa. Fizeram minha restauração com perfeição. O atendimento desde a recepção até o consultório é impecável."
                                    img="P"
                                />
                            </CarouselItem>

                            <CarouselItem className="basis-1/1">
                                <AssessmentsCard
                                    user="Carla Mendes"
                                    text="Minha família toda se trata aqui. Confio totalmente no trabalho dos profissionais. Preço justo e qualidade excepcional!"
                                    img="C"
                                />
                            </CarouselItem>

                            <CarouselItem className="basis-1/1">
                                <AssessmentsCard
                                    user="Lucas Pereira"
                                    text="Coloquei aparelho ortodôntico e estou muito satisfeito com o acompanhamento. Explicam tudo detalhadamente e são super pontuais nos horários."
                                    img="L"
                                />
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
    )
}