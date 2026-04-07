import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promo-banner',
  standalone: true,
  imports: [],
  templateUrl: './promo-banner.html',
})
export class PromoBanner implements AfterViewInit {
  @ViewChild('promoLeft') promoLeft!: ElementRef;
  @ViewChild('promoCenter') promoCenter!: ElementRef;
  @ViewChild('promoRight') promoRight!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    [this.promoLeft, this.promoCenter, this.promoRight].forEach(el => {
      observer.observe(el.nativeElement);
    });
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }
}