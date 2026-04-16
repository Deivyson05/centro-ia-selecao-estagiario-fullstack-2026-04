import { ClockIcon, MailIcon, MapPinIcon, PhoneCallIcon, PhoneIcon, PinIcon } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export function LocalizationSection() {
    return (
        <section id="localization" className="flex flex-col bg-gray-50 p-10 gap-10">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl font-extrabold">Onde <span className="text-primary">estamos</span></h2>
                <p className="text-xl text-black/70 font-semibold text-center">Visite nossa clínica e conheça nossa estrutura moderna e acolhedora.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <Card className="md:w-[40%] md:h-130 flex flex-col gap-8 p-10 shadow-lg">
                    <div className="flex gap-4">
                        <MapPinIcon className="bg-primary/30 p-3 rounded-xl text-primary" size={50} />
                        <div>
                            <strong className="text-xl font-semibold">Endereço</strong>
                            <p className="text-[16px] text-black/70 font-medium">Rua das Flores, 123 - Centro <br />São Paulo, SP - CEP 01000-000</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <ClockIcon className="bg-primary/30 p-3 rounded-xl text-primary" size={50} />
                        <div>
                            <strong className="text-xl font-semibold">Horário de Atendimento</strong>
                            <p className="text-[16px] text-black/70 font-medium">Segunda a Sexta: 8h às 18h <br />Sábado: 8h às 12h</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <PhoneIcon className="bg-primary/30 p-3 rounded-xl text-primary" size={50} />
                        <div>
                            <strong className="text-xl font-semibold">Telefone</strong>
                            <p className="text-[16px] text-black/70 font-medium">(11) 98765-4321</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <MailIcon className="bg-primary/30 p-3 rounded-xl text-primary" size={50} />
                        <div>
                            <strong className="text-xl font-semibold">E-mail</strong>
                            <p className="text-[16px] text-black/70 font-medium">contato@clinicaodonto.com.br</p>
                        </div>
                    </div>

                    <Button className="px-10 py-8 rounded-2xl text-xl font-bold hover:scale-105 cursor-pointer">
                        Abrir no Google Maps
                    </Button>
                </Card>
                <iframe
                    className="md:w-[40%] h-130 rounded-2xl object-cover"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d-46.1234567890123!3d-23.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce123456789012%3A0x1234567890123456!2sCl%C3%ADnica%20Odontol%C3%B3gica%20Exemplo!5e0!3m2!1spt-BR!2sbr!4v1690000000000"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Clínica"
                ></iframe>
            </div>
        </section>
    );
}