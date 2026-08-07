import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlunoListaComponent } from "./pages/aluno-lista/aluno-lista.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AlunoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-alunos';
}
