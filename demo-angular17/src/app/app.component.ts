import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LikeComponent } from './like/like.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LikeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular17';
}
