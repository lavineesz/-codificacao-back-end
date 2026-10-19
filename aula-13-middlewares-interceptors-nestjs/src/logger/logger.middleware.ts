import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express'; 

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const rota = req.originalUrl;  req.url;
    console.log ('[LOG] metodo : ${req.method} - rota : ${rota}');
     
    if (rota.startsWith('/admin')) {
      const role = req.headers['api-key-admin'];

      if (role !== 'administrador') {
        return res.status(403).json({
          statuscode: 403,
          message: 'Acesso negado: Privilégio de administrador necessário.',
        });
      }
    }
    next();
  }
}
