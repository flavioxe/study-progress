# Bizzu do Tópico

O Modelo Relacional é o alicerce de qualquer sistema de gestão de dados no Banco do Brasil. Para a banca CESGRANRIO, o foco não é apenas a teoria acadêmica, mas a aplicação prática: como os dados são estruturados em tabelas para garantir a consistência das transações bancárias e a integridade das informações cadastrais.

## Contexto da prova e do cargo

Como Agente de Tecnologia, você lidará com sistemas que exigem alta disponibilidade e precisão. A banca CESGRANRIO costuma cobrar o mapeamento entre o mundo real (entidades) e a estrutura física (tabelas). Você deve dominar como transformar relacionamentos em chaves, garantindo que nenhum dado fique "órfão" no sistema.

## O que mais cai neste recorte

- A distinção clara entre tupla (linha/registro) e atributo (coluna/campo).
- A obrigatoriedade e unicidade da chave primária.
- O papel da chave estrangeira na manutenção da integridade referencial.
- A definição de domínio como o conjunto de valores válidos para um atributo.

## Conceitos essenciais

Para não errar questões de prova, memorize estes pilares:

| Conceito | Definição para Prova |
| --- | --- |
| Tupla | Representa uma linha da tabela; é uma ocorrência única de uma entidade. |
| Atributo | Representa uma coluna; define uma propriedade ou característica da entidade. |
| Domínio | O conjunto de valores permitidos para um atributo (ex: o domínio de "Data de Nascimento" deve ser uma data válida). |
| Chave Primária (PK) | Identificador único de cada tupla. Não pode ser nula e deve ser única. |
| Chave Estrangeira (FK) | Campo que aponta para a PK de outra tabela, estabelecendo o relacionamento. |
| Integridade Referencial | Regra que garante que uma FK só pode conter valores que existam na tabela de origem (ou ser nula, se permitido). |

## Armadilhas recorrentes

- **Confusão entre PK e FK**: A FK pode conter valores duplicados (vários clientes podem ter o mesmo "código_cidade"), enquanto a PK nunca pode.
- **Integridade Referencial**: A banca adora perguntar o que acontece se você tentar deletar um registro que possui uma FK vinculada em outra tabela. A regra é: o SGBD impede a exclusão para manter a integridade (a menos que haja uma regra de cascateamento definida).
- **Nulos em PK**: Nunca, em hipótese alguma, uma chave primária pode ser nula. Se a questão sugerir isso, está errada.

## Checklist final de revisão

- [ ] Você sabe diferenciar um esquema (estrutura) de uma instância (dados atuais)?
- [ ] Entende que a integridade referencial é o que mantém o banco de dados "conectado" e consistente?
- [ ] Consegue identificar que a chave estrangeira é o mecanismo que implementa relacionamentos 1:N no modelo relacional?
- [ ] Lembre-se: no modelo relacional, a ordem das tuplas e dos atributos não importa para a lógica do modelo.
