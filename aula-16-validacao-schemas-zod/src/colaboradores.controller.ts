

import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common';

import { colaboradorSchema } from './colaborador.schema.js'
import type { Colaborador } from './colaborador.schema.js';
import { ZodValidationPipe } from './zod.validation.pipe.js';

@Controller('colaboradores')
export class ColaboradoresController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ZodValidationPipe(colaboradorSchema))
  create(@Body() body: Colaborador) {
    return {
      mensagem: 'Colaborador cadastrado com sucesso!',
      dados: body,
    };
  }
}

