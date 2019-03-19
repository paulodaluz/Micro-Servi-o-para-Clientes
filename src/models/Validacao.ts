import { Request } from "express";
import { } from "express-validator";

export class validacao {

    validaInformacoes(request: Request) {

    request.assert("nome", "Nome do cliente é obrigatório.").notEmpty();
    request.assert("cpf", "CPF do cliente é obrigatório e deve conter 14 caracteres, incluindo (´.´ e ´-´)").notEmpty().isLength({ min: 14, max: 14});
    request.assert("rg", "RG do cliente é obrigatório.").notEmpty().isLength({ min: 10, max: 14 });
    request.assert("celular", "Telefone/Celular do cliente é obrigatório e deve ter no minimo 10 caracteres e no máximo 12.").notEmpty().isLength({ min: 10, max: 12 });
    request.assert("endereco", "O endereço do cliente é obrigatório.").notEmpty().isLength({ min: 5 });
    request.assert("localDeTrabalho", "O local de trabalho do cliente é obrigatório").notEmpty();

    var erros = request.validationErrors();

    if(erros) {
        return erros;
    }

    return null;
    }
}