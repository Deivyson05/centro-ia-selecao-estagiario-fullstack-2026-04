import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

export function sendMessage(message: string) {
    return api.post("/chat/", { message: message });
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