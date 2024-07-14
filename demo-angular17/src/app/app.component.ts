import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerModule } from './container/container.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContainerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular17';
}
