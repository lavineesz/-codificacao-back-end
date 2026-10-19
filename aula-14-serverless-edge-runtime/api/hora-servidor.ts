export const config = {
    runtime: "edge",
};

export default async function handler(req: Request) {
    const inicio = Date.now();
    const vercelId = req.headers.get("x-vercel-id") || 'N/A';
    const regiao = vercelId ? vercelId.split('::')[0] : 'edge-runtime';

    return new Response(
        JSON.stringify({
            mensagem: 'função executada com sucesso!',
            horarioServidor: new Date().toISOString(),
            regiao: regiao,
            tempoExecucao: `${Date.now() - inicio}ms`,
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}
