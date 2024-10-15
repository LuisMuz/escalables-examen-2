import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Home2Component } from './pages/home2/home2.component';

export const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "home-2", component:Home2Component},
  {path: "product", component:ProductComponent},
  {path: "**", component: NotFoundComponent}
];
