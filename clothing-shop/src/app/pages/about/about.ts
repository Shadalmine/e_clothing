import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
})
export class About {
  constructor(private router: Router) {}

  goToProducts() {
    this.router.navigate(['/products']);
  }
}