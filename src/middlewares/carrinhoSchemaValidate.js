import { carrinhoSchema } from "../models/schema.js";

export function carrinhoSchemaValidate(req, res, next){
    const {url, nome, preco} = req.body;
    const {error} = carrinhoSchema.validate({url, nome, preco}, {abortEarly: false});

    if(error){
        const erros = error.details.map((details) => details.message);
        res.status(400).send(erros);
    };
    next();
};