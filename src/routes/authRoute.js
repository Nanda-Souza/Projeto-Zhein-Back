import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js"
import { loginSchema, userSchema } from '../models/AutenticacaoSchema.js'
import { cadastro, login } from '../controllers/autenticacaoController.js'

const authRoute = Router()

authRoute.post("/", validateSchema(loginSchema), login)

authRoute.post("/cadastro", validateSchema(userSchema), cadastro)

export default authRoute