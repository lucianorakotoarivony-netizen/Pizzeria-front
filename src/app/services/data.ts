import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home, Service, Product, Contact, Category, About } from '../models/site.models';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Data {
  private http = inject(HttpClient);
  private API_URL = environment.apiUrl;
  private baseURL = environment.baseUrl;

  homeData = signal<Home | null>(null);
  serviceList = signal<Service[]>([]);
  serviceDetail = signal<Service | null>(null);
  productList = signal<Product[]>([]);
  productDetail = signal<Product | null>(null);
  contactData = signal<Contact | null>(null);
  categoryList = signal<Category[]>([]);
  aboutData = signal<About | null>(null);
  errorStatus = signal<boolean>(false);

  private fixtureImageUrl<T>(data:T):T{
    if (!data) return data;

    if (Array.isArray(data)){
      return data.map(item => this.fixtureImageUrl(item)) as any;
    }

    const obj = data as any;
    if (obj.image && typeof obj.image === "string" && !obj.image.startsWith('http')){
      obj.image = this.baseURL + obj.image;
    }
    return data;
  }

  private fetchAndSetData<T>(url:string, target: WritableSignal<T | null>, initalValue: T | null, params?: Record<string, string>){
    this.errorStatus.set(false);
    target.set(initalValue);
    this.http.get<T>(`${this.API_URL}/${url}/`,{params}).subscribe({
      next:(data) => {
        this.errorStatus.set(false);
        const cleanData = this.fixtureImageUrl(data);
        target.set(cleanData);
      },
      error:(err) => {
        this.errorStatus.set(true);
      }
    })
  }
  loadHomeData(){
    this.fetchAndSetData<Home>("home", this.homeData, null);
  }
  loadServiceListData(){
    this.fetchAndSetData<Service[]>("services", this.serviceList, []);
  }
  loadServiceDetailData(id:string){
    this.fetchAndSetData<Service>(`services/${id}`, this.serviceDetail, null);
  }
  loadProductListData(categoryId?: string){
    const params: Record<string, string> = {};
      if (categoryId) params['category'] = categoryId;
      this.fetchAndSetData<Product[]>('products', this.productList, [], params);
  }
  loadProductDetailData(id:string){
    this.fetchAndSetData<Product>(`products/${id}`, this.productDetail, null);
  }
  loadCategoryListData(){
    this.fetchAndSetData<Category[]>('category', this.categoryList, []);
  }
  loadContactData(){
    this.fetchAndSetData<Contact>('contact', this.contactData, null);
  }
  loadAboutData(){
    this.fetchAndSetData<About>('about', this.aboutData, null);
  }
}
