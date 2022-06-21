import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.sass']
})
export class BooksListComponent implements OnInit {

  displayedColumns: string[] = ["type", "iban", "description", "title", "select"]

  constructor() { }

  ngOnInit(): void {
  }

}
