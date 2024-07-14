import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  inputMessage="Ingresa tu Nombre";
  disableButton= false;

  clickEvent():void{
    alert('click')
   }

   input(event:Event):void{
    const inputEvent = event as InputEvent;
    // console.log('Input...',event)
    console.log('Input...',inputEvent.data)
   }

}
