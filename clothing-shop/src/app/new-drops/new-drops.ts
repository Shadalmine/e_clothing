import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-drops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-drops.html',
})
export class NewDrops implements AfterViewInit {
  @ViewChildren('productCard') cards!: QueryList<ElementRef>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  products = [
    { id: 1, name: 'MIK Tee', price: '₱899', image: 'n1.jpg' },
    { id: 2, name: 'Sapir Ziv Tee', price: '₱899', image: 'n2.jpg' },
    { id: 3, name: 'Kyiv Font Tee', price: '₱899', image: 'n3.jpg' },
  ];

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 150);
        }
      });
    }, { threshold: 0.2 });

    this.cards.forEach(card => observer.observe(card.nativeElement));
  }

  goToProduct(id: number) {
    this.router.navigate(['/product', id]);
  }
}