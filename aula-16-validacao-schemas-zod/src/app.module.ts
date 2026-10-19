
import { Module } from '@nestjs/common';
import { ColaboradoresController } from './colaboradores.controller.js';

@Module({
  imports: [],
  controllers: [ColaboradoresController],
  providers: [],
})
export class AppModule {}
