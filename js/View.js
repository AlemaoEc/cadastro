class View {
    constructor(pessoa, indice) {
        this.pessoa = pessoa;
        this.indice = indice;
    }

    renderiza() {
        return `
            <tr>
                <td>${this.pessoa.nome}</td>
                <td>${this.pessoa.idade}</td>
                <td>${this.pessoa.ra}</td>
                <td>${this.pessoa.cpf}</td>
                <td>
                <button data-indice=${this.indice} class="btn btn-danger">Remover</button>
                </td>
            </tr>
        `
    }
}