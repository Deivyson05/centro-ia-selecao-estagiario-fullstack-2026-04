import { Button } from "./ui/button";

export function Header() {
    return (
        <header className="flex justify-between bg-gray-100 p-6 items-center fixed w-full top-0 z-10 shadow-md">
            <h1 className="text-2xl font-semibold">Clínica <span className="text-primary">Odonto</span></h1>

            <nav className="hidden md:flex gap-4 font-semibold items-center text-black/70">
                <a href="#home" className="hover:text-primary">Home</a>
                <a href="#about" className="hover:text-primary">Sobre</a>
                <a href="#services" className="hover:text-primary">Serviços</a>
                <a href="#team" className="hover:text-primary">Depoimentos</a>
                <a href="#news" className="hover:text-primary">Localização</a>
                <a href="#contact" className="hover:text-primary">Contato</a>

                <Button className="px-8 py-4 rounded-2xl font-semibold hover:scale-108 cursor-pointer">Agendar</Button>
            </nav>
        </header>
    )
}