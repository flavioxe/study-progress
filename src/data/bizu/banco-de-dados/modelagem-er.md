# Bizzu do Tópico

O Modelo Entidade-Relacionamento (MER) é a base da modelagem conceitual. Para o cargo de Agente de Tecnologia do Banco do Brasil, você não precisa apenas decorar formas geométricas; você precisa entender como os dados do negócio (clientes, contas, transações, agências) se conectam. A CESGRANRIO, banca do seu certame, foca na capacidade de traduzir regras de negócio em diagramas consistentes.

## Contexto da prova e do cargo

Como Agente de Tecnologia, sua atuação envolve a manipulação de dados cadastrais e estatísticos. O MER é o seu "mapa" antes de qualquer implementação técnica. A CESGRANRIO costuma cobrar a interpretação de cenários reais: se um cliente pode ter várias contas e uma conta pertence a um cliente, como isso é desenhado? O foco é na abstração e na semântica dos dados, mantendo-se sempre no nível conceitual, sem se preocupar com comandos de banco de dados ou chaves estrangeiras.

## O que mais cai neste recorte

- **Identificação de Entidades**: Objetos do mundo real (ex: Cliente, Agência).
- **Classificação de Atributos**: Diferenciar atributos simples de compostos (ex: Nome vs. Endereço) e multivalorados (ex: Telefones).
- **Cardinalidades**: O coração da prova. Entender a diferença entre 1:1, 1:N e N:M.
- **Entidades Fracas**: Entidades que dependem da existência de outra (entidade forte) para serem identificadas.
- **Auto-relacionamento**: Quando uma entidade se relaciona com ela mesma (ex: um Funcionário que gerencia outro Funcionário).

## Conceitos essenciais

Para dominar o MER, memorize estes pilares:

**1. Entidade vs. Atributo**: A entidade é o "substantivo" (o objeto), enquanto o atributo é a "característica" desse objeto. Se o dado descreve a entidade, é atributo.

**2. Cardinalidade**: Define o número máximo de ocorrências de uma entidade associadas a outra. A CESGRANRIO gosta de cobrar a leitura do diagrama: "Um cliente pode ter várias contas" (1:N).

**3. Entidade Fraca**: É aquela que não possui atributos suficientes para formar uma chave primária própria. Ela é identificada através de um relacionamento com uma entidade forte.

**4. Auto-relacionamento**: Ocorre quando uma instância de uma entidade se relaciona com outra instância da mesma entidade. Exemplo clássico em bancos: "Gerente" e "Subordinado" são ambos "Funcionários".

## Armadilhas recorrentes

- **Confundir nível conceitual com físico**: No MER (conceitual), não falamos em "tabelas" ou "chaves estrangeiras". Falamos em entidades, relacionamentos e cardinalidades. Se a questão mencionar "chave estrangeira", ela já saiu do nível conceitual.
- **Atributos Multivalorados**: O candidato costuma esquecer que um atributo pode ter vários valores para uma mesma entidade (ex: vários e-mails de um cliente). Isso exige uma representação específica no DER.
- **Cardinalidade Mínima vs. Máxima**: A CESGRANRIO pode cobrar a participação (opcional ou obrigatória). Não ignore o traço simples ou duplo que indica se a participação é total ou parcial.

## Checklist final de revisão

- [ ] Consigo identificar uma entidade forte de uma fraca em um texto de cenário?
- [ ] Sei diferenciar um atributo composto de um multivalorado?
- [ ] Entendo que o auto-relacionamento é uma relação recursiva dentro da mesma entidade?
- [ ] Sei ler um diagrama e identificar se a cardinalidade é 1:1, 1:N ou N:M?
- [ ] Estou ciente de que o MER é independente de qualquer tecnologia de SGBD?

**Dica de Ouro**: Ao ler o enunciado da CESGRANRIO, sublinhe os substantivos (possíveis entidades) e os verbos de ligação (possíveis relacionamentos). Isso acelera a montagem mental do DER e evita erros de interpretação sobre a cardinalidade.
