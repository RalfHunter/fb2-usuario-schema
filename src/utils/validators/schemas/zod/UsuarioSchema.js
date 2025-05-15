// src/utils/validators/schemas/zod/UsuarioSchema.js

import { z } from 'zod';
import objectIdSchema from './ObjectIdSchema.js';

/** Definição da expressão regular para a senha
 * Padrão: 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial
 * Tamanho mínimo: 8 caracteres
 **/
const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


const UsuarioSchema = z.object({
  nome: z.string().min(1,  {messsage: "Campo nome é obrigatório"}),
  sobrenome:z.string().min(1, {message: "Campo sonbrenome é obrigatório"}),
  email:z.string().email({message:"Formado de email inválido"}).min(1, "Campo email é obrigatório"),
  senha: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres" }).regex(senhaRegex, {
    message: "A senha deve conter pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e no mínimo 8 caracteres."}),
  telefone: z.string().regex(/^\+55 \(\d{2}\) \d{4}-\d{4}$/),
  dataNascimento:z.date(),
  cpf:z.string(),
  notaMediaAvaliacao:z.number({message: "Não é um número"}).min(1, {message: "Avaliação não pode ser menor que 1"}).max(5, {message: "Avaliação não pode ser maior que 5"}),
  status:z.enum(["ativo", "inativo"], {message:"Status deve ser ativo ou inativo"}),
  tipoUsuario:z.enum(["admin", "usuario"], {message:"Status deve ser admin ou usuario"})


});

const UsuarioUpdateSchema = UsuarioSchema.partial();

export { UsuarioSchema, UsuarioUpdateSchema };
