import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [CommonModule, NgClass, RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
cards1 = [
    {
      title: 'Proyecto Sistema Hotel Radisson',
      description: 'Uso de lenguaje java, y Tecnologias: mysql+springboot+angular',
      icon: 'fa-solid fa-hotel',
      color: 'text-danger',
      link: 'https://github.com/BrayanLuis25/springboot-angular-bd',
      button: 'Ver codigo de mi sistema hotel'
    },
    {
      title: 'Sistema-de-Gestion-Veterinaria-Crocketas-Life-en-IOS',
      description: 'Uso de lenguaje swift y IDE XCODE',
      icon: 'fa-solid fa-shield-dog',
      color: 'text-warning',
      link: 'https://github.com/BrayanLuis25/Sistema-de-Gesti-n-Veterinaria-Crocketas-Life-en-IOS.git',
      button: 'Ver codigo de mi sistema veterinaria Crocketas'
    /*<i class="fa-solid fa-shield-dog" style="color: rgb(205, 170, 23);"></i> */
    },
    {
      title: 'App-Movil-para-la-Gestion-Integral-de-Eventos-Infantiles-en-Happyland',
      description: 'Uso de lenguaje kotlin y IDE Android Studio',
      icon: 'fa-solid fa-children',
      color: 'text-success',
      link: 'https://github.com/BrayanLuis25/App-Movil-para-la-Gestion-Integral-de-Eventos-Infantiles-en-Happyland.git',
      button: 'Ver codigo de mi sistema de eventos infantiles'
    },
    /*<i class="fa-solid fa-children" style="color: rgb(23, 222, 17);"></i> */
    {
      title: 'SPA VETERINARIA HUELLITAS',
      description: 'spa formulario uso de lenguaje jsx y framework React',
      icon: 'fa-solid fa-shield-cat',
      color: 'text-info',
      link: 'https://brayanluis25.github.io/react-example1/',
      button: 'Ver codigo de mi Single Page Application '
    }
    /*<i class="fa-solid fa-shield-cat" style="color: rgb(99, 230, 190);"></i> */
    
  ];

}
