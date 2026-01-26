import { api } from "./api";

export const getTickets = () => {
    return api.get("/tick");
};

export const createTicket = async (body) => {
    return api.post("/tick/register", body);
}