Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

| <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/blob/main/docs/img/persona%201.png" width="300" height="175"/> | Arnaldo Santos, 32 anos|
| ------------------------------------------------------------------------- | ------------------------------------------------------------------|
| Ocupação:                                                       | Fisiculturista, Influencer Fitness                                                                                           |
| Aplicativos:                                                    | Instagram, Youtube, Whatsapp, Tik-tok.                                                        |
| Motivações:                                                     | Desejo de criar treinos diversos através dos meses de forma que permita superar platôs e evoluir seu corpo para competições futuras; Poder simplificar o trabalho de seu Coach e reduzir os custos de criar fichas novas.|       
| Frustrações:                                                    | Dificuldade de periodizar seus treinos sem usar papel e caneta; Problemas para calcular a quantidade de carga total de seus treinos.|
| Hobbies, História:                                              | Gosta de pesquisar sobre novas tecnologias e demandas do mercado fitness; Apaixonado pela musculação e competições de fisiculturismo.|
<div align="center"><sup>Figura 3 - Persona 1</sup></div>
<br/>

| <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/blob/main/docs/img/persona%202.png" width="270" height="175"/> | Carlos Gomes, 60 anos|
| ------------------------------------------------------------------------- | ------------------------------------------------------------------|
| Ocupação:                                                       |  Analista de sistemas                                                                                                      |
| Aplicativos:                                                    | Stack Overflow, Youtube, Whatsapp, Linked-in.                                                        |
| Motivações:                                                     | Melhorar sua autoestima e saúde através de treino de força; Poder ver e entender seu treino mesmo sendo leigo na área de esportes.|       
| Frustrações:                                                    | Não conseguir ter aderência dentro da academia por falta de estímulo ou por achar o treino tedioso; Dificuldade de entender os treinos escritos no papel.|
| Hobbies, História:                                              | Política e economia; Música; Fascinado por computadores e Internet das coisas (IOT)          |
<div align="center"><sup>Figura 4 - Persona 2</sup></div>
<br/>

| <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/blob/main/docs/img/persona%203.png" width="280" height="175"/> | Fernanda Soares, 45 anos|
| ------------------------------------------------------------------------- | ------------------------------------------------------------------|
| Ocupação:                                                       | Personal Trainer, Instrutora de musculação                                                                                           |
| Aplicativos:                                                    | Instagram, Youtube, Whatsapp, Linked-in.                                                        |
| Motivações:                                                     | Ajudar seus alunos e fazer o treino ser de fácil compreensão; Conseguir criar fichas de treino de forma eficiente, rápida e coesa.|       
| Frustrações:                                                    | Não ter tempo o bastante no seu trabalho para guiar todos os alunos que necessitam de ajuda; Dificuldade em montar um treino coeso que ajude tanto o iniciante quanto o avançado.|
| Hobbies, História:                                              | Musculação; Caminhada ao ar livre; Desenhista nas horas vagas.                   |
<div align="center"><sup>Figura 5 - Persona 3</sup></div>
<br/>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Arnaldo Santos  | Montar suas próprias fichas de treino dos dias e os métodos de cada semana.| Para dinamizar e simplificar seu processo de treinamento e preparação para competições.|
|Arnaldo Santos  | Ter um único aplicativo para montar fichas de treino elaboradas e compartilhar suas fichas com seus seguidores. | Expandir o número de alunos que podem querer tê-lo como coach e compartilhar suas fichas e métodos com interessados |
|Carlos Gomes  | Facilitar o trabalho necessário para organizar fichas | Para facilitar sua adesão nos treinos|
|Carlos Gomes  | Conseguir compreender facilmente quais exercícios deverá fazer e seus métodos de execução | Para não ter que procurar por muito tempo sempre que encontrar um exercício que não conheça e nem se lesionar nos treinos. |
|Fernanda Soares | Ver o número de sets concluídos no aplicativo. | Para não passar para os seus alunos o número de sets errado.|
|Fernanda Soares | Ter um cronômetro de tempo. | Para que possar marcar o tempo de descanso dos seus alunos entre suas séries. |



## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Em uma academia, existem funções repetidas diariamente pelos profissionais, como o cadastro de novos alunos, o controle de frequência, a criação e atualização de treinos e etc...
Geralmente essas tarefas são realizadas por meio de planilhas e de formulários de cadastro. Contudo, isso pode complicar e sobrecarregar a gestão de uma academia como um todo.

