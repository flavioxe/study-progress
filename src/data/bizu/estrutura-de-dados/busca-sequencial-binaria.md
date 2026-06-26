# Bizzu do Tópico

Para o cargo de Agente de Tecnologia do Banco do Brasil, a banca CESGRANRIO valoriza a aplicação prática de algoritmos em cenários de processamento de dados. Quando falamos de busca sequencial e busca binária em arrays, o foco não é apenas a sintaxe, mas a eficiência algorítmica e as condições de contorno necessárias para cada método.

## Contexto da prova e do cargo

Como Agente de Tecnologia, você lidará com grandes volumes de dados cadastrais e estatísticos. A escolha do algoritmo de busca impacta diretamente o desempenho das aplicações bancárias. A banca costuma cobrar a distinção entre a simplicidade da busca linear e a performance da busca binária, exigindo que você identifique quando a estrutura de dados permite (ou exige) um determinado método.

## O que mais cai neste recorte

- A precondição obrigatória para a busca binária: o array deve estar obrigatoriamente ordenado.
- A comparação de complexidade de tempo: O(n) para busca sequencial versus O(log n) para busca binária.
- Cálculo de número máximo de comparações em busca binária (logaritmo na base 2).
- Identificação de cenários onde a busca sequencial é preferível (ex: dados não ordenados ou estruturas de tamanho muito pequeno).

## Conceitos essenciais

### Busca Sequencial (Linear)

Percorre cada elemento do array, um por um, até encontrar o alvo ou chegar ao fim da estrutura.

- Complexidade: O(n) no pior caso.
- Vantagem: Não exige que os dados estejam ordenados.

### Busca Binária

Divide o espaço de busca pela metade a cada iteração.

- Precondição: O array deve estar ordenado.
- Complexidade: O(log n).
- Mecânica: Compara o valor central com o alvo. Se o alvo for menor, descarta a metade superior; se maior, a inferior.

**Dica de Ouro (Cálculo de Acessos):** Para uma lista com N elementos, o número máximo de comparações na busca binária é dado por log₂(N) arredondado para cima. Exemplo: para 20 elementos, log₂(20) está entre 4 e 5, logo, o máximo de acessos será 5.

## Armadilhas recorrentes

- **A "pegadinha" da ordenação**: A banca frequentemente apresenta um cenário onde a busca binária é aplicada em um array não ordenado. Lembre-se: sem ordenação, a busca binária falha ou retorna resultados incorretos.
- **Confusão de Complexidade**: Não confunda o crescimento linear (sequencial) com o crescimento logarítmico (binário). O logarítmico é drasticamente mais eficiente para grandes bases de dados bancários.
- **Custo de Ordenação**: Às vezes, a questão pergunta se vale a pena ordenar apenas para realizar uma única busca. Se o array não estiver ordenado, o custo de ordená-lo (geralmente O(n log n)) pode ser maior do que simplesmente realizar uma busca sequencial (O(n)).

## Checklist final de revisão

- [ ] O algoritmo de busca binária exige arrays ordenados? Sim, sempre.
- [ ] A busca sequencial funciona em qualquer array? Sim, independentemente da ordem.
- [ ] Qual a complexidade da busca binária? O(log n).
- [ ] Qual a complexidade da busca sequencial? O(n).
- [ ] Em uma busca binária, se o elemento central for maior que o alvo, para qual lado a busca prossegue? Para a metade esquerda (valores menores).
