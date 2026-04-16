import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "../ui/card";
import { BalloonIcon, CalendarIcon, ClockIcon, MessageCircleIcon } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="flex flex-col items-center justify-start bg-primary p-16 gap-16">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-center text-4xl font-extrabold text-white">Agende sua consulta agora</h2>
                <p className="text-xl text-white/70 text-center">Entre em contato conosco pelo WhatsApp e garanta seu horário. <br/>Responderemos rapidamente para cuidar do seu sorriso!</p>
            </div>

            <Card className="flex flex-col items-center w-fit bg-gray-50 p-4 md:p-16 shadow-lg">
                <div className="w-full flex flex-col md:flex-row justify-between gap-16" >
                    <div className="flex flex-col items-center gap-3 h-fit">
                        <CalendarIcon className="bg-primary/30 p-3 rounded-full text-primary" size={60}/>
                        <strong className="text-xl font-semibold text-center">Agendamento Rápido</strong>
                        <p className="text-lg text-black/70 text-center">Resposta em minutos</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 h-fit">
                        <ClockIcon className="bg-primary/30 p-3 rounded-full text-primary" size={60}/>
                        <strong className="text-xl font-semibold text-center">Horários Flexíveis</strong>
                        <p className="text-lg text-black/70 text-center">Escolha o melhor para você</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 h-fit">
                        <MessageCircleIcon className="bg-primary/30 p-3 rounded-full text-primary" size={60}/>
                        <strong className="text-xl font-semibold text-center">Atendimento Direto</strong>
                        <p className="text-lg text-black/70 text-center">Tire suas dúvidas</p>
                    </div>
                </div>
                <Button className="mt-10 px-10 py-8 rounded-xl text-xl font-semibold hover:scale-108 cursor-pointer w-full bg-[#25D366]">
                    <MessageCircleIcon size={42} className="mr-2 scale-150" />
                    Agendar pelo Whatsapp
                </Button>
                <span className="text-md text-black/60">Você será redirecionado para o WhatsApp</span>
            </Card>

        </section>
    );
}