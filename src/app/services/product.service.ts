import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';
  private http = inject(HttpClient);

  public selectedProduct: number = 1;

  constructor() { }

  private _products : Product[] = [];

  public fetchProducts(){
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (products) => {
        this._products = products;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  public get products(): Product[] {
    return this._products;
  }

  public getSelectedProduct(): Product {
    const product = this._products.find(product => product.id === this.selectedProduct);
    if (!product) {
      throw new Error(`Product with id ${this.selectedProduct} not found`);
    }
    return product;
  }

  public setSelectedProduct(id: number) {
    this.selectedProduct = id;
  }
}
