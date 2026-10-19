import {
  Controller,
  Get,
  Param,
  BadRequestException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service.js';

type Produto = {
  id: number;
  nome: string;
};

@Controller('produtos')
export class ProdutosController {
  private readonly logger = new Logger(ProdutosController.name);

  constructor(private readonly produtosService: ProdutosService) {}

  private listarProdutos(): Produto[] {
 return this.produtosService.listarProdutos();
  }

  @Get(':id')
  idProduto(@Param('id') idProd: string): Produto {
    const id = Number(idProd);

    if (!Number.isInteger(id)) {
      this.logger.warn(`tentativa de busca com id não numérico: ${idProd}`);
      throw new BadRequestException('ID inválido, deve ser um número inteiro!');
    }

    const produto = this.listarProdutos().find((produto: Produto) => produto.id === id);

    if (!produto) {
      this.logger.warn(`produto com id: ${id} não encontrado.`);
      throw new NotFoundException(`Produto com id ${id} não encontrado.`);
    }

    return produto;
  }
}