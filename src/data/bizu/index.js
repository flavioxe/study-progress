import ordenacaoBubbleSelectionInsertion from "./estrutura-de-dados/ordenacao-bubble-selection-insertion.md?raw";
import buscaSequencialBinaria from "./estrutura-de-dados/busca-sequencial-binaria.md?raw";

// Maps a topic name (exact match against disciplines.js) to its bizu markdown content.
// Add new entries here as more bizu files are written; topics with no entry show a disabled icon.
export const BIZU_MAP = {
  "Estrutura de Dados: Busca sequencial e binária em arrays": buscaSequencialBinaria,
  "Estrutura de Dados: Ordenação Bubble Sort": ordenacaoBubbleSelectionInsertion,
  "Estrutura de Dados: Ordenação Selection Sort": ordenacaoBubbleSelectionInsertion,
  "Estrutura de Dados: Ordenação Insertion Sort": ordenacaoBubbleSelectionInsertion,
};

export function getBizu(topic) {
  if (!topic || typeof topic !== "object") return null;
  return BIZU_MAP[topic.name] || null;
}
