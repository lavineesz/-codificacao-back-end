import { z } from 'zod';
export declare const colaboradorSchema: z.ZodObject<{
    nome: z.ZodString;
    email: z.ZodString;
    idade: z.ZodNumber;
    departamento: z.ZodEnum<{
        TI: "TI";
        RH: "RH";
        Vendas: "Vendas";
    }>;
}, z.core.$strip>;
export type Colaborador = z.infer<typeof colaboradorSchema>;
