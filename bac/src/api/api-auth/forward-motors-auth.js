import axios from "axios";
import dotenv from "dotenv";
import path from "path"

dotenv.config({ path: path.resolve(process.cwd(), 'src/api/.env.api')});

export const motorsAuth = async () => {
    const {data} = await axios.post('http://openapi.forward-motors.com/api/auth/login?username=jaisan&password=9d5767005bca28b8', {
        username: process.env.FWD_LOGIN,
        password : process.env.FWD_PASSWORD
    });
    setToken(data.token);
}

export const setToken = (token) => {
    process.env.FWD_TOKEN = token;
}

export const getToken = () => {
    return process.env.FWD_TOKEN;
}