# Nossas Lojas Clientes

Programa que guarda informações de lojas físicas de um e-commerce. Guarda informações como id das lojas, nome, endereço, telefone/celular, CNPJ, horário de trabalho, cidade onde se localiza e estado. 


# Ferramentas Utilizadas

 Foi usado o Node.js como principal compilador, e as principais biblotecas utilizadas foram express, body-parse, consign, nodemon, express-validator..., que podem ser baixadas atrasvés do comando ```npm install``` no terminal da pasta. 
 Desenvolvido no windows 7, mas quando executado apartir do docker é executado em linux. E como banco de dados foi usado o MySQL para armazenamento dos dados.
 
 
 # Como baixar e executar
 Primeiramente você deve ter o node.js e o banco de dados MYSQL.
 Após clonar o [repositório](https://github.com/paulodaluz/Micro-Servicos-para-Clientes.git), você deve abrir a pasta no terminal e executar o comando "npm install" para instalar todos os pacotes(bibliotecas) usadas  na produção da aplicação.
 
 
 ## Como Utilizar
 
  Para testar, fazer consultas você deverá utilizar o app ```Postman```.
 Antes de fazer os testes a seguir você deverá executar o seguinte processo:

 - Entrar na pasta do projeto no terminal;
 - Botar para rodar a aplicação com o comando ```npm start```.
 - É recomendado tambem estár com o MySQL aberto para poder ver as alterações no banco de dados.
 
 
 ### Cria Cliente
  
 Para criar um novo cliente e cadastra-lo, você deverá selecionar o método ```POST``` no ```Postman``` e deverá:
 
 - Inserir a URL: http://localhost:3000/criaCliente;
 - Na aba Headers você deverá usar ```Content-Type```;
 - Na aba ```Body``` deverá selecionar o modo ```raw``` e selecionar o ```JSON(application/json)```;
 - E no campo abaixo você irá inserir os dados do cliente, passando-os como no exemplo:
 ```
{
    "nome": "Cliente A",
    "cpf": "000.000.000-00",
    "rg": "000000000",
    "genero": "M",
    "celular": "54999125367",
    "endereco": "Centro, Rua Moron 2800",
    "localDeTrabalho": "Renner",
    "lojaId": "1"
}
 ```
 Em loja ID deverá passar o ID de uma loja cadastrada no banco de dados. 
 Após isso, você irá notar que foi acrescentado em seu banco de dados, na tabela as informações e irá retornar que a tabela foi criada em seu console!
 
 
 ### Edita Cliente
 
 Para editar um cliente, você deverá selecionar o método ```PUT``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/editaCliente/{id} passando o ```ID``` do cliente que deseja editar no lugar de ```{id}```;
 - Na aba Headers você deverá usar ```Content-Type```;
 - Na aba ```Body``` deverá selecionar o modo ```raw``` e selecionar o ```JSON(application/json)```;
 - E no campo abaixo você irá inserir os NOVOS dados da loja, passando-os como no exemplo:
  ```
{
    "nome": "Cliente A",
    "cpf": "111.111.111-11",
    "rg": "111111111",
    "genero": "F",
    "celular": "54999125362",
    "endereco": "Centro, Rua Moron 2850",
    "localDeTrabalho": "Renner",
    "lojaId": "1"
}
 ```
 
 Assim que você atualizar seu banco de dados, ira ver que sua tabela foi atualizada com sucesso!

 ### Deleta Cliente
 Para deletar um cliente, você irá selecionar o método ```DELETE``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/deletaCliente/{id} passando o ```ID``` do cliente que deseja deletar no lugar de ```{id}```;
 - Na aba Headers você deverá usar ```Content-Type```.
 
 Após a atualização da tabela no banco de dados você irá notar que foi deletado o cliente com o ```ID``` correspondente ao que foi passado.
 
 
 ### Busca por ID do Cliente
 Para buscar um cliente pelo ```ID```, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/buscaPorIdC/{id} passando o ```ID``` do cliente que deseja buscar no lugar de ```{id}```;
 - Na aba Headers você deverá usar ```Content-Type```.
 
 E você irá perceber que retornou no Body as informações da loja cujo o ```ID``` correspondente ao que foi passado.
 
 
 ### Busca por Nomes dos Clientes
 Para buscar uma loja pelo ```nome```, você deverá selecionar o método ```POST``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/buscaPorNome.
 - Na aba Headers você deverá usar ```Content-Type```;
 - Na aba ```Body``` deverá selecionar o modo ```raw``` e selecionar o ```JSON(application/json)```;
 - E no campo abaixo você irá inserir os nomes dos clientes desejados, passando-os como no exemplo:
 
  ``` 
  {
"nome" : [
"Paulo", "Luan", "Lucas", "Cliente A", "Cliente B"
]
}
  ```
 
 E você irá perceber que retornou no Body as informações da loja cujo o(s) ```Nome(s)``` correspondente ao que foi passado.
 
 
 ### Busca por CPF do Cliente
 Para buscar uma loja pelo ```CPF```, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/buscaPorCPF/{cpf} passando o ```CPF``` do cliente que deseja buscar no lugar de ```{cpf}```;
 - Na aba Headers você deverá usar ```Content-Type```;
  
E você irá perceber que retornou no Body as informações do cliente cujo o ```CPF``` correspondente ao que foi passado.
  
  
 ### Busca por CPF do Cliente
 Para buscar uma loja pelo ```CPF```, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/buscaPorCPF/{cpf} passando o ```CPF``` do cliente que deseja buscar no lugar de ```{cpf}```;
 - Na aba Headers você deverá usar ```Content-Type```;
  
E você irá perceber que retornou no Body as informações do cliente cujo o ```CPF``` correspondente ao que foi passado.
  
  
 ### Listar Todas as Lojas:
 Para listar todas as lojas, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
  - Inserir a URL: http://localhost:3000/listaLojas .
   
E você irá perceber que retornou no Body todas as lojas cadastradas no banco de dados.
   
   
  Caso queira ver minha ```Collection``` no ```Postman``` é só clicar [aqui](https://www.getpostman.com/collections/23eb7722c81005614987).
  
  ###Complemento
  - Clicando [aqui](https://cloud.docker.com/u/paulera25/repository/docker/paulera25/ecommerce), você poderá ver a imagem do NodeJs no DockerHub sendo executada no servidor.
  - Caso queria ver a documentação deste projeto em uma API no Swagger, basta apenas baixar o arquivo ```swagger-Paulo.yaml``` disponivel em [meu repositório](https://github.com/paulodaluz/Nossas-Lojas.git) no GitHub e importa-lo no site do [Swagger](https://editor.swagger.io/).
  
 
