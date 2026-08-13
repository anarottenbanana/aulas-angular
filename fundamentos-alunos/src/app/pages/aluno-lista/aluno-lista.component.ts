import { Component } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';
import { AlunoCardComponent } from "../../components/aluno-card/aluno-card.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-aluno-lista',
  imports: [AlunoCardComponent],
  templateUrl: './aluno-lista.component.html',
  styleUrl: './aluno-lista.component.css'
})
export class AlunoListaComponent {

  modoExibicao: string = ''
  filtrar: string =''

  alunos: Aluno[] = [
    {nome: 'Ana',
    turma: 'Adas Dev 2026',
    notaFinal: 7.5,
    idade: 17,
    imagem: 'https://i.redd.it/x9269yq508j71.jpg',
    email: 'slamanohaha55@gmail.com'
  },
    {nome: 'Peloso',
    turma: 'Gatos Dev 2026',
    notaFinal: 10,
    idade: 10,
    imagem: '',
    email: 'pelosolindo@catmail.com'
    }
  ]

  modoTabela(): void {
    this.modoExibicao = 'tabela'
  }

  modoCard(): void {
    this.modoExibicao = 'card'
  }

  filtrarReprovados(): void {
    this.filtrar = 'reprovados'
  }

  filtrarAprovados(): void {
    this.filtrar = 'aprovados'
  }

}
