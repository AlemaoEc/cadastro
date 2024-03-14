class Model {
    constructor() {
      this.dados = localStorage.getItem("pessoa");
      this.dados = JSON.parse(this.dados);
      if(!this.dados) {
        this.dados = [];
        this.commit();
      }
    }

    async init() {
        console.log("Passo 1");
        const resposta = await fetch("https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/users");
        console.log("Passo 2");
        const json = await resposta.json();
        console.log("Passo 3");
        this.dados = json;
        this.commit();
    }
  
    salvar(nome, idade, ra, cpf) {
      var pessoa = { nome, idade, ra, cpf };
      this.dados.push(pessoa);
      this.commit();
    }
  
    remover(indice) {
      this.dados.splice(indice,1);
      this.commit();
    }
  
    commit() {
      localStorage.setItem("pessoa", JSON.stringify(this.dados));
    }
  }