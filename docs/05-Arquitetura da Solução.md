# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

![image_2023-09-20_160319184](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/assets/103453380/51587954-14b4-49fe-bda0-bb21af41c63d)

## Modelo ER

![DiagramaER](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/assets/103453380/40a90e10-a640-4ba2-a375-8d32df2e15c2)

## Esquema Relacional

![image_2023-09-23_163247428](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/assets/103453380/349ee329-0b6c-45fb-8f93-0939d8c1d2d7)

## Modelo Físico

[banco.sql](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/blob/6786cb90ab70071017765120f5f2f4b51c7e8e2f/src/BD/banco.sql)

## Tecnologias Utilizadas

As tecnologias utilizadas empregadas no projeto são:

#### Linguagens de programação e tecnologias utilizadas:
> * `JavaScript:` Linguagem de programação.
> * `GitHub e Git:` Foi utilizada tanto como editor de código quanto ferramenta para a organização, serve como ambiente de armazenamento e edição do repositório do projeto.

#### Frameworks utilizados:
> * `React:` Foi escolhido por ser uma biblioteca do JavaScript.
> * `React-Native:` É uma estrutura de aplicativo móvel popular, baseada na linguagem JavaScript, que permite criar aplicativos móveis renderizados nativamente para iOS e Android.

#### Banco de dados:
> - `SQLServer:` Software escolhido para armazenar os dados.

#### Hospedagem:
> - `Localhost`

#### Design:
> - `Figma:` Software escolhido para o desenvolvimento do layout.

## Hospedagem
Até o momento será realizado a hospedagem em localhost. Em redes de computadores, Localhost se refere ao computador que está executando um programa. O computador funciona como se fosse um servidor virtual.


## Qualidade de Software
Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

|**Características**|**Subcaracterísticas**|**Justificativas**|
|-------------------|----------------------|------------------|
| Adequação Funcional | Adequação - Segurança de acesso | Todo sistema deve permitir os usuários realizarem tarefas específicas .A aplicação deve permitir que o usuário monte sua própria ficha de treino, a aplicação deve permitir que o usuário registre-se e faça login e etc. |
| Usabilidade | Inteligibilidade | A aplicação movél será intuitiva e fácil de usar independente da sua interação com tecnlogia e deverá ter desempenho rápido e responsivo, entregando uma experiência positiva aos usuários. |
| Portabilidade | Adaptável | Aplicação deverá ser compativel com diferente dispositivos movéis, reolução de tela e que haja facilidade na instalação assim conteplando o maior número de usuários. |
| Manutenabilidade | Modificabilidade - Estabilidade | A aplicação deve ser testada com frequência, verificando possiveis falhas e erros, que deverão ser corrigidos com atualizações para manter a estabilidade. |
