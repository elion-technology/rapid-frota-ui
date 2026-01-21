import { api } from "./api";

export const getCars = () => {
    return api.get("/car");
};

export const createCar = async (body) => {
    return api.post("/car/register", body)
}
  