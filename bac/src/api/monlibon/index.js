import { monlibonClient } from "./axios-instance.js";

export const byArticul = async () => {
    const article = "102784";
    const res = await monlibonClient.post("https://www.ml-auto.by/webservice/ArticleSearch/", {ARTICLE: article}).catch(e => {
        console.log(e.status);
    });
    console.log(res.data);
}

byArticul();