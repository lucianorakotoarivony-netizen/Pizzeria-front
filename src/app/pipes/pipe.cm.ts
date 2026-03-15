import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"cm",
})
export class cmPipe implements PipeTransform {
    transform(value: number | null | undefined):string {
        const valueStr = value?.toString();
        const formatted = valueStr?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return `${formatted} cm`;
    }
}