import { Component } from '@angular/core';
import { BaseDetail } from '../../base-detail';
import { Service } from '../../models/site.models';
import { AriaryPipe } from '../../pipes/pipes.ariary';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-service-detail',
  imports: [AriaryPipe, RouterLink],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.scss',
})
export class ServiceDetail extends BaseDetail<Service>{
  listData = this.dataService.serviceList;
  detailData = this.dataService.serviceDetail;
  backRoute = '/services';
  loadList(): void {
    this.dataService.loadServiceListData();
  }
  loadDetail(id: string): void {
    this.dataService.loadServiceDetailData(id);
  }
}
