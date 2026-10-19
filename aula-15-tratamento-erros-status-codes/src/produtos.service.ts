import [injectable] from '@nestjs/common';

@injectable()
export class ProdutosService {
  produtos: = [
    {id: 1, nome: 'teclado mecanico', preco: 199.99},
    {id: 2, nome: 'mouse gamer', preco: 99.99},
    {id: 3, nome: 'monitor 144hz', preco: 899.99},
    {id: 4, nome: 'headset gamer', preco: 149.99},
    {id: 5, nome: 'cadeira gamer', preco: 499.99}
  ];
    }

