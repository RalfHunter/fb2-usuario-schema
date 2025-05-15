// TODO: Importar service, importar QuerySchema, Schema, helpers/index.js
/*

*/ 
import { CommonResponse, CustomError, HttpStatusCodes, errorHandler, messages, StatusService, asyncWrapper } from '../utils/helpers/index.js';


class UsuarioController {
    // this.service = new UsuarioService()
    constructor(){
    // this.service = new UsuarioService()
    }

    async listar(req, res){
        console.log("Estou no listar Controller")
        res.status(200).json({resposta:"Tudo joia"})
    }
}

export default UsuarioController