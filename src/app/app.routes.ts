import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { ServicesList } from './pages/services-list/services-list';
import { ServiceDetail } from './pages/service-detail/service-detail';
import { ProductDetail } from './pages/product-detail/product-detail';
export const routes: Routes = [
    {path: "", redirectTo:"about", pathMatch:"full"},
    {path:'products', component:ProductList},
    {path:'products/category/:id', component:ProductList},
    {path: 'contact', component:Contact},
    {path: 'about', component:About},
    {path:'services', component:ServicesList},
    {path:'services/:id', component:ServiceDetail},
    {path:'products/:id', component:ProductDetail}
];
