import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Experience } from './components/experience/experience';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Home,About
    ,Skills, Experience, Projects, Contact,Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi_porfolio');

}
/*
ng g c components/hero
ng g c components/navbar
ng g c componentes/home

ng g c components/profile
ng g c components/experience
ng g c components/education
ng g c components/projects
ng g c components/skills
ng g c components/contact
ng g c components/footer */