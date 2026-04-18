'use client';
import useSWR from "swr";
import { getPrestadores } from "@/api";
export default function Prestadores() {
    const { data, error, isLoading } = useSWR("prestadores", getPrestadores);
    return (
        <main className="flex items-center justify-center h-screen">
            {
                isLoading ? (
                    <p>Carregando prestadores...</p>
                ): error ? (
                    <p>Erro ao carregar prestadores</p>
                ):(
                    <section className="bg-gray-200 flex flex-col w-[80%] rounded-xl overflow-hidden shadow-xl">
                        <header className="p-4 flex justify-center items-center bg-blue-500 text-white">
                            <h1 className="text-3xl font-bold">Nossos profissionais</h1>
                        </header>
                        <div className="flex p-4 bg-gray-300">
                            <strong className="flex-1 text-center">Nome</strong>
                            <strong className="flex-1 text-center">Email</strong>
                            <strong className="flex-1 text-center">Telefone</strong>
                            <strong className="flex-1 text-center">Serviço</strong>
                        </div>

                        {
                            data != undefined && data.data.map((prestador: any) => (
                                <div className="flex p-4 items-center">
                                    <strong className="flex-1 text-center">{prestador.nome}</strong>
                                    <strong className="flex-1 text-center">{prestador.email}</strong>
                                    <strong className="flex-1 text-center">{prestador.telefone}</strong>
                                    <strong className="flex-1 text-center">{prestador.servico}</strong>
                                </div>
                            ))
                        }
                    </section>
                    )
            }
        </main>
    )
}