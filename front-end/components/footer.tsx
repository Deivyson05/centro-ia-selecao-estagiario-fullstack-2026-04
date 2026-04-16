import { HeartIcon, MailIcon, MapPin, PhoneIcon } from "lucide-react";


export function Footer() {
    return (
        <footer className="flex flex-col bg-gray-900 text-white p-10 gap-8">
            <header className="flex flex-col md:flex-row gap-4">
                <section className="flex flex-col flex-1 gap-2">
                    <div>
                        <h3 className="text-2xl font-semibold">Clinica Odonto</h3>
                    </div>
                    <p className="text-lg text-white/70">Cuidando do seu sorriso com excelência, tecnologia e dedicação há mais de 15 anos.</p>
                </section>
                <section className="flex flex-col flex-1 gap-2">
                    <h3 className="text-xl font-semibold">Links Rápidos</h3>
                    <a className="text-white/70 text-lg hover:text-white/50" href="#home">Home</a>
                    <a className="text-white/70 text-lg hover:text-white/50" href="#sobre">Sobre Nós</a>
                    <a className="text-white/70 text-lg hover:text-white/50" href="#servicos">Serviços"</a>
                    <a className="text-white/70 text-lg hover:text-white/50" href="#depoimentos">Depoimentos</a>
                    <a className="text-white/70 text-lg hover:text-white/50" href="#contato">Contato</a>
                </section>
                <section className="flex flex-col flex-1 gap-2">
                    <h3 className="text-xl font-semibold">Contato</h3>
                    <div>
                        <MapPin size={25} className="inline-block mr-2 text-blue-200" />
                        <span className="text-white/70 text-lg">Rua Exemplo, 123 - Cidade, Estado</span>
                    </div>
                    <div>
                        <PhoneIcon size={25} className="inline-block mr-2 text-blue-200" />
                        <span className="text-white/70 text-lg">(11) 1234-5678</span>
                    </div>
                    <div>
                        <MailIcon size={25} className="inline-block mr-2 text-blue-200" />
                        <span className="text-white/70 text-lg">contato@clinicaodonto.com.br</span>
                    </div>
                </section>
                <section className="flex flex-col flex-1 gap-2">
                    <h3 className="text-xl font-semibold">Redes Sociais</h3>
                    <p className="text-white/70 text-lg">Siga-nos nas redes sociais e fique por dentro das novidades!</p>
                    <div className="flex gap-2">
                        <a href="instagram">
                            <div className="p-4 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </div>
                        </a>

                        <a href="facebook">
                            <div className="p-4 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </div>
                        </a>

                        <a href="linkedin">
                            <div className="p-4 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </div>
                        </a>
                    </div>
                </section>
            </header>
            <footer className="flex flex-col border-t border-white/50 items-center justify-center gap-4 h-40 pt-8">
                <strong>© 2026 Clínica Odonto. Todos os direitos reservados.</strong>
                <span>Desenvolvido com <HeartIcon size={20} className="inline-block" /> para cuidar de seu sorriso</span>
            </footer>
        </footer>
    );
}