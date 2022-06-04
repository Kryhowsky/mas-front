import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PageBorrowerDto } from 'src/api/models';
import { DeleteBorrowerByIdAction, GetBorrowersPageAction } from 'src/app/public/borrower/state/state/borrower.actions';

@Component({
  selector: 'app-borrowers-table',
  templateUrl: './borrowers-table.component.html',
  styleUrls: ['./borrowers-table.component.sass']
})
export class BorrowersTableComponent implements OnInit {

  dataSource = []

  @Input()
  displayedColumns = []

  @Select(state => state.borrower.borrowerPage)
  borrowerPage$: Observable<PageBorrowerDto>

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetBorrowersPageAction(0, 10))
  }

  changePage(event: PageEvent): void {
    this.store.dispatch(new GetBorrowersPageAction(event.pageIndex, event.pageSize))
  }

  deleteBorrowerById(borrowerId: number): void {
    this.store.dispatch(new DeleteBorrowerByIdAction(borrowerId))
  }

}
