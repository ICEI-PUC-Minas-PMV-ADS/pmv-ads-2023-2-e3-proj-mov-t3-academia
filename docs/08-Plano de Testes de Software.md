# Plano de Testes de Software

**Os requisitos para realização dos testes de software são:**

- **Conectividade de Internet para acesso às plataformas (APISs).**

 **Os testes funcionais a serem realizados no aplicativo são descritos a seguir.:**
 <br>
 
| **Caso de Teste**       | **CT-01 – Ficha de treino**                                             |
|---------------------|-----------------------------------------------------------------------------------|
| Requisito Associado | RF-001	A aplicação deve permitir que o usuário monte sua própria ficha de treino.|
| Objetivo do Teste   | Verificar se a aplicação é capaz de criar a ficha de treino do usuário |
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "CRIAR NOVO EXERCÍCIO"; <br> 3) Preencher os campos obrigatórios (Nome do exercício, Repetições e Séries); <br> 4) Clicar em "SALVAR".
| Critério de Êxito   | - A aplicação deve ser capaz de gerar a ficha de treino. |
<br>


| **Caso de Teste** | **CT-01.1 - Falha na Geração da Ficha** |
|:---:	|:---:	|
| Caso de Teste | CT-01 – Ficha de treino |
| Cenário de Erro | Após preencher os campos obrigatórios e clicar em "CRIAR NOVO EXERCÍCIO", a aplicação não gera a ficha de treino. |
| Critério de Falha | A aplicação não cumpre o critério de êxito que exige a geração da ficha de treino. |
<br>


|**Caso de Teste** 	| **CT-02 – Login** 	|
|:---:	|:---:	|
|Requisito Associado 	|RF-002	A aplicação deve permitir que o usuário registre-se e faça login.|
|Objetivo do Teste 	| Verificar se o usuário consegue logar na aplicação. E alterar os dados do perfil que foram salvos.|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "registre-se"; <br> 3) Preencher os campos obrigatórios (e-mail, nome, sobrenome, celular, senha, confirmação de senha);  |
|Critério de Êxito | - O perfil deve ser cadastrado com os dados salvos. <br> - Apresentar as alterações que podem ser feitas no dados gravados do perfil cadastrado. |
<br>


|**Caso de Teste** | **CT 02.1 - Falha no Cadastro de Perfil**|
|:---:	|:---:	|
|Caso de Teste | CT-02 – Login|
|Cenário de Erro | Após preencher os campos obrigatórios e clicar em "Registrar", a aplicação não cadastra o perfil do usuário com os dados salvos.|
|Critério de Falha | A aplicação não cumpre o critério de êxito que exige o cadastro bem-sucedido do perfil do usuário.|
<br>


|**Caso de Teste** | **CT-02.2 - Falha na Apresentação de Opções de Edição de Perfil**|
|:---:	|:---:	|
|Caso de Teste | CT-02 – Login|
|Cenário de Erro | Após o registro, a aplicação não apresenta as opções para alterar os dados do perfil.|
|Critério de Falha | A aplicação não cumpre o critério de êxito que exige a apresentação das opções de edição de dados do perfil cadastrado.|
<br>

 
|**Caso de Teste** 	| **CT-03 – Compartilhamento de ficha de treino** 	|
|:---:	|:---:	|
|Requisito Associado 	| RF-003	A aplicação deve permitir que o usuário compartilhe sua ficha de treino com outros usuários. |
|Objetivo do Teste 	| Verificar se o usuário consegue compartilhar sua ficha de treino com outros usuários.|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "Adicionar Adicionar ficha de treino"; <br> 3) Preencher os campos obrigatórios (Exercício, Repetições e Séries); <br> 4) Clicar em "Compartilhar Ficha de treino"; <br> 5) Escolher a ficha para ser imprimida; 6) Clicar no botão de compartilhar a ficha de treino.|
|Critério de Êxito | - A ficha de treino deve ser compartilhada.  |
<br>


|**Caso de Teste**| **CT-03.1 - Falha no Compartilhamento**|
|:---:	|:---:	|
|Caso de Teste | CT-03 – Compartilhamento de ficha de treino|
|Cenário de Erro | Após seguir todos os passos, ao clicar no botão de compartilhar a ficha de treino, a ficha não é compartilhada com outros usuários.|
|Critério de Falha | A aplicação não cumpre o critério de êxito que exige o compartilhamento bem-sucedido da ficha de treino.|
 <br>


|**Caso de Teste** 	| **CT-05 – Gif dos exercícios** 	|
|:---:	|:---:	|
|Requisito Associado 	|RF-005	A aplicação deve mostrar um gif de como se executa os exercícios nas fichas de treino. |
|Objetivo do Teste 	| Verificar se o usuário consegue ver os gifs que representam a execução do exercício|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "MInha ficha de treino"; <br> 3) Escolher o gif em sua galeria.|
|Critério de Êxito | - Deve ser exibido o gif de cada exercício |
<br>


|**Caso de Teste** | **CT-05.1 - Falha na Exibição de Gifs**|
|:---:	|:---:	|
|Caso de Teste | CT-05 – Gif dos exercícios|
|Cenário de Erro | Ao acessar a aplicação, os gifs de execução dos exercícios não são exibidos quando o usuário clica nos exercícios da ficha de treino.|
|Critério de Falha | A aplicação não cumpre o critério de êxito que exige a exibição dos gifs de execução dos exercícios.|
<br>


|**Caso de Teste** 	| **CT-07 – Ver a ficha de treino de todos alunos** 	|
|:---:	|:---:	|
|Requisito Associado 	| RF-007	A aplicação deve apresentar para o personal trainer a ficha de treino de todos seus alunos. |
|Objetivo do Teste 	| Verificar se o usuário personal trainer consegue ver a ficha de treino de seus alunos.|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "Ver ficha de treino dos alunos".  |
|Critério de Êxito | - A aplicação deve mostrar a ficha de treino de todos os alunos. |
<br>


|**Caso de Teste 07.1** | **CT-07.1 - Falha na Visualização**|
|:---:	|:---:	|
|Caso de Teste | CT-07 – Ver a ficha de treino de todos alunos|
|Cenário de Erro | Ao acessar a aplicação e clicar em "Ver ficha de treino dos alunos", a aplicação não mostra a ficha de treino de nenhum aluno.|
|Critério de Falha | A aplicação não cumpre o critério de êxito que exige a visualização da ficha de treino de todos os alunos.|
<br>


|**Caso de Teste** 	| **CT-08 – Editar ficha de treino dos alunos** 	|
|:---:	|:---:	|
|Requisito Associado 	| RF-008	A aplicação deve apresentar para o personal trainer a opção de editar a ficha de treino de seus alunos. |
|Objetivo do Teste 	| Verificar se o usuário personal trainer consegue editar a fihca de treino de seus alunos.|
|Passos 	| 1) Acessar a aplicação; <br> 2) Visualizar a página e clicar em "Editar ficha de treino dos alunos"; <br> 3)Preencher os campos obrigatórios (Exercício, Repetições e Séries); <br> 4) Clicar em "Confirmar";
|Critério de Êxito | - A ficha de treino dos alunos devem ser editadas. |
<br>


|**Caso de Teste 08.1** | **CT-08.1 -Falha na Edição**|
|:---:	|:---:	|
|Caso de Teste | CT-08 – Editar ficha de treino dos alunos|
|Cenário de Erro | Após preencher os campos obrigatórios de edição e clicar em "Confirmar", a ficha de treino dos alunos não é editada.|
|Critério de Falha | A aplicação não cumpre o critério de êxito que exige a edição bem-sucedida da ficha de treino dos alunos.|

