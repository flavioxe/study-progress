# Bizzu do Tópico

Para o cargo de Agente de Tecnologia do Banco do Brasil, a banca CESGRANRIO costuma cobrar algoritmos de ordenação com foco em dois pilares: eficiência (complexidade) e comportamento (estabilidade). Não se perca em implementações complexas; foque no mecanismo lógico de cada método e como eles se comportam em vetores pequenos ou parcialmente ordenados.

## Contexto da prova e do cargo

Como Agente de TI, você lidará com manipulação de dados cadastrais e estatísticos. Entender por que um algoritmo é mais lento que outro é fundamental para a análise de desempenho de sistemas. A CESGRANRIO valoriza a capacidade de identificar o algoritmo a partir de sua descrição lógica ou de um trecho de código simples.

## O que mais cai neste recorte

- **Complexidade de tempo**: Todos os três (Bubble, Selection, Insertion) possuem complexidade de pior caso e caso médio de O(n²).
- **Estabilidade**: Saber quais algoritmos mantêm a ordem relativa de elementos iguais.
- **Identificação por descrição**: Diferenciar o "troca de adjacentes" (Bubble) do "busca pelo menor" (Selection) e do "inserção em sublista ordenada" (Insertion).

## Conceitos essenciais

### 1. Bubble Sort (Ordenação por Bolha)

Funciona comparando pares de elementos adjacentes e trocando-os se estiverem na ordem errada. O maior elemento "flutua" para o final a cada iteração. É um algoritmo estável.

### 2. Selection Sort (Ordenação por Seleção)

Divide o vetor em uma parte ordenada e outra não ordenada. A cada passo, busca o menor elemento na parte não ordenada e o troca com o primeiro elemento dessa sublista. Atenção: Geralmente é considerado instável, pois a troca pode alterar a ordem relativa de elementos iguais.

### 3. Insertion Sort (Ordenação por Inserção)

Semelhante a organizar cartas de baralho na mão. Pega um elemento e o insere na posição correta dentro da sublista já ordenada à esquerda. É muito eficiente para vetores quase ordenados e é um algoritmo estável.

| Algoritmo | Complexidade (Pior Caso) | Estável? |
|---|---|---|
| Bubble Sort | O(n²) | Sim |
| Selection Sort | O(n²) | Não |
| Insertion Sort | O(n²) | Sim |

## Armadilhas recorrentes

- **Confundir Estabilidade**: Lembre-se que o Selection Sort, ao realizar trocas de longa distância, frequentemente quebra a estabilidade.
- **Melhor Caso vs. Pior Caso**: O Insertion Sort tem complexidade O(n) no melhor caso (vetor já ordenado), o que o torna superior aos outros dois em cenários específicos.
- **Complexidade**: Não tente aplicar O(n log n) para estes algoritmos elementares. Se a questão pedir a complexidade de pior caso para qualquer um deles, a resposta será O(n²).

## Checklist final de revisão

- [ ] Consigo explicar a diferença entre trocar adjacentes (Bubble) e inserir em sublista (Insertion)?
- [ ] Sei identificar que o Selection Sort realiza apenas uma troca por passagem?
- [ ] Memorizei que todos os três possuem complexidade quadrática no pior caso?
- [ ] Sei que a estabilidade é a preservação da ordem original de elementos com chaves iguais?
