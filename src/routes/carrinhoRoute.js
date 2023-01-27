import { postCarrinho, getCarrinho, deletaCarrinho } from "../controllers/carrinhoController.js";
import { Router } from "express";
import {carrinhoSchemaValidate} from "../middlewares/carrinhoSchemaValidate.js"

const router = Router();

router.post("/carrinho", carrinhoSchemaValidate ,postCarrinho);
router.get("/carrinho", getCarrinho);
router.delete("/carrinho", deletaCarrinho)