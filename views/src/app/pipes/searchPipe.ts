import { Injectable, Pipe, PipeTransform } from '@angular/core';
import {TechComponent} from '../tech/tech.component';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
   if (!items) return [];
   return items.filter(it => it[field] == value);
 }
 static forRoot() {
  return {
      ngModule: SearchPipe,
      providers: [],
  };
}
}