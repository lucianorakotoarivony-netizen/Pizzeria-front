import { Component, OnInit, inject } from '@angular/core';
import { Data } from '../../services/data';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit{
  public dataService = inject(Data);
  ngOnInit(): void {
    this.dataService.loadContactData();
  }
}