![processo análise da situação atual](img/Cadastro%20de%20Fornecedores%20Diagrama.png)

### Descrição Geral da Proposta

Neste contexto é fundamental pesquisar as principais tendências do universo fitness no mundo e implementar melhorias. 
Os processos a serem automatizados serão:
No controle de pagamentos gerando boletos e cobranças noimg/Cadastro%20de%20Fornecedores%20Diagrama.png cartão de crédito.
No controle de alunos realizando cadastros e verificando a frequência.
O aluno poderá ver as informações referentes ao plano e escolher o mais adequado e realizar a matrícula de forma on line.
Estando matriculado o aluno será encaminhado para preencher seus objetivos e solicitar um agendamento para a avaliação.
Na elaboração de treinos,o instrutor terá acesso aos dados do aluno bem como seu bio tipo e peso para montar sua ficha de treino que ficará já a 
disposição no aplicativo.
Ajudará na execução de exercícios e verificar os níveis de desempenho.
De forma simples a automação desses processos permitem que essas funções sejam executadas digitalmente com facilidade entre os profissionais e clientes. 


### Processo 1 – Matrícula

![Processo 1 - Matrícula](img/Matr%C3%ADcula.png)

### Processo 2 – Avaliação Física

![Processo 2 - Avaliação Física](img/Avaliação%20Física.png)

### Processo 3 – Treino

![Processo 3 - Treino](img/Treino.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 


| **Indicador** | **Objetivos** | **Descrição** | **Fonte dados** | **Perspectiva** |
| ---           | ---           | ---           | ---             | ---             |
| Qualidade do uso do app | Avaliar crescimento de matrículas | Percentual de novas matrículas no mês | Tabela aulas e plano de treinos | Aprendizado e Crescimento |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de alunos| Mede % de treinos realizados durante a semana | Tabela solicitações de professores| Processos internos |
| Equipamentos mais solicitados | Manter controle sobre os dados de alunos| Mede % de frequÊncias dentro do mês | Tabela de equipamentos em funcionamento| Opniõs dos Clientes sobre o app |

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve permitir que o usuário monte sua própria ficha de treino. | ALTA | 
|RF-002| A aplicação deve permitir que o usuário registre-se e faça login.   | ALTA |
|RF-003| A aplicação deve permitir que o usuário compartilhe sua ficha de treino com outros usuários.   | ALTA |
|RF-004| A aplicação deve permitir ao usuário editar sua própria ficha.   | ALTA |
|RF-005| A aplicação deve permitir ao usuário adicionar imagem ou gif em seu exercício.   | MÉDIA |
|RF-006| A aplicação deve ter a opção de um cronômetro para contar o tempo de descanso.   | ALTA |
|RF-007| A aplicação deve ter um marcador de sets dos exercícios concluídos.   | MÉDIA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação interativa deve ser publicada em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku). | MÉDIA | 
|RNF-002| A aplicação interativa deverá ser responsiva permitindo a visualização em um celular de forma adequada. |  ALTA | 
|RNF-003| A aplicação interativa será programada em Javascript.|  ALTA | 
|RNF-004| A aplicação interativa deve apresentar design moderno e fácil usabilidade. |  ALTA | 
|RNF-005| A aplicação interativa deve ser compatível com os navegadores Chrome, Opera, Edge, Mozilla Firefox, Brave e Safari. |  ALTA | 


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir:

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 15/12/2023. |
|RE-02| O aplicativo deve restringir às tecnologias básicas do Web: o Front-end e Back-end.                     |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho.                                           |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/blob/b2359643af58838980ae6af63e6d67e69e46f2ff/docs/img/Diagrama%20de%20caso%20de%20uso%20eixo%203.png" width="1000" height="710"/>
<div align="center"><sup>Figura 6 - Diagrama de casos de uso</sup></div>

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

<img src=https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/blob/main/docs/img/Captura%20de%20tela%202023-08-26%20151621.png/>


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Método Frânces](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/blob/main/docs/img/image_2023-08-26_162750934.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/blob/main/docs/img/grafico%20de%20gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/blob/main/docs/img/img-gerenciamento%20de%20equipe.png">

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/blob/main/docs/img/recursos.png">
