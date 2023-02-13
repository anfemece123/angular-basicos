import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spirderman',
    'Iroman',
    'Hulk',
    'Thor',
    'capitan america',
  ];
  heroeBorrado: string = '';
  borrarHeroe() {
    console.log('borrando');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
