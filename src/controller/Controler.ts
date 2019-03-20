import { Request, Response } from "express";
import { getManager, In } from "typeorm";
import { Clientes } from "../entity/Clientes";
import { } from "express-validator";
import { MensagemPadrao } from "../models/MensagemPadrao";
import { validacao } from "../models/Validacao";


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
    const dadosCliente = ClientesRepository.create(request.body);

    //Salva o cliente recebido
    await ClientesRepository.save(dadosCliente);

    //Retorna o cliente criado ao usuário
    response.send(dadosCliente);
    console.log("Loja criada com sucesso");

};


