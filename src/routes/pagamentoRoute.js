import { Router } from "express";
import { pagamento } from "../controllers/pagamentoController.js";
import { validateSchema } from "../middlewares/validateSchema.js"
import { pagamentoSchema } from "../models/schema.js";

const pagamentoRoute = Router()

pagamentoRoute.post("/pagamento", validateSchema(pagamentoSchema), pagamento)

export default pagamentoRoute