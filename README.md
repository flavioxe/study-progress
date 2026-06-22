# Study Progress

Tracker de estudos para acompanhamento do progresso no edital de Agente de TI (BB / CESGRANRIO).

Aplicação React (Vite), com sincronização opcional via Firebase Auth + Firestore.

## Stack

- React 19 + React Router (SPA)
- Vite (build e dev server)
- Firebase Authentication + Firestore (sincronização entre dispositivos)
- react-markdown + remark-gfm (renderização do guia de estudos)

## Como funciona

- O progresso é salvo localmente (`localStorage`) por padrão.
- Login opcional por email/senha sincroniza o progresso com o Firestore, por matéria — cada disciplina é carregada e salva de forma independente para manter o app leve.
- Sem login, os dados ficam só no navegador/dispositivo atual.

## Rotas

- `/` → redireciona para o tracker.
- `/bb_agente_ti_tracker.html` → tracker principal.
- `/guia.html` → guia de estudos completo.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build / Deploy

```bash
npm run build
```

Gera o site estático em `dist/`. O `vercel.json` configura o rewrite de SPA (todas as rotas servidas por `index.html`, com roteamento feito no cliente).

## Estrutura

```
src/
  components/   componentes de UI reutilizáveis
  pages/        TrackerPage e GuidePage
  hooks/        useTrackerState (estado + Firebase), useToast
  data/         disciplinas/tópicos e o markdown do guia
  firebase/     configuração do Firebase
  styles/       CSS (global, tracker, guia)
```
