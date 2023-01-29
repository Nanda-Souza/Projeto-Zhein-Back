import { addProduto,
         getProdutos } from "../controllers/produtoController.js"
import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js"
import { produtoSchema } from "../models/schema.js";
import { autenticacaoToken } from "../middlewares/autenticacaoToken.js";

const produtoRoute = Router()

produtoRoute.use(autenticacaoToken)
produtoRoute.post("/add-produto", validateSchema(produtoSchema), addProduto)
produtoRoute.get("/get-produtos", getProdutos)

export default produtoRoute