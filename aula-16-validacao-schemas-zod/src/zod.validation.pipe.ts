
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

import { ZodType } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodType) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    // Valida somente o corpo da requisição
    if (metadata.type !== 'body') {
      return value;
    }

    const resultado = this.schema.safeParse(value);

    if (!resultado.success) {
      const erros = resultado.error.issues.map((issue) => ({
        campo: issue.path.join('.'),
        mensagem: issue.message,
      }));

      throw new BadRequestException({
        statusCode: 400,
        erros,
      });
    }

    // Retorna os dados validados pelo Zod
    return resultado.data;
  }
}
