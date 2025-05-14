import fs from "fs"
import Usuario from "../models/Usuario.js"
// import getGlobalFakeMapping from "../globalFakeMapping"
import bcrypt from "bcryptjs";
import { faker } from "@faker-js/faker";
import getGlobalFakeMapping from "./globalFakeMapping.js";



// await DbConect.conectar();



export async function gerarSenhaHash(senhaPura){
    return bcrypt.hashSync(senhaPura, 8);
}

const senhaPura = "AISDAIEF#t4";
const senhaHash = await gerarSenhaHash(senhaPura) //usar essa



async function SeedUsuario(){

    await Usuario.deleteMany();
    const usuarios = [];
    const fake = await getGlobalFakeMapping()

    for (let i = 0; i < 2; i++) {
        const nome = fake.nome();
        const sobrenome = fake.sobrenome();
        const email = fake.email();
        const telefone = fake.telefone();
        const senha = await gerarSenhaHash(fake.senha());
        const dataNascimento = fake.dataNascimento();
        const CPF = fake.cpf(); // Geração de CPF fictício
        const notaMedia = fake.notaMediaAvaliacao();
        const status = fake.status()
        const tipoUsuario = fake.tipoUsuario()

        usuarios.push({
            nome,
            sobrenome,
            email,
            telefone,
            senha: senha,
            dataNascimento,
            CPF,
            notaMedia,
            status,
            tipoUsuario
        });
    }

    // Inserir no banco
    await Usuario.collection.insertMany(usuarios);
    console.log(`${usuarios.length} usuários inseridos com sucesso!`);

    // Fechar conexão
    return await Usuario.find()

}

export default SeedUsuario


