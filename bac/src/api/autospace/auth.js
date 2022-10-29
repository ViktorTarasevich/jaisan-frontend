import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.resolve(process.cwd(), 'src/api/.env.api')});

export const getUserData = () => {
    return {
        login: process.env.AUTOSPACE_LOGIN,
        password: process.env.AUTOSPACE_PASSWORD,
    }
}