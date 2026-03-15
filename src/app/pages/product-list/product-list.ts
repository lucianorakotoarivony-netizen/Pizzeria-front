import { Component, inject, OnInit, signal } from '@angular/core';
import { Data } from '../../services/data';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AriaryPipe } from '../../pipes/pipes.ariary';
import { cmPipe } from '../../pipes/pipe.cm';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, AriaryPipe, cmPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  public dataService = inject(Data);
  public route = inject(ActivatedRoute);
  categoryId = signal<string | null>(null);

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('category');
      this.categoryId.set(id);
      this.dataService.loadProductListData(id ?? undefined);
    });
  }
}
