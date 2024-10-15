import { Component } from '@angular/core';
import { ProductDetailComponent } from "../../components/product-detail/product-detail.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
