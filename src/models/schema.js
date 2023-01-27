import joi, { object } from "joi";






export const carrinhoSchema = joi.object({
    url: joi.string().min(3).required(),
    nome: joi.string().min(3).required(),
    valor: joi.string().required()
})