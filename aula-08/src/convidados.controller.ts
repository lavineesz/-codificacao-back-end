import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateConvidadoDto } from './dto/create-convidado.dto.js';

@Controller('convidados')
export class ConvidadosController {
  @Get()
  listarConvidados() {
    return ['Ana', 'Bruno', 'Carlos'];
  }

  @Post()
  criarConvidado(@Body() convidado: CreateConvidadoDto) {
    console.log(`Novo convidado: ${convidado.nome}`);

    return {
      mensagem: `Convidado ${convidado.nome} cadastrado com sucesso!`,
    };
  }
}