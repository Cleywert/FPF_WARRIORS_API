# Api para o projeto de seleção da Fundação Paulo Feitosa

## Pré-requisitos
Para rodar este projeto, certifique-se de ter instalado alguma versão do Node.js.
Para verificar se há uma versão do framework intalado, abra o terminal e comando do computado e execute o comando:
```
node -v
```
Uma linha indicando a versão instalada deve aparecer, caso contrário, instale o framework seguindo os passos disponíveis neste [link](https://nodejs.org/en/)

### Banco de dados
Para a execução do projeto, é necessário possuir um SGBD Mysql em sua máquina, caso não possua, você pode instalar o [xampp](https://www.apachefriends.org/pt_br/index.html).
Abra seu SGBD e crie uma base de dados com o nome de "fpf_warriors"; não será necessário criar as tabelas desta base!
Para configurar a conexão, acesse o arquivo _"database.js"_ na pasta _"config"_ e altere as informações que não coincidirem com seu ambiente de desenvolvimento

## Dependencias
Para instalar as dependencias deste projeto, abra o terminal do computador e navegue até a pasta do projeto clonado (mantenha essa guia do terminal aberta).
Uma vez nesta pasta, execute o comando: 
```
npm i
```
Uma pasta _node_modules_ será criada com as libs de dependencias do projeto.

## Executando o projeto
Para executar este projeto, execute, no terminal do computador, o comando: 
```
node index.js
```
As mensagens: _"rodando na porta 8001"_ e _"Conectado ao banco"_ devem aparecer.
Caso seu ambiente esteja utilizando a porta 8001, você pode alterar em qual porta o projeto irá rodar, basta abrir o arquivo index.js e, na linha 27, alterar para uma porta disponível. <br/>
Neste caso será necessário também alterar o link da API na camada de frontend, para isso, abra o arquivo _"main.js"_, na pasta _"src"_, do diretório de front e, na linha 8 substitua a porta pela mesma setada anteriormente.
