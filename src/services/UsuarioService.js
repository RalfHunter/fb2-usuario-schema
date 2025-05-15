import { CommonResponse, CustomError, HttpStatusCodes, errorHandler, messages, StatusService, asyncWrapper } from '../utils/helpers/index.js';

class UsuarioService{
    constructor(){

    }
    async listar(req){
        console.log(`Estou no listar em Usuario`);
        // TODO: const data = await this.repositoty.listar(req)
        console.log(`Estou retonando os dados em UsuarioService`)
    }
}