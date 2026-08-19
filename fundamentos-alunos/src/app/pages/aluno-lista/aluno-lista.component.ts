import { Component, inject } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';
import { AlunoCardComponent } from "../../components/aluno-card/aluno-card.component";
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-aluno-lista',
  imports: [AlunoCardComponent],
  templateUrl: './aluno-lista.component.html',
  styleUrl: './aluno-lista.component.css'
})
export class AlunoListaComponent {

  modoExibicao: string = 'tabela'
  private readonly alunoService = inject(AlunoService)
  listaAlunosFiltro: Aluno[] = []

  ngOnInit(): void {

    this.listaAlunosFiltro = this.alunoService.listar()
  }



  trocarModoExibicao(): void {

    if (this.modoExibicao === 'tabela') {
      this.modoExibicao = 'cards'
    } else if (this.modoExibicao === 'cards') {
      this.modoExibicao = 'tabela'
    }
  }



}
