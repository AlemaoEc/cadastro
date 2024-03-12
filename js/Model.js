class Model {
  constructor() {
    this.dados = localStorage.getItem("pessoa");
    this.dados = JSON.parse(this.dados);
    if(!this.dados) {
      this.dados = [];
      this.commit();
    }
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