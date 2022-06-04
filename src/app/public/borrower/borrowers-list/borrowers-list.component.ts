import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './borrowers-list.component.html',
  styleUrls: ['./borrowers-list.component.sass']
})
export class BorrowersListComponent implements OnInit {

  displayedColumns: string[] = ["firstName", "lastName", "libraryCardNumber", "viewBorrower"]

  constructor() { }

  ngOnInit(): void {
  }

}
