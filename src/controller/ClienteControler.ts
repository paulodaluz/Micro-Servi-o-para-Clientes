import { Request, Response } from "express";
import { getManager, In} from "typeorm";
import { Clientes } from "../entity/Clientes";
import { } from "express-validator";
import { MensagemPadrao } from "../models/MensagemPadrao";
import { validacao } from "../models/ClienteValidacao";
import { ClienteService } from "../services/ClienteService";


export async function CriaCliente(request: Request, response: Response) {

    //Cria uma conexão com o banco
    const ClientesRepository = getManager().getRepository(Clientes);

    //Pega a função validacao e os erros que ela retorna e guarda na variavel erros
    var erros = new validacao().validaInformacoes(request);

    //Se tiver erros retorna eles para o usuário
    if (erros) {
        console.log("Erros de validação encontrados");
        response.status(400).json(erros);
        return;
    };

    //Criando uma entidade(tabela no banco) com o que foi recebido no boddy
    const dadosCliente = new ClienteService().CriaCliente(request);

    //Salva o cliente recebido
    await ClientesRepository.save(dadosCliente);

    //Retorna o cliente criado ao usuário
    response.send(dadosCliente);
    console.log("Cliente criado com sucesso");

};

export async function EditaCliente(request: Request, response: Response) {

    //Cria uma conexão com o banco
    const ClientesRepository = getManager().getRepository(Clientes);

    //Pega a função validacao e os erros que ela retorna e guarda na variavel erros
    var erros = new validacao().validaInformacoes(request);

    //Se tiver erros retorna eles para o usuário
    if (erros) {
        console.log("Erros de validação encontrados");
        response.status(400).json(erros);
        return;
    };


    const CriaCliente = new ClienteService().CriaCliente(request);

    //Encontra o cliente e guarda ele na variavel dadosCliente
    const dadosCliente = await ClientesRepository.findOne(request.params.id);
    //Atualiza o Cliente
    await ClientesRepository.update({ id: request.params.id }, CriaCliente);

    //Se o cliente não for encontrado irá retornar o erro padrão ao usuário
    if (!dadosCliente) {
        response.status(404).json(new MensagemPadrao("404", "Não foi possivel editar o cliente, verifique os dados e tente novamente.").erroRetorno());
        response.end();
        return;
    }

    //Retorna o cliente atualizado para o usuário
    response.send(request.body);
    console.log("Cliente atualizado com sucesso");
};

export async function DeletaCliente(request: Request, response: Response) {

    //Cria uma conexão com o banco
    const ClientesRepository = getManager().getRepository(Clientes);

    //Acha o cliente no banco de dados e guarda na variavel dados cliente
    const dadosCliente = await ClientesRepository.findOne(request.params.id);

    //Se o cliente não for encontrado irá retornar o erro padrão ao usuário
    if (!dadosCliente) {
        response.status(404).json(new MensagemPadrao("404", "Não foi possivel deletar o cliente, verifique os dados e tente novamente.").erroRetorno());
        response.end();
        return;
    }
    //Deleta o cliente e retorna uma mensagem de sucesso ao usuário
    await ClientesRepository.delete({ id: request.params.id });
    response.send("Cliente Deletado com Sucesso");
    console.log("Cliente deletado com sucesso");

};

export async function BuscaPorId(request: Request, response: Response) {

    //Cria uma conexão com o banco
    const ClientesRepository = getManager().getRepository(Clientes);

    //Procurando no banco de dados e guardando dentro da variavel
    const dadosCliente = await ClientesRepository.findOne(request.params.id, {relations: ["loja"]});

    //Caso ocorra algum erro irá retornar o erro padrão para o usuário
    if (!dadosCliente) {
        response.status(404).json(new MensagemPadrao("404", "Nenhum cliente foi encontrado, verifique os dados e tente novamente.").erroRetorno());
        response.end();
        return;
    }

    //retorna o cliente com o id correspondente
    response.send(dadosCliente);
    console.log("Cliente buscado com sucesso");
};

export async function BuscaPorNome(request: Request, response: Response) {

    //Cria uma conexão com o banco
    const ClientesRepository = getManager().getRepository(Clientes);

    //Cliente,{ where: { cpf }, relations:["loja"]})
    //Procurando no banco de dados e guardanda dentro da variavel
    const dadosCliente = await ClientesRepository.find({
        where: {nome: In(request.body.nome)}, relations: ["loja"] });

    //Caso ocorra algum erro irá retornar o erro padrão para o usuário
    if (!dadosCliente) {
        response.status(404).json(new MensagemPadrao("404", "Nenhum cliente foi encontrado, verifique os dados e tente novamente.").erroRetorno());
        response.end();
        return;
    }

    //retorna o(s) clientes com o nome correspondente
    response.send(dadosCliente);
    console.log("Cliente(s) buscado(s) com sucesso");
};

