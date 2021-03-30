

# Teste Técnico Tem Saude(Back-end)

O teste técnico consiste no desenvolvimento de uma aplicação de gerenciamento de agendamentos, onde o usuário ira poder fazer as operações de CRUD(Create, Read, Update, Delete) no sistema.




## Como fazer o download do projeto.

#### 1ª Opção (Observação é necessário ter o git instalado na maquina para executar essa opção)

<li> Utilize o comando  git clone https://github.com/tem-saude/desafio-tem.git no seu terminal para fazer o download do repositório </li>

<li> E acessar o arquivo baixado pelo seu editor de código </li>


## Gerenciadores de Pacotes (Yarn / Npm)

Antes de executar o projeto é necessario instalar as dependências  para que o projeto funcione.

#### YARN
Se você estiver utilizando o gerenciador de pacotes yarn , basta executar o comando yarn no terminal com o endereço referente a esse projeto.



#### NPM
Se você estiver utilizando o npm como gerenciador  de pacotes, o processo é um pouco diferente basta excluir o arquivo yarn.lock, após o arquivo ter sido deletado basta executar o comando npm install
para instalar as dependências necessárias.


### Script de Execução do projeto
<li>Para executar a aplicação no yarn basta utilizar o comando yarn dev</li>
<li>Para executar a aplicação no npm basta utilizar o comando npm run dev</li>


## Aviso Importante!
Antes de executar o projeto é necessário configurar o  arquivo ormconfig.json  de acordo com o seu banco dados. Se a sua maquina utiliza um banco  diferente(eu utilizei o postgres nesse projeto) é necessario instalar o driver do banco correspondente e algumas informaçações adicionais dentro dele.

Você pode consultar na documentação do typeorm [nesse link](https://typeorm.io/#/)
Tendo configurando o ormconfig.json  basta executar o comando <strong> yarn typorm migration:run<strong>
#### Layers da aplicação

<strong> __Tests__ </strong> -> Responsável pelos testes de intregação da aplicação.
<br/>
<br/>
<strong> Database </strong> ->  Responsável pelo versionamento do banco de dados através das migrations.
 <br/>
 <br/>
<strong> Helpers </strong> -> Responsável por isolar possiveis repitições de código.
<br/>
<br/>
<strong>  Errors </strong> ->  Responsável  por tratar os possiveis erros nas requisições.
<br/>
<br/>
<strong> Routes </strong> ->   Responsável pelo por receber e retornar as respostas http.
<br/>
<br/>
<strong> Services </strong> ->  Responsável pela regra de négocio da aplicação.
<br/>
<br/>
<strong> Repositories </strong> -> Responsável pela comunição do model com base de dados.
