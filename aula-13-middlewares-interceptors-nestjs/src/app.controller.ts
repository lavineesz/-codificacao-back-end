import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  @Get()
  getPublic() {
    return {
      message: 'Rota pública acessada com sucesso!',
      data: new Date(),
    };
  }

  @Get('admin')
  getAdmin() {
    return {
      message: 'Bem-vindo ao painel administrativo!',
      data: new Date(),
    };
  }
}