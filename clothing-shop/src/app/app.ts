import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { NewDrops } from './new-drops/new-drops';
import { PromoBanner } from './promo-banner/promo-banner';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            Navbar, 
            Home,
            NewDrops,
            PromoBanner,
            Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
   protected readonly title = signal('clothing-shop');
  marqueeItems = Array(10).fill('');
}
