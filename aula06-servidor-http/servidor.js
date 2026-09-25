const http = require('http');

const servidor = http.createServer((req, res) => {
  // Log do método HTTP e da rota
  console.log(`[LOG] Método recebido: ${req.method} | Rota: ${req.url}`);

  // Headers básicos de segurança
  const defaultHeaders = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
  };

  // Rota /status
  if (req.url === '/status') {
    res.writeHead(200, {
      ...defaultHeaders,
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify({ servidor: 'online' }));
  } else {
    // Rota inexistente
    res.writeHead(404, {
      ...defaultHeaders,
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify({ erro: 'Página não encontrada' }));
  }
});

servidor.listen(3000, () => {
  console.log('Sentinela ativo na porta 3000!');
});