export async function BuscaPorCPF(request: Request, response: Response) {
    
    //Cria uma conexão com o banco
    const ClientesRepository = getManager().getRepository(Clientes);
    
    //Procurando no banco de dados e guardando dentro da variavel
    const dadosCliente = await ClientesRepository.findOne({
        where: { cpf: request.params.cpf }, relations: ["loja"]});
    
    //Caso ocorra algum erro irá retornar o erro padrão para o usuário
    if (!dadosCliente) {
        response.status(404).json(new MensagemPadrao("404", "Nenhum cliente foi encontrado, verifique os dados e tente novamente.").erroRetorno());
        response.end();
        return;
    }
    
    //retorna o cliente com o CPF correspondente
    response.send(dadosCliente);
    console.log("Cliente buscado com sucesso");
};

export async function BuscaPorRG(request: Request, response: Response) {
    
    //Cria uma conexão com o banco
    const ClientesRepository = getManager().getRepository(Clientes);
    
    //Procurando no banco de dados e guardando dentro da variavel
    const dadosCliente = await ClientesRepository.findOne({ 
        where: { rg: request.params.rg }, relations: ["loja"] });
    
    //Caso ocorra algum erro irá retornar o erro padrão para o usuário
    if (!dadosCliente) {
        response.status(404).json(new MensagemPadrao("404", "Nenhum cliente foi encontrado, verifique os dados e tente novamente.").erroRetorno());
        response.end();
        return;
    }
    
    //retorna o cliente com o RG correspondente
    response.send(dadosCliente);
    console.log("Cliente buscado com sucesso");
};

export async function BuscaPorGenero(request: Request, response: Response) {

    //Cria uma conexão com o banco
    const ClientesRepository = getManager().getRepository(Clientes);

    //Procurando no banco de dados e guardanda dentro da variavel
    const dadosCliente = await ClientesRepository.find({ 
        where: { genero: request.params.genero }, relations: ["loja"] });

    //Caso ocorra algum erro irá retornar o erro padrão para o usuário
    if (dadosCliente.length == 0) {
        response.status(404).json(new MensagemPadrao("404", "Nenhum cliente foi encontrado, verifique os dados e tente novamente.").erroRetorno());
        response.end();
        return;
    }

    //retorna o(s) clientes com o genero correspondente
    response.send(dadosCliente);
    console.log("Cliente(s) buscado(s) com sucesso");
};

export async function BuscaPorTrabalho(request: Request, response: Response) {

    //Cria uma conexão com o banco
    const ClientesRepository = getManager().getRepository(Clientes);

    //Procurando no banco de dados e guardanda dentro da variavel
    const dadosCliente = await ClientesRepository.find({
        where: { localDeTrabalho: In(request.body.localDeTrabalho)}, relations: ["loja"]
    });

    //Caso ocorra algum erro irá retornar o erro padrão para o usuário
    if (!dadosCliente) {
        response.status(404).json(new MensagemPadrao("404", "Nenhum cliente foi encontrado, verifique os dados e tente novamente.").erroRetorno());
        response.end();
        return;
    }

    //retorna o(s) clientes que trabalham na loja correspondente
    response.send(dadosCliente);
    console.log("Cliente(s) buscado(s) com sucesso");
};

export async function ListarTodos(request: Request, response: Response) {

    //Cria uma conexão com o banco
    const ClientesRepository = getManager().getRepository(Clientes);

    //Encontra todas as lojas e guarda na variavel loja
    const loja = await ClientesRepository.find({relations: ["loja"]});

    //Se nenhuma loja for encontrada irá retornar o erro padrão ao usuário
    if (!loja.length) {
        response.status(404).json(new MensagemPadrao("404", "Nenhum cliente foi encontrado, verifique os dados e tente novamente."));
        response.end();
        return;
    }
    //Retorna todos os clientes para o usuário
    response.send(loja);
    console.log("Cliente(s) listado(s) com sucesso");
};

export async function Redireciona(request: Request, response: Response) {
    response.redirect(301, '/api-docs');
    console.log("Cliente redirecionado com sucesso");
};