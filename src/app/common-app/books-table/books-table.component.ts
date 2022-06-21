import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PagePaperBookDto } from 'src/api/models';
import { GetPaperBooksPageAction } from 'src/app/public/books/state/books.actions';
import { CheckBookQuantityAction } from 'src/app/public/borrowings/state/borrowings.actions';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.sass']
})
export class BooksTableComponent implements OnInit {

  dataSource = []

  @Input()
  displayedColumns = []

  @Select(state => state.books.booksPage)
  booksPage$: Observable<PagePaperBookDto>

  @Select(state => state.user.token)
  token$: Observable<string>

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetPaperBooksPageAction(0, 10))
    console.log(this.booksPage$)
  }

  changePage(event: PageEvent): void {
    this.store.dispatch(new GetPaperBooksPageAction(event.pageIndex, event.pageSize))
  }

  checkBookQuantity(isbn: string): void {
    this.store.dispatch(new CheckBookQuantityAction(isbn))
  }

}
