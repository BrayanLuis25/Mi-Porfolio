import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi_porfolio');


}
/*ng g c components/navbar
ng g c components/hero
ng g c components/profile
ng g c components/experience
ng g c components/education
ng g c components/projects
ng g c components/skills
ng g c components/contact
ng g c components/footer */