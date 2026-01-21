import { api } from "./api";

export const getTecnicos = () => {
    return api.get("/tec");
};
  
export const createTecnico = async (body) => {
    return api.post("/tec/register", body)
}