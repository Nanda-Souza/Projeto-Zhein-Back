import { Router } from "express";
import { addProduto } from "../controllers/produtoController.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { produtoSchema } from "../models/schema.js";
import { autenticacaoToken } from "../middlewares/autenticacaoToken.js";

const produtoRoute = Router()

produtoRoute.use(autenticacaoToken)
produtoRoute.post("/add-produto", validateSchema(produtoSchema), addProduto)

export default produtoRoute