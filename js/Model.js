class Modelo {
  initializer() {
    //var pessoasLocal = localStorage.getItem("pessoa");
    //var pessoasObjeto = JSON.parse(pessoasLocal);
    //if(pessoasObjeto) {
   
    //} else {
    //  localStorage.setItem("pessoa", JSON.stringify([]));
    //}

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
  }

  remover(indice) {
    this.dados.splice(indice,1);
    this.commit();
  }

  commit() {
    localStorage.setItem("pessoa", JSON.stringify(this.dados));
  }
}