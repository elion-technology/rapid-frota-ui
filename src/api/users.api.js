import { api } from "./api";

export const getUsers = () => {
    return api.get("/auth");
};

export const logout = () => {
    return api.get("/auth/logout")
}

export const check = () => {
    return api.get("/auth/me")
}
  