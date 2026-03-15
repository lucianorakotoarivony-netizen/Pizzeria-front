import { Component, Signal } from '@angular/core';
import { BaseDetail } from '../../base-detail';
import { AriaryPipe } from '../../pipes/pipes.ariary';
import { cmPipe } from '../../pipes/pipe.cm';
import { Product } from '../../models/site.models';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  imports: [AriaryPipe, cmPipe, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail extends BaseDetail<Product>{
  listData=this.dataService.productList;
  detailData=this.dataService.productDetail;
  backRoute="products"
  loadList(){
    const categoryId = this.route.snapshot.queryParamMap.get('category');
    this.dataService.loadProductListData(categoryId ?? undefined);
  }
  loadDetail(id:string){
    this.dataService.loadProductDetailData(id);
  }
  override goBack(): void {
    const categoryId = this.route.snapshot.queryParamMap.get('category');
    this.router.navigate([this.backRoute], {
      queryParams:categoryId ? {category: categoryId} : {}
    });
  }
}
