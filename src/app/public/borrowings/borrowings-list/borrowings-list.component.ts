import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrowings-list',
  templateUrl: './borrowings-list.component.html',
  styleUrls: ['./borrowings-list.component.sass']
})
export class BorrowingsListComponent implements OnInit {

  displayedColumns: string[] = ["dateOfBorrowing", "dateOfReturn", "bookTitle", "bookDescription", "bookAuthor"]

  constructor() { }

  ngOnInit(): void {
  }

}
