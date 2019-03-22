export class MensagemPadrao {

    //Mensagem para ser usada
    mensagem = [{
        "errorCode": "400",
        "Mensagem": "Erro na requisição, verifique os dados e tente novamente"
    }];


    constructor(codidoErro: string, mensagemToUser: string){
        this.mensagem = [{
            "errorCode": codidoErro,
            "Mensagem": mensagemToUser
        }]
        
    };
    
    //caso tenha algum erro retorna ele
    erroRetorno(){
        return this.mensagem;
    };
}
 