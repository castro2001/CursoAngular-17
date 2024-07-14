import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
FormsModule
  ],
  exports:[
    ContainerComponent
  ]
})
export class ContainerModule { }
