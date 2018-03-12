import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book'; 


@Component({
  selector: 'app-book', 
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {
  allBooks: Book[];
  book: Book;
  constructor(private BookService: BookService) { }

  ngOnInit() {
    this.BookService.getBooks()
    .subscribe(allBooks => this.allBooks = allBooks);
  }

}
