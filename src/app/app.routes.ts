import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "product", component:ProductComponent},
  {path: "**", component: NotFoundComponent}
];
