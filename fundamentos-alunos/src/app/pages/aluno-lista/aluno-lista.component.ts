import { Component } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';
import { AlunoCardComponent } from "../../components/aluno-card/aluno-card.component";

@Component({
  selector: 'app-aluno-lista',
  imports: [AlunoCardComponent],
  templateUrl: './aluno-lista.component.html',
  styleUrl: './aluno-lista.component.css'
})
export class AlunoListaComponent {

   aluno1: Aluno = {
    'nome': 'Ana',
    'turma': 'Adas Dev 2026',
    'status': 'Aprovado',
    'notaFinal': 9.5,
    'idade': 17,
    'imagem': 'https://i.redd.it/x9269yq508j71.jpg',
    'email': 'teste'
  }

  aluno2: Aluno = {
    'nome': 'Peloso',
    'turma': 'Gatos Dev 2026',
    'status': 'Aprovado',
    'notaFinal': 10,
    'idade': 10,
    'imagem': '',
    'email': 'teste'
  }

}
