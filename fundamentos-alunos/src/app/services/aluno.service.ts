import { Injectable } from '@angular/core';
import { Aluno } from '../interfaces/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

    alunos: Aluno[] = [
      {
        nome: 'Ana',
        turma: 'Adas Dev 2026',
        notaFinal: 7.5,
        idade: 17,
        imagem: 'https://i.redd.it/x9269yq508j71.jpg',
        email: 'slamanohaha55@gmail.com'
      },
      {
        nome: 'Peloso',
        turma: 'Gatos Dev 2026',
        notaFinal: 10,
        idade: 10,
        imagem: '',
        email: 'pelosolindo@catmail.com'
      }
    ]

    listar(): Aluno[] {
      return this.alunos
    }


}
