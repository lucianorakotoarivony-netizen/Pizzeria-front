import { Component, OnInit, inject } from '@angular/core';
import { Data } from '../../services/data';
import { RouterLink } from '@angular/router';
import { AriaryPipe } from '../../pipes/pipes.ariary';
@Component({
  selector: 'app-services-list',
  imports: [RouterLink, AriaryPipe],
  templateUrl: './services-list.html',
  styleUrl: './services-list.scss',
})
export class ServicesList implements OnInit{
  public dataService = inject(Data);
  ngOnInit(): void {
    this.dataService.loadServiceListData();
  }
}
