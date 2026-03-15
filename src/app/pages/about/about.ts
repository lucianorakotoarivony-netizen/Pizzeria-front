import { Component, OnInit, inject } from '@angular/core';
import { Data } from '../../services/data';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit{
  public dataService = inject(Data);
  ngOnInit(): void {
    this.dataService.loadAboutData();
  }
}
