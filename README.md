# Nossas Lojas v3.0

Programa que guarda informações de lojas físicas de um e-commerce e de seus clientes. Guarda informações como id das lojas, nome, endereço, telefone/celular, CNPJ, horário de trabalho, cidade onde se localiza e estado e do cliente guarda informações como id do cliente, nome, CPF, RG, gênero, telefone para contato, endereço, local de trabalho e loja de compra. 



# Ferramentas Utilizadas

 Foi usado o Node.js como principal compilador, e as principais biblotecas utilizadas foram express, body-parse, consign, nodemon, express-validator..., que podem ser baixadas atrasvés do comando ```npm install``` no terminal da pasta. 
 Desenvolvido no windows 7, mas quando executado apartir do docker é executado em linux. E como banco de dados foi usado o MySQL para armazenamento dos dados.
 
 
 
 # Como baixar e executar
 
 Primeiramente você deve ter o node.js e o banco de dados MYSQL.
 Após clonar o [repositório](https://github.com/paulodaluz/Micro-Servicos-para-Clientes.git), você deve abrir a pasta no terminal e executar o comando "npm install" para instalar todos os pacotes(bibliotecas) usadas  na produção da aplicação.
 Para a aplicação poder funcionar é necessario configurar o banco de dados, e para isso precisamos configurar o arquivoormconfig.json , pois é ele quem faz a comunicação com o Banco de Dados.
 
 
 ## Como Utilizar
 
  Para testar, fazer consultas você deverá utilizar o app ```Postman```.
 Antes de fazer os testes a seguir você deverá executar o seguinte processo:

 - Entrar na pasta do projeto no terminal;
 - Botar para rodar a aplicação com o comando ```npm start```.
 - É recomendado tambem estár com o MySQL aberto para poder ver as alterações no banco de dados.
 
 
 # Loja
 ### Cria Loja
  
 Para criar uma nova loja e cadastra-la, você deverá selecionar o método ```POST``` no ```Postman``` e deverá:
 
 - Inserir a URL: http://localhost:3000/criaLoja;
 - Na aba Headers você deverá usar ```Content-Type```;
 - Na aba ```Body``` deverá selecionar o modo ```raw``` e selecionar o ```JSON(application/json)```;
 - E no campo abaixo você irá inserir os dados da loja, passando-os como no exemplo:
 ```
 {
    "nome_loja": "Loja A",
    "endereco": "Rua Abc, 000",
    "celular": "00 0000 0000",
    "cnpj": "00.000.000/0000-00",
    "horarioDeTrabalho": "Diariamente das 11hs às 23hs",
    "cidade": "Cidade ABC",
    "estado": "A"
}
 ```
 Após isso, você irá notar que foi acrescentado em seu banco de dados, na tabela as informações e irá retornar que a tabela foi criada em seu console!
 
 
 ### Edita Loja
 
 Para editar uma loja, você deverá selecionar o método ```PUT``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/editaLoja/{id} passando o ```ID``` da loja que deseja editar no lugar de ```{id}```;
 - Na aba Headers você deverá usar ```Content-Type```;
 - Na aba ```Body``` deverá selecionar o modo ```raw``` e selecionar o ```JSON(application/json)```;
 - E no campo abaixo você irá inserir os NOVOS dados da loja, passando-os como no exemplo:
  ```
 {
    "nome_loja": "Loja B",
    "endereco": "Rua Cba, 001",
    "celular": "11 1111 1111",
    "cnpj": "00.000.000/0000-01",
    "horarioDeTrabalho": "Diariamente das 14hs às 22hs",
    "cidade": "Cidade ABC",
    "estado": "A"
}
 ```
 
 Assim que você atualizar seu banco de dados ira ver que sua tabela foi atualizada com sucesso!

 ### Deleta Loja
 Para deletar uma loja, você irá selecionar o método ```DELETE``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/deletaLoja/{id} passando o ```ID``` da loja que deseja deletar no lugar de ```{id}```;
 - Na aba Headers você deverá usar ```Content-Type```.
 
 Após a atualização da tabela você irá notar que foi deletada a loja com o ```ID``` correspondente ao que foi passado.
 
 
 ### Busca por ID
 Para buscar uma loja pelo ```ID```, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/buscaId/{id} passando o ```ID``` da loja que deseja buscar no lugar de ```{id}```;
 - Na aba Headers você deverá usar ```Content-Type```.
 
 E você irá perceber que retornou no Body as informações da loja cujo o ```ID``` correspondente ao que foi passado.
 
 
 ### Busca por Estado
 Para buscar uma loja pelo ```estado```, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/buscaEstado/{estado} passando o ```Estado``` da loja que deseja buscar, no lugar de ```{estado}```.
 - Na aba Headers você deverá usar ```Content-Type```;
 
 E você irá perceber que retornou no Body as informações da loja cujo o ```Estado``` correspondente ao que foi passado.
 
 
 ### Busca por Estado e Cidades
 Para buscar uma loja pelo ```estado``` e ```cidade```, você deverá selecionar o método ```PUT``` no ```Postman``` e deverá: 
 - Inserir a URL: http://localhost:3000/buscaPorCidades/{estado} passando o ```Estado``` da loja que deseja pesquisar no lugar de ```{estado}```;
 - Na aba Headers você deverá usar ```Content-Type```;
 - Na aba ```Body``` deverá selecionar o modo ```raw``` e selecionar o ```JSON(application/json)```;
 - E no campo abaixo você irá inserir as cidades de uma loja que deseja buscar, passando-os como no exemplo:
  
  ```
  {
"cidades" : [
"BRASIL", "Passo Fundo", "Carazinho", "Marau", "America"
]
}
  ```
E você irá perceber que retornou no Body as informações da(s) loja(s) cujo o ```Estado``` e a(s) ```Cidades``` correspondentes ao que foi passado.
  
  
 ### Listar Todas as Lojas:
 Para listar todas as lojas, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
  - Inserir a URL: http://localhost:3000/listaLojas .
   
E você irá perceber que retornou no Body todas as lojas cadastradas no banco de dados.
   
   
  Caso queira ver minha ```Collection``` no ```Postman``` é só clicar [aqui](https://www.getpostman.com/collections/23eb7722c81005614987).
 
 
 
 
 
 
 # Cliente
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
 - E no campo abaixo você irá inserir os NOVOS dados do cliente, passando-os como no exemplo:
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
 
 E você irá perceber que retornou no Body as informações do cliente cujo o ```ID``` correspondente ao que foi passado.
 
 
 
 ### Busca por Nomes dos Clientes
 
 Para buscar uma cliente pelo ```nome```, você deverá selecionar o método ```POST``` no ```Postman``` e deverá:
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
 
 E você irá perceber que retornou no Body as informações do cliente cujo o(s) ```Nome(s)``` correspondente ao que foi passado.
 
 
 
 ### Busca por CPF do Cliente
 
 Para buscar uma loja pelo ```CPF```, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/buscaPorCPF/{cpf} passando o ```CPF``` do cliente que deseja buscar no lugar de ```{cpf}```;
 - Na aba Headers você deverá usar ```Content-Type```;
  
E você irá perceber que retornou no Body as informações do cliente cujo o ```CPF``` correspondente ao que foi passado.
 
  
  
 ### Busca por RG do Cliente
   
 Para buscar um cliente pelo ```RG```, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/buscaPorRG/{rg} passando o ```RG``` do cliente que deseja buscar no lugar de ```{rg}```;
 - Na aba Headers você deverá usar ```Content-Type```;
  
E você irá perceber que retornou no Body as informações do cliente cujo o ```RG``` correspondente ao que foi passado.



 ### Busca por Gênero do Cliente
 
 Para buscar um cliente pelo ```Gênero```, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/buscaPorGenero/{genero} passando o ```GÊNERO "F" ou "M"``` do cliente que deseja buscar no lugar de ```{gênero}```;
 - Na aba Headers você deverá usar ```Content-Type```;
  
E você irá perceber que retornou no Body as informações do cliente cujo o ```Gênero``` correspondente ao que foi passado.
  
  
  
 ### Busca por Lojas em que os Clientes trabalham
 
 Para buscar um cliente pelo ```Local de Trabalho```, você deverá selecionar o método ```POST``` no ```Postman``` e deverá:
 - Inserir a URL: http://localhost:3000/buscaPorTrabalho.
 - Na aba Headers você deverá usar ```Content-Type```;
 - Na aba ```Body``` deverá selecionar o modo ```raw``` e selecionar o ```JSON(application/json)```;
 - E no campo abaixo você irá inserir os nomes dos clientes desejados, passando-os como no exemplo:
 
  ``` 
{
"localDeTrabalho" : [
"Renner", "Loja A", "Loja B"
]
}
 ``` 
 E você irá perceber que retornou no Body as informações da(s) loja(s) cujo o(s) ```Local de trabalho(s)``` correspondente ao que foi passado.
 
 
 
 ### Listar Todos os Clientes:
 
 Para listar todas os clientes, você deverá selecionar o método ```GET``` no ```Postman``` e deverá:
  - Inserir a URL: http://localhost:3000/listaClientes.
   
E você irá perceber que retornou no Body todas os clientes cadastradas no banco de dados.
   
   
  Caso queira ver minha ```Collection``` no ```Postman``` de Clientes é só clicar [aqui](https://www.getpostman.com/collections/ada10d13782025ad804a).
  
  ## ###Complemento
  - Clicando [aqui](https://cloud.docker.com/u/paulera25/repository/docker/paulera25/ecommerceclientes), você poderá ver a imagem do NodeJs no DockerHub sendo executada no servidor.
  - Caso queria ver a documentação deste projeto em uma API no Swagger, basta apenas esta com o servidor rodando e entrar no endereço http://localhost:3000 que você será redirecionado para a documentação ou basta apenas baixa-lá de meu [GitHub](https://github.com/paulodaluz/Micro-Servicos-para-Clientes.git) dentro da pasta ```Documentacao``` e importa-lo no site do [Swagger](https://editor.swagger.io/).
  
 
