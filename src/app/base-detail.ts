import { inject, computed, OnInit, Signal, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Data } from "./services/data";

@Injectable()
export abstract class BaseDetail<T extends {id: T["id"]}> implements OnInit{
    public dataService=inject(Data);
    public route=inject(ActivatedRoute);
    public router=inject(Router);
    abstract listData: Signal<T[]>;
    abstract detailData: Signal<T | null>;
    abstract backRoute:string;
    abstract loadDetail(id:string): void;
    abstract loadList(): void;

    ngOnInit(): void {
        this.loadList();
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) this.loadDetail(id);
        });
    }

    currentIndex = computed(() => {
        const list = this.listData();
        const currentId = this.detailData()?.id;
        return list.findIndex(item => item.id === currentId);
    });

    prev = computed(() => {
        const list = this.listData();
        const index = this.currentIndex();
        if (list.length === 0 || index === -1) return null;
        const prevIndex = (index - 1 + list.length) % list.length; 
        return list[prevIndex];

    });

    next = computed(() => {
        const list = this.listData();
        const index = this.currentIndex();
        if (list.length ===0 || index === -1) return null;
        const nextIndex = (index + 1) % list.length; 
        return list[nextIndex];
    });

    goBack(): void{
        this.router.navigate([this.backRoute]);
 }
    retryLoad(): void{
        this.loadList();
        const id = this.route.snapshot.paramMap.get('id');
        if (id) this.loadDetail(id);
 }
}