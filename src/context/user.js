import { createContext } from "react";

export const UserContext = () => {
    const userContext = createContext({userName : "default user"});
    return userContext;
}