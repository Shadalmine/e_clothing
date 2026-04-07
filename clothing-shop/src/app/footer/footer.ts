import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/about']);
  }
}