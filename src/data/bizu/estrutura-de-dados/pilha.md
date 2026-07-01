# Bizzu do Tópico

A Pilha (Stack) é uma estrutura de dados linear que segue rigorosamente o princípio LIFO (Last In, First Out): o último elemento a entrar é o primeiro a sair. Para o cargo de Agente de Tecnologia no Banco do Brasil, a banca CESGRANRIO foca na aplicação prática desse conceito, especialmente em como manipular pilhas utilizando estruturas de listas em Python e na compreensão de como a recursividade utiliza a pilha de execução (stack frame) do sistema.

## Contexto da prova e do cargo

Como Agente de Tecnologia, você lidará com processamento de dados e automação. A CESGRANRIO não quer apenas que você saiba a teoria, mas que identifique o estado da pilha após uma sequência de operações. Em Python, a forma mais comum de implementar uma pilha é utilizando listas, onde o método `append()` atua como push (inserção no topo) e o método `pop()` atua como pop (remoção do topo).

## O que mais cai neste recorte

- **Simulação de estados**: Questões que apresentam uma sequência de operações push e pop e pedem o estado final da estrutura ou o valor removido.
- **Implementação em Python**: Uso de listas como pilhas. Lembre-se: o topo da pilha é o final da lista (índice -1).
- **Recursividade vs. Iteração**: A compreensão de que chamadas recursivas consomem memória da pilha de execução, podendo levar a um erro de Stack Overflow se a profundidade for excessiva.

## Conceitos essenciais

Para dominar o tema, memorize as operações fundamentais:

- **push**: Insere um elemento no topo da pilha.
- **pop**: Remove e retorna o elemento que está no topo.
- **peek (ou top)**: Apenas consulta o elemento do topo sem removê-lo.
- **empty/isEmpty**: Verifica se a pilha está vazia.

Diferença entre implementações:

| Tipo | Característica |
| --- | --- |
| Pilha Estática | Tamanho fixo, geralmente implementada com arrays/vetores. Risco de Stack Overflow se exceder a capacidade. |
| Pilha Dinâmica | Tamanho variável, geralmente implementada com nós encadeados. O limite é a memória disponível. |

## Armadilhas recorrentes

- **Confundir o topo**: Em listas Python, o topo é o final da lista. Se a questão disser que o topo é o índice 0, a complexidade de tempo muda de O(1) para O(n), pois todos os elementos precisariam ser deslocados. Fique atento ao enunciado!
- **Recursividade**: A banca adora perguntar por que a recursividade pode ser menos eficiente. A resposta quase sempre envolve o custo de alocação de memória na stack para cada chamada de função.
- **Underflow**: Tentar realizar um pop em uma pilha vazia gera um erro de execução (Underflow). Verifique sempre se a pilha não está vazia antes de remover.

## Checklist final de revisão

- [ ] Entendi que LIFO significa que o último a entrar é o primeiro a sair?
- [ ] Sei que em Python, `list.append()` é push e `list.pop()` é pop?
- [ ] Consigo rastrear o estado de uma pilha após 3 ou 4 operações sucessivas?
- [ ] Compreendo que a recursividade utiliza uma pilha interna do sistema para armazenar o contexto das chamadas?
- [ ] Sei identificar a diferença entre uma pilha estática (tamanho fixo) e dinâmica (tamanho variável)?

**Dica de Ouro**: Ao resolver questões da CESGRANRIO, desenhe a pilha verticalmente em seu rascunho. Coloque o topo sempre no topo do desenho. Isso evita erros bobos de inversão de ordem durante a execução do algoritmo.
