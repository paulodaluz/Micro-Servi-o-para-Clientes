import { } from "./controller/Controler";
import { } from "./controller/Controler";


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
        path: "/buscaPorNome/:nome",
        method: "get",
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
        path: "/buscaPorTrabalho/:rg",
        method: "get",
        action: BuscaPorTrabalho
    },
    {
        path: "/listaClientes",
        method: "get",
        action: ListarTodos
    },
    {
        path: "/",
        method: "get",
        action: Redireciona
    }

];