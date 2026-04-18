'use client';
import { sendMessage } from "@/api";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { getLS, setLS } from "@/lib/utils";

import { PaperPlaneIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import useSWR from "swr";


export function ChatCard() {
    const dateTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const [message, setMessage] = useState("");
    const [conversaGlobal, setConversaGlobal] = useState(getLS('conversa') || []);
  

    const handleSendMessage = async () => {
        try {
            conversaGlobal.push({ dono: "user", message: message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
            setLS('conversa', conversaGlobal);
            setMessage("");
            let sessionId = getLS('sessionId');
            if (!sessionId) {
                sessionId = Math.random().toString(36).substring(2);
                setLS('sessionId', sessionId);
            }
            const response = await sendMessage(message, sessionId);
            console.log(response.data);
            if (response.status === 200) {
                const newMessage = { dono: "assistant", message: response.data.message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
                setConversaGlobal((prevConversa: any[]) => [...prevConversa, newMessage]);
                setMessage("");
                setLS('conversa', conversaGlobal);
            }
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
        }
    }
    return (
        <Dialog>
            <DialogTrigger className="fixed bottom-4 right-4 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer">
                Assistente Virtual
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Assistente</DialogTitle>
                    <DialogDescription>
                        Tirar dúvidas ou agendar consultas
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-2 overflow-y-auto max-h-96 mb-4">
                    {
                        conversaGlobal.map((item: any, index: number) => (
                            <div key={index} className={`flex flex-col ${item.dono === "user" ? "items-end" : "items-start"} space-x-4`}>
                                <span className={item.dono === "user" ? "text-end" : ""}>{item.time}</span>
                                <div className={`${item.dono === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"} rounded-lg p-3 max-w-xs`}>
                                    {item.message}
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="flex items-center justify-between rounded-xl overflow-hidden border border-gray-300">
                    <input type="text" placeholder="Mensagem..." className="flex-1 p-2" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" className="bg-primary p-2 text-white cursor-pointer" onClick={handleSendMessage}>
                        <PaperPlaneIcon size={24} />
                    </button>
                </div>
            </DialogContent>

        </Dialog>
    );
}