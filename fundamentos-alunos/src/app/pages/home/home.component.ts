import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  titulo: string = 'Card Alunos'

   nome: string = 'Ana'
   turma: string = 'Adas dEV 2026'
   status: string = 'Aprovado'
   notaFinal: number = 9.5
   idade: number = 17
   imagem: string = 'https://i.redd.it/x9269yq508j71.jpg'

}
