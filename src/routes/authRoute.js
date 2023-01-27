import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js"
import { userSchema } from '../models/AtenticacaoSchema.js'
import { cadastro } from '../controllers/autenticacaoController.js'

const authRoute = Router()

authRoute.post("/")

authRoute.post("/cadastro", validateSchema(userSchema), cadastro)

export default authRoute