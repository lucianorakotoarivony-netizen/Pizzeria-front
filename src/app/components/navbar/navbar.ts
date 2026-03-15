import { Component, inject, OnInit } from '@angular/core';
import { Data } from '../../services/data';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit{
  public dataService=inject(Data);
  ngOnInit(): void {
    this.dataService.loadHomeData();
    this.dataService.loadProductListData();
    this.dataService.loadCategoryListData();
  }
}
