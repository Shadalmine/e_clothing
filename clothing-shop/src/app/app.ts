import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isAboutPage = signal(false);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.isAboutPage.set(e.url === '/about');
    });
  }
}