import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[];
  constructor() {
    this.livros = [
      { codigo: 1, titulo: 'Livro A', autor: ['Autor A'], editora: 'Editora A', ano: 2020 },
      { codigo: 2, titulo: 'Livro B', autor: ['Autor B'], editora: 'Editora B', ano: 2021 },
      { codigo: 3, titulo: 'Livro C', autor: ['Autor C'], editora: 'Editora C', ano: 2022 },
    ].map(data => new Livro(data.codigo, data.titulo, data.autor, data.editora, data.ano));

  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = this.livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0) + 1;
    novoLivro.codigo = novoCodigo;
    this.livros.push(novoLivro);
  }

  excluir(codigoLivro: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigoLivro);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
