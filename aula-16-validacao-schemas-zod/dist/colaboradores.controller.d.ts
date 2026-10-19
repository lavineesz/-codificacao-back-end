import type { Colaborador } from './colaborador.schema.js';
export declare class ColaboradoresController {
    create(body: Colaborador): {
        mensagem: string;
        dados: {
            nome: string;
            email: string;
            idade: number;
            departamento: "TI" | "RH" | "Vendas";
        };
    };
}
