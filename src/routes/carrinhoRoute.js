import { postCarrinho, getCarrinho, deletaCarrinho } from "../controllers/carrinhoController.js";
import { Router } from "express";
import {carrinhoSchemaValidate} from "../middlewares/carrinhoSchemaValidate.js"
import { autenticacaoToken } from "../middlewares/autenticacaoToken.js"

const authRoute = Router();

authRoute.use(autenticacaoToken);
authRoute.post("/carrinho", carrinhoSchemaValidate ,postCarrinho);
authRoute.get("/carrinho", getCarrinho);
authRoute.delete("/carrinho/:id", deletaCarrinho);

export default authRoute;