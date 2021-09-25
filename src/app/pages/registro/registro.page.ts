import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; //se añade para hacer funcionar el arreglo


interface Componente  {
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {

    email:'',

    password:'',
    
    name: '',

    year: '',
    
    apellido: ''

  }

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
  
  onSubmit(){

    console.log('submit');

    console.log(this.usuario);

  }

}
