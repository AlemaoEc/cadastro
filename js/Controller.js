class Controller {
    constructor() {
        this.container = document.querySelector("tbody");;
        this.repositorio = new Model();

        this.init();
    }

    init() {
        this.container.innerHTML = "";
        for(const [i,p] of this.repositorio.dados.entries()) {
            const view = new View(p, i);
            this.container.innerHTML += view.renderiza();
        }
        this.bind();
    }

    bind() {
        document.querySelector("#salvar").addEventListener(() =>{
            this.salvarPessoa();
        });
        for(btn of document.querySelectorAll(".btn-danger")) {
            btn.addEventListener('click', (e) => {
                this.removerPessoa(e.target.dataset.indice)
            });
        }
    }

    salvarPessoa() {
        const name = document.querySelector("#name").value;
        const idade = document.querySelector("#idade").value;
        const ra = document.querySelector("#ra").value;
        const cpf = document.querySelector("#cpf").value;
        this.repositorio.salvar(name, idade, ra, cpf);
        this.init();
    }

    removerPessoa(indice) {
        this.repositorio.remover(indice);
        this.init();
    }
}