import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  priceNum: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<CartItem[]>([]);

  cartCount = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );

  total = computed(() =>
    this.items().reduce((sum, item) => sum + item.priceNum * item.quantity, 0)
  );

  addToCart(product: { id: number; name: string; price: string; image: string }) {
    const priceNum = parseFloat(product.price.replace(/[₱,]/g, ''));
    const existing = this.items().find(i => i.id === product.id);
    if (existing) {
      this.items.update(items =>
        items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      );
    } else {
      this.items.update(items => [...items, { ...product, quantity: 1, priceNum }]);
    }
  }

  removeItem(id: number) {
    this.items.update(items => items.filter(i => i.id !== id));
  }

  increment(id: number) {
    this.items.update(items =>
      items.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i)
    );
  }

  decrement(id: number) {
    this.items.update(items =>
      items.map(i => i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i)
    );
  }
}