import { CriaCliente, EditaCliente, DeletaCliente, BuscaPorId, BuscaPorNome, BuscaPorCPF } from "./controller/Controler";
import { BuscaPorRG, BuscaPorGenero, BuscaPorTrabalho, ListarTodos } from "./controller/Controler";


//Todas as rotas da aplicação
export const AppRoutes = [
    {
        path: "/criaCliente",
        method: "post",
        action: CriaCliente
    },
    {
        path: "/editaCliente/:id",
        method: "put",
        action: EditaCliente
    },
    {
        path: "/deletaCliente/:id",
        method: "delete",
        action: DeletaCliente
    },
    {
        path: "/buscaPorId/:id",
        method: "get",
        action: BuscaPorId
    },
    {
        path: "/buscaPorNome",
        method: "post",
        action: BuscaPorNome
    },
    {
        path: "/buscaPorCPF/:cpf",
        method: "get",
        action: BuscaPorCPF
    },
    {
        path: "/buscaPorRG/:rg",
        method: "get",
        action: BuscaPorRG
    },
    {
        path: "/buscaPorGenero/:genero",
        method: "get",
        action: BuscaPorGenero
    },
    {
        path: "/buscaPorTrabalho",
        method: "post",
        action: BuscaPorTrabalho
    },
    {
        path: "/listaClientes",
        method: "get",
        action: ListarTodos
    },
    /*{
        path: "/",
        method: "get",
        action: Redireciona
    }
 */
];