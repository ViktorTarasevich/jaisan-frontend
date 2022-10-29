import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.resolve(process.cwd(), 'src/api/.env.api')});

export const getUserData = () => {
    return {
        LOGIN: process.env.MONLIBON_LOGIN,
        PASSWORD: process.env.MONLIBON_PASSWORD,
    }
}