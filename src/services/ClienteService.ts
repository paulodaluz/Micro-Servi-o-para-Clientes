import { Request } from 'express';
import { Clientes } from "../entity/Clientes";
import { ListaLojas } from "../entity/Loja";


export class ClienteService{
    
    CriaCliente(req: Request){
        
        var c = new Clientes()
        c.nome = req.body.nome
        c.cpf = req.body.cpf
        c.rg = req.body.rg
        c.genero = req.body.genero
        c.celular = req.body.celular
        c.endereco = req.body.endereco
        c.localDeTrabalho = req.body.localDeTrabalho
        c.loja = new ListaLojas()
        c.loja.id = req.body.lojaId
    
        return c;
    }
}
