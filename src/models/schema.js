import joi from "joi";


export const pagamentoSchema = joi.object({
    nome: joi.string().min(3).required(),
    cartao: joi.number().required()   
})


export const carrinhoSchema = joi.object({
    url: joi.string().min(3).required(),
    nome: joi.string().min(3).required(),
    valor: joi.string().required()
})

export const produtoSchema = joi.object({
    nome: joi.string().required(),
    imagem: joi.string().uri().required(),
    descricao: joi.string().required(),
    preco: joi.number().precision(2).required()
});

