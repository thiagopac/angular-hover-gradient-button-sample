import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularHoverGradientButton } from 'angular-hover-gradient-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularHoverGradientButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-hover-gradient-button-sample';
}
