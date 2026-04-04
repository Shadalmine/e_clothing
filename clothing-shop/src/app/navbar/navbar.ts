import { Component, HostListener, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type NavCategory = 'all' | 'men' | 'women' | 'new';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  @Output() categoryChange = new EventEmitter<NavCategory>();
  activeCategory = signal<NavCategory>('all');
  mobileOpen = signal(false);
  cartCount = signal(0);

  navLinks: { label: string; value: NavCategory }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Men',          value: 'men' },
    { label: 'Women',        value: 'women' },
    { label: 'New',          value: 'new' },
  ];

  setCategory(cat: NavCategory) {
    this.activeCategory.set(cat);
    this.categoryChange.emit(cat);
  }
}