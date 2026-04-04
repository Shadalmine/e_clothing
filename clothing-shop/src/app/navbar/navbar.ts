import { Component, HostListener, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  cartCount = signal(0);
  isVisible = signal(true);
  lastScrollY = 0;

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
      // Scrolling UP — show navbar
      this.isVisible.set(true);
    } else if (currentScrollY > 80) {
      // Scrolling DOWN past 80px — hide navbar
      this.isVisible.set(false);
    }

    this.lastScrollY = currentScrollY;
  }

  setCategory(cat: NavCategory) {
    this.activeCategory.set(cat);
    this.categoryChange.emit(cat);
  }
}
