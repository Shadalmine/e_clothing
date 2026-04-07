import { Component, HostListener, signal, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../services/cart';

export type NavCategory = 'all' | 'men' | 'women' | 'new';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  @Output() categoryChange = new EventEmitter<NavCategory>();
  activeCategory = signal<NavCategory>('all');
  isVisible = signal(true);
  menuOpen = signal(false);
  cartOpen = signal(false);
  lastScrollY = 0;

  cartService = inject(CartService);

  constructor(private router: Router) {}

  navLinks: { label: string; value: NavCategory }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Men',          value: 'men' },
    { label: 'Women',        value: 'women' },
    { label: 'New',          value: 'new' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY < this.lastScrollY) {
      this.isVisible.set(true);
    } else if (currentScrollY > 80) {
      this.isVisible.set(false);
    }
    this.lastScrollY = currentScrollY;
  }

  toggleMenu() { this.menuOpen.update(v => !v); }
  toggleCart() { this.cartOpen.update(v => !v); }

  setCategory(cat: NavCategory) {
    this.activeCategory.set(cat);
    this.categoryChange.emit(cat);
    this.menuOpen.set(false);
    if (cat === 'all') {
      this.router.navigate(['/products']);
    } else {
      this.router.navigate(['/products'], { queryParams: { category: cat } });
    }
  }

  goToCheckout() {
  this.cartOpen.set(false);
  this.router.navigate(['/checkout']);
}

  goToLogin() {
  this.menuOpen.set(false);
  this.router.navigate(['/login']);
}

}