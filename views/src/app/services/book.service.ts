import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Book} from '../models/book';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private http:Http) { }
   //retrieving books
   getBooks(){
    return this.http.get('http://localhost:3000/api/books')
    .map(res => res.json());
  }
  addBook(newBook){
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/book', newBook, {headers:headers})
        .map(res => res.json());
  }
  deleteBook(id){
    return this.http.delete('http://localhost:3000/api/book/'+id)
      .map(res => res.json());
  }

}
 