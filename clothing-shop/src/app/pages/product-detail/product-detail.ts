import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  images?: string[];
  description?: string;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
})
export class ProductDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cartService = inject(CartService);

  product = signal<Product | null>(null);
  selectedImage = signal('');
  quantity = signal(1);
  added = signal(false);
  showModal = signal(false);

  allProducts: Product[] = [
    { id: 1, name: 'MIK Tee', price: '₱899', category: 'men', image: 'n1.jpg', images: ['n1.jpg', 'n1.jpg'], description: 'A bold statement tee featuring the iconic MIK graphic print.' },
    { id: 2, name: 'Sapir Ziv Tee', price: '₱899', category: 'women', image: 'n2.jpg', images: ['n2.jpg', 'n2.jpg'], description: 'Minimalist design with a relaxed fit perfect for everyday wear.' },
    { id: 3, name: 'Kyiv Font Tee', price: '₱899', category: 'new', image: 'n3.jpg', images: ['n3.jpg', 'n3.jpg'], description: 'Typography-forward tee with a vintage Ukrainian aesthetic.' },
    { id: 4, name: 'Urban Drift Tee', price: '₱849', category: 'men', image: 't1.jpg', images: ['t1.jpg'], description: 'Street-ready comfort with modern urban styling.' },
    { id: 5, name: 'Veloura Street Tee', price: '₱929', category: 'women', image: 't2.jpg', images: ['t2.jpg'], description: 'Soft fabric with a feminine streetwear edge.' },
    { id: 6, name: 'Neon Pulse Tee', price: '₱799', category: 'new', image: 't3.jpg', images: ['t3.jpg'], description: 'Vibrant colorways that pop in any setting.' },
    { id: 7, name: 'Shadowline Tee', price: '₱899', category: 'men', image: 't4.jpg', images: ['t4.jpg'], description: 'Dark tones with subtle graphic detailing.' },
    { id: 8, name: 'Luxe Bloom Tee', price: '₱999', category: 'women', image: 't5.jpg', images: ['t5.jpg'], description: 'Floral-inspired luxury streetwear for the modern woman.' },
    { id: 9, name: 'Nova Edge Tee', price: '₱879', category: 'new', image: 't6.jpg', images: ['t6.jpg'], description: 'Futuristic design meets everyday comfort.' },
    { id: 10, name: 'Ironclad Tee', price: '₱949', category: 'men', image: 't7.jpg', images: ['t7.jpg'], description: 'Built tough with premium cotton for lasting wear.' },
    { id: 11, name: 'Rosé Vibe Tee', price: '₱1,099', category: 'women', image: 't8.jpg', images: ['t8.jpg'], description: 'Soft pink hues with a laid-back summer feel.' },
    { id: 12, name: 'Quantum Fade Tee', price: '₱1,199', category: 'new', image: 't9.jpg', images: ['t9.jpg'], description: 'Gradient fade effect with a premium streetwear finish.' },
    { id: 13, name: 'Streetcore Alpha Tee', price: '₱919', category: 'men', image: 't10.jpg', images: ['t10.jpg'], description: 'Core streetwear essential for the everyday alpha.' },
    { id: 14, name: 'Chic Aura Tee', price: '₱889', category: 'women', image: 't11.jpg', images: ['t11.jpg'], description: 'Effortlessly chic with a relaxed silhouette.' },
    { id: 15, name: 'Eclipse Motion Tee', price: '₱969', category: 'women', image: 't12.jpg', images: ['t12.jpg'], description: 'Dynamic motion-inspired graphics for the bold wearer.' },
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe(params => {
      const id = +params['id'];
      const found = this.allProducts.find(p => p.id === id) || null;
      this.product.set(found);
      if (found) this.selectedImage.set(found.image);
    });
  }

  selectImage(img: string) { this.selectedImage.set(img); }
  increment() { this.quantity.update(q => q + 1); }
  decrement() { if (this.quantity() > 1) this.quantity.update(q => q - 1); }
  goBack() { this.router.navigate(['/products']); }
  buyNow() { this.showModal.set(true); }
  closeModal() { this.showModal.set(false); }

  addToCart() {
    const p = this.product();
    if (!p) return;
    for (let i = 0; i < this.quantity(); i++) {
      this.cartService.addToCart({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image
      });
    }
    this.added.set(true);
    setTimeout(() => this.added.set(false), 2000);
  }
}