import { CriaLoja, EditaLoja, DeletaLoja, BuscaPorId } from "../controller/LojaControler";
import { BuscaPorEstado, BuscaPorCidades, ListarTodas, Redireciona } from "../controller/LojaControler";


//Todas as rotas da aplicação
export const AppRoutesLoja = [
    {
        path: "/criaLoja",
        method: "post",
        action: CriaLoja
    },
    {
        path: "/editaLoja/:id",
        method: "put",
        action: EditaLoja
    },
    {
        path: "/deletaLoja/:id",
        method: "delete",
        action: DeletaLoja
    },
    {
        path: "/buscaPorIdL/:id",
        method: "get",
        action: BuscaPorId
    },
    {
        path: "/buscaPorEstado/:estado",
        method: "get",
        action: BuscaPorEstado
    },
    {
        path: "/buscaPorCidades/:estado",
        method: "post",
        action: BuscaPorCidades
    },
    {
        path: "/listaLojas",
        method: "get",
        action: ListarTodas
    },
    {
        path: "/",
        method: "get",
        action: Redireciona
    }

];