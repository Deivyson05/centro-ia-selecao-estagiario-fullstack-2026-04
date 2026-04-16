import { AwardIcon, HeartIcon, StarHalfIcon, StarsIcon } from "lucide-react";
import { Button } from "../ui/button";
import foto1 from "@/public/img/foto1.jpg";
export function HomeSection() {
    return (
        <section id="home" className="mt-16 flex flex-col md:flex-row items-center justify-center bg-gray-50 p-10 gap-6">
            <div className="w-full md:w-[40%] flex flex-col gap-8">
                <div>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-950/90">
                        Seu sorriso saudável <span className="text-primary">começa aqui</span>
                    </h2>
                    <p className="text-xl font-semibold text-black/70">Cuidados odontológicos de excelência com tecnologia moderna e atendimento humanizado. Sua saúde bucal é nossa prioridade.</p>
                </div>
                <Button className="px-10 py-8 rounded-full text-xl font-semibold hover:scale-108 cursor-pointer w-full md:w-fit">Agendar pelo Whatsapp</Button>

                <div className="flex gap-2">
                    <div className="flex flex-col flex-1">
                        <HeartIcon size={50} className="bg-primary/30 p-2 rounded-full text-primary"/>
                        <strong className="text-md font-semibold">Atendimento humanizado</strong>
                        <p className="text-black/70 text-sm">Cuidado e atenção em cada consulta</p>
                    </div>

                    <div className="flex flex-col flex-1">
                        <StarsIcon size={50} className="bg-primary/30 p-2 rounded-full text-primary"/>
                        <strong className="text-md font-semibold">Tecnologia moderna</strong>
                        <p className="text-black/70 text-sm">Equipamentos de última geração</p>
                    </div>

                    <div className="flex flex-col flex-1">
                        <AwardIcon size={50} className="bg-primary/30 p-2 rounded-full text-primary"/>
                        <strong className="text-md font-semibold">Profissionais qualificados</strong>
                        <p className="text-black/70 text-sm">Equipe especializada e experiente</p>
                    </div>
                </div>
            </div>
            <img
                className="w-full md:w-[45%] h-130 rounded-2xl object-cover"
                src={`/img/foto1.jpg`} alt="capa"
            />
        </section>
    )
}