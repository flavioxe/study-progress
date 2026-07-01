# Bizzu do Tópico

Para o cargo de Agente de Tecnologia do Banco do Brasil, a banca CESGRANRIO costuma cobrar o tema de forma direta e técnica. Não se perca em implementações complexas de código; o foco deve ser na compreensão visual e lógica da estrutura de dados. O domínio dos percursos é o "pulo do gato" para garantir pontos rápidos em questões de algoritmos.

## Contexto da prova e do cargo

Como Agente de Tecnologia, você lidará com sistemas de processamento de dados e manipulação de informações estatísticas. A árvore binária é a estrutura fundamental para organizar dados hierárquicos. A CESGRANRIO valoriza a capacidade de identificar o comportamento da estrutura ao ser percorrida, simulando o que ocorreria em um sistema de busca ou ordenação simples.

## O que mais cai neste recorte

- Identificação de elementos: nó raiz (o topo), nó folha (nós sem filhos) e altura da árvore.
- Execução manual de algoritmos de travessia (percursos).
- Diferenciação entre os tipos de percurso: Pré-ordem, Em-ordem e Pós-ordem.

## Conceitos essenciais

Uma árvore binária é uma estrutura onde cada nó possui, no máximo, dois filhos (esquerda e direita).

### Algoritmos de Percurso (Travessia)

Para memorizar, foque na posição da Raiz (R) em relação aos filhos (Esquerda - E, Direita - D):

- **Pré-ordem (R-E-D)**: Visita a raiz primeiro, depois subárvore esquerda, depois direita.
- **Em-ordem (E-R-D)**: Visita a esquerda, depois a raiz, depois a direita. Dica: Em árvores de busca binária, este percurso gera os dados ordenados.
- **Pós-ordem (E-D-R)**: Visita a esquerda, depois a direita, e a raiz por último.

O nó raiz é o ponto de entrada único, enquanto os nós folha são os terminais da estrutura, essenciais para o encerramento de funções recursivas que percorrem a árvore.

## Armadilhas recorrentes

- **Confundir a ordem**: A banca adora trocar a ordem de visitação. Lembre-se: o nome do percurso indica sempre quando a raiz é processada.
- **Esquecer o nó nulo**: Em questões de percurso, se um nó não tem filho, o algoritmo simplesmente retorna. Não tente "inventar" um nó inexistente.
- **Definição de Árvore Binária**: Lembre-se que uma árvore binária pode ser vazia. Nem toda árvore precisa estar cheia ou completa para ser considerada binária.

## Checklist final de revisão

- [ ] Sei identificar visualmente um nó folha em qualquer representação gráfica?
- [ ] Consigo realizar o percurso em-ordem de uma árvore pequena apenas desenhando o caminho?
- [ ] Entendo que o percurso pré-ordem é útil para copiar uma estrutura de árvore?
- [ ] Entendo que o percurso pós-ordem é ideal para deletar uma árvore (de baixo para cima)?

**Dica de ouro**: Ao resolver questões da CESGRANRIO, desenhe a árvore no rascunho e faça o "traçado" do percurso contornando os nós. Se o traço passar pela esquerda do nó, é pré-ordem; por baixo, em-ordem; pela direita, pós-ordem.
