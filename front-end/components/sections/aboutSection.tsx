import { EyeIcon, TargetIcon, UsersIcon } from "lucide-react"

export function AboutSection() {
    return (
        <section id="about" className="flex flex-col-reverse md:flex-row items-start justify-center bg-gray-50 p-10 gap-6">
            <img src="/img/foto2.jpg" alt="banner" className="md:w-[40%] md:h-150 object-cover rounded-3xl"/>
            <div className="flex flex-col md:w-[40%] gap-4">
                <h2 className="text-4xl font-extrabold">Sobre a <span className="text-primary">Clínica</span></h2>
                <p className="text-xl text-black/70">Com mais de 15 anos de experiência, nossa clínica é referência em odontologia de qualidade. Combinamos tecnologia de ponta com atendimento personalizado para oferecer os melhores resultados aos nossos pacientes.</p>
                <p className="text-xl text-black/70">Nossa equipe é formada por profissionais altamente qualificados, em constante atualização, dedicados a proporcionar um sorriso saudável e bonito para você e sua família.</p>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <TargetIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary"/>
                        <div>
                            <strong className="font-semibold text-lg ">Missão</strong>
                            <p className="font-semibold text-black/70 text-sm">Promover saúde bucal com excelência, utilizando tecnologia avançada e tratamento humanizado.</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <EyeIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary"/>
                        <div>
                            <strong className="font-semibold text-lg ">Visão</strong>
                            <p className="font-semibold text-black/70 text-sm">Promover saúde bucal com excelência, utilizando tecnologia avançada e tratamento humanizado.</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <UsersIcon className="bg-primary/20 p-2 rounded-md w-13.75 h-12.5 text-primary"/>
                        <div>
                            <strong className="font-semibold text-lg ">Valores</strong>
                            <p className="font-semibold text-black/70 text-sm">Promover saúde bucal com excelência, utilizando tecnologia avançada e tratamento humanizado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}