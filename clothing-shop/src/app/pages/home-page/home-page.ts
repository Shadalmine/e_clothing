import { Component } from '@angular/core';
import { Home } from '../../home/home';
import { NewDrops } from '../../new-drops/new-drops';
import { PromoBanner } from '../../promo-banner/promo-banner';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Home, NewDrops, PromoBanner],
  template: `
    <app-home></app-home>
    <app-new-drops></app-new-drops>
    <app-promo-banner></app-promo-banner>
    <div class="bg-white border-b border-gray-200 overflow-hidden py-2">
      <div class="flex whitespace-nowrap animate-marquee">
        @for (item of marqueeItems; track item) {
          <span class="text-sm font-medium mx-12">✦ Get 10% Off Your First Order</span>
        }
      </div>
    </div>
  `,
})
export class HomePage {
  marqueeItems = Array(10).fill('');
}