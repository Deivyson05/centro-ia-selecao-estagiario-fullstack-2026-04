'use client';
import useSWR from "swr";
import { getHorarios } from "@/api";
export default function Agendamento() {
    const { data, error, isLoading } = useSWR("horarios", getHorarios);
    return (
        <main className="flex items-center justify-center h-screen">
            {
                isLoading ? (
                    <p>Carregando horários...</p>
                ): error ? (
                    <p>Erro ao carregar horários</p>
                ):(
                    <section className="bg-gray-200 flex flex-col w-[80%] rounded-xl overflow-hidden shadow-xl">
                        <header className="p-4 flex justify-center items-center bg-blue-500 text-white">
                            <h1 className="text-3xl font-bold mb-4">Agendamento de Consultas</h1>
                        </header>
                        <div className="flex p-4 bg-gray-300">
                            <strong className="flex-1 text-center">Horario</strong>
                            <strong className="flex-1 text-center">Cliente</strong>
                            <strong className="flex-1 text-center">Profissional</strong>
                            <strong className="flex-1 text-center">Email</strong>
                            <strong className="flex-1 text-center">Telefone</strong>
                            <strong className="flex-1 text-center">Serviço</strong>
                        </div>

                        {
                            data != undefined && data.data.map((horario: any) => (
                                <div className="flex p-4 items-center">
                                    <strong className="flex-1 text-center">{horario.data_hora}</strong>
                                    <strong className="flex-1 text-center">{horario.cliente_nome}</strong>
                                    <strong className="flex-1 text-center">{horario.prestador.nome}</strong>
                                    <strong className="flex-1 text-center">{horario.cliente_email}</strong>
                                    <strong className="flex-1 text-center">{horario.cliente_telefone}</strong>
                                    <strong className="flex-1 text-center">{horario.prestador.servico}</strong>
                                </div>
                            ))
                        }
                    </section>
                )
            }
        </main>
    )
}