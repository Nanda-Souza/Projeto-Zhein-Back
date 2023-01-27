import { carrinhoSchema } from "../models/schema";

export function carrinhoSchemaValidate(req, res, next){
    const {url, nome, valor} = req.body;
    const {error} = carrinhoSchema.validate({url, nome, valor}, {abortEarly: false});

    if(error){
        const erros = error.details.map((details) => details.message);
        res.status(400).send(erros);
    };
    next();
};