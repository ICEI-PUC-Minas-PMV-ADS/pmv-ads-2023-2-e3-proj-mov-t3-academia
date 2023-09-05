# Plano de Testes de Software

**Os requisitos para realização dos testes de software são:**

- **Conectividade de Internet para acesso às plataformas (APISs).**

 **Os testes funcionais a serem realizados no aplicativo são descritos a seguir.:**
 <br>
 
| Caso de Teste       | CT-01 – Ficha de treino                                             |
|---------------------|-----------------------------------------------------------------------------------|
| Requisito Associado | RF-001	A aplicação deve permitir que o usuário monte sua própria ficha de treino.|
| Objetivo do Teste   | Verificar se a aplicação é capaz de criar a ficha de treino do usuário |
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "Adicionar Adicionar ficha de treino"; <br> 3) Preencher os campos obrigatórios (Exercício, Repetições e Séries); <br> 4) Clicar em "Adicionar Ficha de treino"; <br> 5) Clicar em "Confirmar".
| Critério de Êxito   | - A aplicação deve ser capaz de gerar a ficha de treino. |

<br>

|**Caso de Teste** 	| **CT-02 – Login** 	|
|:---:	|:---:	|
|Requisito Associado 	|RF-002	A aplicação deve permitir que o usuário registre-se e faça login.|
|Objetivo do Teste 	| Verificar se o usuário consegue logar na aplicação. E alterar os dados do perfil que foram salvos.|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "registre-se"; <br> 3) Preencher os campos obrigatórios (e-mail, nome, sobrenome, celular, senha, confirmação de senha);  |
|Critério de Êxito | - O perfil deve ser cadastrado com os dados salvos. <br> - Apresentar as alterações que podem ser feitas no dados gravados do perfil cadastrado. |
|  	|  	|<br>
 
|**Caso de Teste** 	| **CT-03 – Compartilhamento de ficha de treino** 	|
|:---:	|:---:	|
|Requisito Associado 	| RF-003	A aplicação deve permitir que o usuário compartilhe sua ficha de treino com outros usuários. |
|Objetivo do Teste 	| Verificar se o usuário consegue compartilhar sua ficha de treino com outros usuários.|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "Adicionar Adicionar ficha de treino"; <br> 3) Preencher os campos obrigatórios (Exercício, Repetições e Séries); <br> 4) Clicar em "Adicionar Ficha de treino"; <br> 5) Clicar em "Confirmar"; 6) Clicar no botão de compartilhar a ficha de treino.|
|Critério de Êxito | - A ficha de treino deve ser compartilhada.  |
|  	|  	|

<br>
 
|**Caso de Teste** 	| **CT-04 – Ver ficha de treino montada pelo personal trainer** 	|
|:---:	|:---:	|
|Requisito Associado 	| RF-004	A aplicação deve permitir ao usuário ver as fichas montadas pelo seu personal trainer. |
|Objetivo do Teste 	| Verificar se o usuário consegue ver a ficha de treino montada pelo seu personal trainer|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "Minha fihca de treino".|
|Critério de Êxito | - A ficha de treino deve ser vista pelo usuário.  |
|  	|  	|

<br>

|**Caso de Teste** 	| **CT-05 – Gif dos exercícios** 	|
|:---:	|:---:	|
|Requisito Associado 	|RF-005	A aplicação deve mostrar um gif de como se executa os exercícios nas fichas de treino. |
|Objetivo do Teste 	| Verificar se o usuário consegue ver os gifs que representam a execução do exercício|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "MInha ficha de treino"; <br> 3) Clicar nos exercícios.|
|Critério de Êxito | - Deve ser exibido o gif de cada exercício |
|  	|  	|

<br>

| Caso de Teste       | CT-06 – Opção de criar ficha de treino para todos alunos da academia      |
|---------------------|-----------------------------------------------------------------------------------|
| Requisito Associado | RF-006	A aplicação deve ter a opção para o personal trainer criar uma ficha de treino para todos os alunos da academia.|
| Objetivo do Teste   | Verificar se a aplicação é capaz de criar uma ficha de treino geral para todos os alunos da academia. |
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "Adicionar ficha de treino para todos alunos"; <br> 3) Preencher os campos obrigatórios (Exercício, Repetições e Séries); <br> 4) Clicar em "Adicionar Ficha de treino"; <br> 5) Clicar em "Confirmar".
| Critério de Êxito   | - A aplicação deve ser capaz de gerar a ficha de treino para todos alunos da academia. |

<br>

|**Caso de Teste** 	| **CT-07 – Ver a ficha de treino de todos alunos** 	|
|:---:	|:---:	|
|Requisito Associado 	| RF-007	A aplicação deve apresentar para o personal trainer a ficha de treino de todos seus alunos. |
|Objetivo do Teste 	| Verificar se o usuário personal trainer consegue ver a ficha de treino de seus alunos.|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "Ver ficha de treino dos alunos".  |
|Critério de Êxito | - A aplicação deve mostrar a ficha de treino de todos os alunos. |
|  	|  	|

<br>

|**Caso de Teste** 	| **CT-08 – Editar ficha de treino dos alunos** 	|
|:---:	|:---:	|
|Requisito Associado 	| RF-008	A aplicação deve apresentar para o personal trainer a opção de editar a ficha de treino de seus alunos. |
|Objetivo do Teste 	| Verificar se o usuário personal trainer consegue editar a fihca de treino de seus alunos.|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "Editar ficha de treino dos alunos"; <br> 3)Preencher os campos obrigatórios (Exercício, Repetições e Séries); <br> 4) Clicar em "Confirmar";
|Critério de Êxito | - A ficha de treino dos alunos devem ser editadas. |
|  	|  	|

