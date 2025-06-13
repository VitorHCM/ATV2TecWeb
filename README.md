# Atividade 2 de Tecnologias Web: To Do List
Repositorio criado para a realizacao da Prática Presencial Unidades 3 e 4.

Aluno: Vitor Hugo Campos Moura - 2312130182

# Funcionalidades

O formulario permite adicionar tarefas a uma lista de tarefas a serem concluidas.
Cada tarefa adicionada é salva através da implementação da API Rest dentro do db.json.
Alem disso, cada tarefa salva pode ser concluida através de um botao "Concluir", que move a tarefa concluida para uma nova lista chamada "Tarefas Concluidas". Caso o usuario queira desfazer essa ação, basta clicar no botão "desfazer" que esta ao lado de cada tarefa concluida.
Ademais, o formulario valida o preenchimento do campo de "Nome da tarefa" para que o item nao possa ser adicionado sem o seu preenchimento devido.

# Execução do projeto:

Abra a pasta ATV2TecWeb/placeholder (por falta de tempo não pude alterar o nome da pasta root do projeto pois a esse ponto ja haviam varias dependencias deste nome dentro do codigo, fica de aprendizado!);
Abra um terminal no VsCode e digite o comando "json-server --watch db.json --port 3001";
Em seguida abra um novo terminal e digite o comando "npm run dev";
Copie o link fornecido neste ultimo passo e cole em um navegador para visualisar o projeto.
