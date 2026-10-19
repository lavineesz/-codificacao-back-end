import { z } from 'zod';
export const colaboradorSchema = z.object({
    nome: z
        .string()
        .min(3, {
        message: 'O nome deve conter no mínimo 3 caracteres',
    }),
    email: z
        .string()
        .email({
        message: 'Formato de e-mail inválido',
    }),
    idade: z
        .number()
        .min(18, {
        message: 'A idade mínima é 18 anos',
    })
        .max(65, {
        message: 'A idade máxima é 65 anos',
    }),
    departamento: z
        .enum(['TI', 'RH', 'Vendas'])
        .refine((departamento) => ['TI', 'RH', 'Vendas'].includes(departamento), {
        message: 'Departamento deve ser obrigatoriamente TI, RH ou Vendas',
    }),
});
//# sourceMappingURL=colaborador.schema.js.map