import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; //se añade para hacer funcionar el arreglo


interface Componente  {
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-infor',
  templateUrl: './infor.page.html',
  styleUrls: ['./infor.page.scss'],
})
export class InforPage implements OnInit {
  componentes: Componente[]= [
    {
      icon: 'alert-circle-outline',
      name: 'Informacion',
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
