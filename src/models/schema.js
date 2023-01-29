import joi from "joi";






export const carrinhoSchema = joi.object({
    url: joi.string().required(),
    nome: joi.string().min(3).required(),
    preco: joi.string().required()
})