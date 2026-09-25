// ...existing code...
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ConvidadosService {
  private convidados = [
    {
      id: 1,
      nome: 'Lavine',
      idade: 25,
    },
    {
      id: 2,
      nome: 'Maria',
      idade: 30,
    },
    {
      id: 3,
      nome: 'João',
      idade: 28,
    },
  ];

  listar() {
    return this.convidados;
  }

  criar(nome: string, idade: number) {
    const novoConvidado = {
      id: this.convidados.length + 1,
      nome,
      idade,
    };
    this.convidados.push(novoConvidado);
    return novoConvidado;
  }
}
