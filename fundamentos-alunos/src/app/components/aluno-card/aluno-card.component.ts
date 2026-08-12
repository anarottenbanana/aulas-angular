import { Component, Input } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-aluno-card',
  imports: [NgClass],
  templateUrl: './aluno-card.component.html',
  styleUrl: './aluno-card.component.css'
})
export class AlunoCardComponent {
  @Input({required: true}) aluno!: Aluno
}
