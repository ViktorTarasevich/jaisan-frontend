import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.resolve(process.cwd(), 'src/api/.env.api')});

export const setToken = (token) => {
    process.env.FWD_TOKEN = `Bearer ${token}`;
}


export const getToken = () => {
    return process.env.FWD_TOKEN;
}

export const getUserData = () => {
    return {
        username: process.env.FWD_LOGIN,
        password: process.env.FWD_PASSWORD
    }
}