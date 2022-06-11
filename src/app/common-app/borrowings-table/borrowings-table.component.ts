import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PageBorrowingDto } from 'src/api/models';
import { GetBorrowingsPageAction } from 'src/app/public/borrowings/state/borrowings.actions';

@Component({
  selector: 'app-borrowings-table',
  templateUrl: './borrowings-table.component.html',
  styleUrls: ['./borrowings-table.component.sass']
})
export class BorrowingsTableComponent implements OnInit {

  dataSource = []

  @Input()
  displayedColumns = []

  @Select(state => state.borrowings.borrowingsPage)
  borrowingsPage$: Observable<PageBorrowingDto>

  @Select(state => state.user.token)
  token$: Observable<string>

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetBorrowingsPageAction(0, 10))
  }

  changePage(event: PageEvent): void {
    this.store.dispatch(new GetBorrowingsPageAction(event.pageIndex, event.pageSize))
  }

}
