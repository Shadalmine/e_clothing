import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Product IDs from the product-detail component
      const productIds = Array.from({ length: 15 }, (_, i) => i + 1);
      return productIds.map(id => ({ id: id.toString() }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
