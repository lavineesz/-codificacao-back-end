// diagnostico.js
// Importação do módulo nativo do sistema operacional (exclusivo do ambiente Server-S
const os = require('os');
console.log('=== DIAGNÓSTICO DO SERVIDOR BACK-END ===\n');
// Leitura das propriedades do sistema
const plataforma = os.platform();
const memoriaTotalGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
const memoriaLivreGB = (os.freemem() / (1024 ** 3)).toFixed(2);
const cpus = os.cpus();
console.log(`Plataforma do SO: ${plataforma}`);
console.log(`Memória RAM Total: ${memoriaTotalGB} GB`);
console.log(`Memória RAM Livre: ${memoriaLivreGB} GB`);
console.log(`Quantidade de Cores da CPU: ${cpus.length}`);
console.log(`Modelo do Processador: ${cpus[0].model}`);
console.log('\n=======================================');