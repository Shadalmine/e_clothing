import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clothing-shop');
}