import ordenacaoBubbleSelectionInsertion from "./estrutura-de-dados/ordenacao-bubble-selection-insertion.md?raw";
import buscaSequencialBinaria from "./estrutura-de-dados/busca-sequencial-binaria.md?raw";
import listaEncadeada from "./estrutura-de-dados/lista-encadeada.md?raw";
import fila from "./estrutura-de-dados/fila.md?raw";
import pilha from "./estrutura-de-dados/pilha.md?raw";
import arvoreBinaria from "./estrutura-de-dados/arvore-binaria.md?raw";
import modelagemER from "./banco-de-dados/modelagem-er.md?raw";
import modeloRelacionalNormalizacao from "./banco-de-dados/modelo-relacional-normalizacao.md?raw";

// Maps a topic name (exact match against disciplines.js) to its bizu markdown content.
// Add new entries here as more bizu files are written; topics with no entry show a disabled icon.
export const BIZU_MAP = {
  "Estrutura de Dados: Busca sequencial e binária em arrays": buscaSequencialBinaria,
  "Estrutura de Dados: Ordenação Bubble Sort": ordenacaoBubbleSelectionInsertion,
  "Estrutura de Dados: Ordenação Selection Sort": ordenacaoBubbleSelectionInsertion,
  "Estrutura de Dados: Ordenação Insertion Sort": ordenacaoBubbleSelectionInsertion,
  "Estrutura de Dados: Lista encadeada": listaEncadeada,
  "Estrutura de Dados: Fila (FIFO)": fila,
  "Estrutura de Dados: Pilha (LIFO)": pilha,
  "Estrutura de Dados: Árvore binária": arvoreBinaria,
  "Banco de Dados: Modelagem Entidade-Relacionamento (ER)": modelagemER,
  "Banco de Dados: Modelo relacional e normalização (1FN, 2FN, 3FN)": modeloRelacionalNormalizacao,
};

export function getBizu(topic) {
  if (!topic || typeof topic !== "object") return null;
  return BIZU_MAP[topic.name] || null;
}
