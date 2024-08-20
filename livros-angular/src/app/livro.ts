export class Livro {
    constructor(
        public codigo: number = 0,
        public titulo: string = '',
        public autores: string[] = [],
        public editora: string = '',
        public ano: number = 0
    ) {}
}
