//"app"  é colocado pq é o valor do "id" atribuido a tag "div", assim o vue.js procura, no html, e executa o que tem que ser executado. 
//Uma vez encontrado, o Vue.js assume o controle desse elemento e aplica a lógica e os dados definidos na instância Vue.
    let PrimeiroApp = Vue.createApp({ // criando uma instancia na varaivel app, pois ela vai ter toda a lógica e os dados necessários para controlar e atualizar dinamicamente o elemento HTML associado.

    data(){ //funcao que definira os dados reativos. 
            //sgf q as alteracoes nesses dados serao refletidos na interface do usuario.
    return {// para as alteracoes funcionarem preciso que elas sejam retornadas.

        message: 'Olá, Vue.js!' // o valor que esta na interpolacao no arq html deve ser o mesmo aqui.
    }
    }})
    PrimeiroApp.mount('#app');// o mount monta a instancia Vue no elemnto HTML. Ele inicializa e conecta a instancia Vue ao elemento HTML eespecificado.  O vue assume o controle desse elemento "app" e aplica a logica e os dados definidos na instancia "PrimeiroApp"
                            // o Vue substituira que esta no Html(sera procurado o id com valor -app-) pelo que esta dentro de PrimeiroApp.
                            //mount é o ponto de entrada p conectar uma instancia Vue ao DOM  e iniciar a aplicacao Vue.