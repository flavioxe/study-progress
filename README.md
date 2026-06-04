# Study Progress

Tracker de estudos estático para acompanhamento do progresso do edital de Agente de TI.

## Deploy na Vercel

Este projeto pode ser publicado na Vercel como um site estático simples.

### Como funciona hoje

- A aplicação é servida como HTML estático.
- O progresso é salvo no navegador do usuário via `localStorage`.
- Os dados permanecem no mesmo navegador e no mesmo dispositivo.
- Os dados não são sincronizados entre dispositivos.
- Se o usuário limpar os dados do navegador, o progresso será perdido.

## Estrutura

- `bb_agente_ti_tracker.html`: aplicação principal.
- `vercel.json`: configuração para servir o HTML na raiz do domínio.

## Publicação

1. Importe o repositório na Vercel.
2. Não é necessário build command.
3. O arquivo inicial será servido na rota `/`.

## Quando usar banco de dados

Você só precisa conectar a um banco se quiser:

- sincronizar progresso entre dispositivos;
- permitir login por usuário;
- manter backup remoto dos dados;
- compartilhar dados entre múltiplos usuários.

## Próximo passo sugerido

Se quiser persistência real na nuvem, a opção mais direta para este projeto é integrar com Supabase usando autenticação e uma tabela para salvar o estado do tracker.
