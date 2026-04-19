import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKENDAPI,
});

export function sendMessage(message: string, sessionId: string) {
    return api.post("/chat/", { message: message, session_id: sessionId });
}

export function getHorarios() {
    return api.get("/horarios_marcados");
}

export function getPrestadores() {
    return api.get("/prestadores");
}

export function createPrestador(data: any) {
    return api.post("/prestadores", data);
}

export function editPrestador(id: number, data: any) {
    return api.put(`/prestadores/${id}`, data);
}

export function deletePrestador(id: number) {
    return api.delete(`/prestadores/${id}`);
}

export default api;