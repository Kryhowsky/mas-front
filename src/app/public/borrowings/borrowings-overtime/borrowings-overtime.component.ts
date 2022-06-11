import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { BorrowingDto } from 'src/api/models';
import { BorrowingControllerService } from 'src/api/services';
import { GetOvertimeBorrowingsAction } from '../state/borrowings.actions';

const ELEMENT_DATA: BorrowingDto[] = []

@Component({
  selector: 'app-borrowings-overtime',
  templateUrl: './borrowings-overtime.component.html',
  styleUrls: ['./borrowings-overtime.component.sass']
})
export class BorrowingsOvertimeComponent implements OnInit {

  dataSource = []
  displayedColumns: string[] = ["dateOfBorrowing", "dateOfReturn", "bookTitle", "bookDescription", "bookAuthor"]

  @Select(state => state.borrowings.dataSource)
  dataSource$: Observable<BorrowingDto[]>

  constructor(private readonly store: Store, private readonly borrowingService: BorrowingControllerService) { }

  ngOnInit(): void {
    this.store.dispatch(new GetOvertimeBorrowingsAction())
  }

}
