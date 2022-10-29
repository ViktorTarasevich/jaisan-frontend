import { motorsAuth } from "./api-auth/forward-motors-auth.js";
import { monlibonAuth } from "./api-auth/monlibon-auth.js";
import { byArticul } from "./api-request/forward-motors-request.js";

export const forwardMotors = async() => {
    motorsAuth();
    const item = await byArticul();
}

// forwardMotors();

export const Monlibon = async() => {
    const data = await monlibonAuth();
    console.log(data);
}

Monlibon();