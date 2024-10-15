import { Component } from '@angular/core';
import { ProductDescComponent } from "../../components/product-desc/product-desc.component";

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [ProductDescComponent],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {

}
