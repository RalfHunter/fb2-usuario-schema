import express from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { asyncWrapper } from "../utils/helpers/index.js"

const router = express.Router()

const usuarioController = new UsuarioController()

router
    .get("/usuarios", asyncWrapper(usuarioController.listar.bind(usuarioController)))
    .get("/usuarios:id", asyncWrapper(usuarioController.listar.bind(usuarioController)))

export default router