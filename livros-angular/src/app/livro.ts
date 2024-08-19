export class Livro {
    codigo: number;
    titulo: string;
    autor: string;
    editora: string;
    ano: number;

    constructor(codigo: number, titulo: string, autor: string, editora: string, ano: number) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.ano = ano;
    }
}
