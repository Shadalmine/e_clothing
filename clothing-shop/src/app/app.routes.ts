import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { HomePage } from './pages/home-page/home-page';
import { ProductDetail } from './pages/product-detail/product-detail';
import { About } from './pages/about/about';
import { Checkout } from './pages/checkout/checkout';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'products', component: Products },
  { path: 'product/:id', component: ProductDetail },
  { path: 'about', component: About },
  { path: 'checkout', component: Checkout },
  { path: 'login', component: Login },
];