import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  input= "Ingrese su nombres"
  inputName=""

  click():void{
    this.inputName = "Nuevo valor "
  }
}
