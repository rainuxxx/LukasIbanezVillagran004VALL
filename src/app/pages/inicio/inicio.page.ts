import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; //se añade para hacer funcionar el arreglo


//arreglo parte 1!

interface Componente  {
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]= [
    {
      icon: 'alert-circle-outline',
      name: 'Información',
      redirecTo: '/infor'
    },
    {
      icon: 'newspaper-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },
  ]

  constructor(private menuController: MenuController) { } //se añade el menuController

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
    
  }

}
