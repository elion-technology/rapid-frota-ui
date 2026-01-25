import { api } from "./api";

export const createChecklist = async (body) => {
    return api.post("/check/register", body)
}

export const getChecklists = async () => {
    return api.get("/check");
}