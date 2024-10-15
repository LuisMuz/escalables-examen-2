import { Component, inject } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    RatingModule, FormsModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  private productsService = inject(ProductService)

  constructor() {
    this.productsService.fetchProducts();
  }

  public get products() : Product[] {
    return this.productsService.products;
  }

  public selectProduct(id: number) {
    this.productsService.setSelectedProduct(id);
  }
}
