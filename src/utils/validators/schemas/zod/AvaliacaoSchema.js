import { z } from 'zod';

const Avaliacao = z.object({
    nota: z.number({message: "O campo número é obrigatório"}).min(1, {message: "A nota minima permitida é 1"}).max(5, {message: "A nota máxima permitida é 5"}),
    
})