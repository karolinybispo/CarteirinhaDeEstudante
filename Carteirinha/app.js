// creatApp eh uma funcao para iniciar um novo app Vue. O aplicativo esta sendo armazenado em "app"
let apli = Vue.createApp({
  
  data() {// dentro desse metodo defini-se os dados q serao utilizados no aplicativo Vue.
          //esse metodo retorna um obj js contendo dados q podem ser monitorados pelo Vue p q quando foram alterados o dom seja atualizado automaticamnete. 

    return{// ele retorna o que tem dentro do metodo data. 
  
    aluno: {// definido um obj.
      nome: '',// daqui p baixo sao atributos do obj aluno.
      foto: '',
      ra: '',
      turma: '',
      curso: ''
    },
    darkMode: false,
 
  };

}
}
);
apli.mount('#app');// é usado para montar o aplicativo Vue em um elemento HTML específico.
                  // O aplicativo Vue esta sendo montado dentro do elemento com id "app" o que tiver ali dentro sera controlado pelo Vue.

  