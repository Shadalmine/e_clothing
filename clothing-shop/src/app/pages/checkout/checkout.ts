import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.html',
})
export class Checkout {
  private router = inject(Router);

  goBack() {
    this.router.navigate(['/products']);
  }
}