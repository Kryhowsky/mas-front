import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { BorrowingDto, PageBorrowingDto } from 'src/api/models';
import { BorrowingControllerService } from 'src/api/services';
import { GetBorrowingsPageAction, GetOvertimeBorrowingsAction } from './borrowings.actions';

export class BorrowingsStateModel {
  public borrowingsPage: PageBorrowingDto;
  public pageSize: number;
  public dataSource: BorrowingDto[]
}

const defaults = {
  borrowingsPage: null,
  pageSize: 10,
  dataSource: null
};

@State<BorrowingsStateModel>({
  name: 'borrowings',
  defaults
})
@Injectable()
export class BorrowingsState {

  constructor(private readonly borrowingsService: BorrowingControllerService) {}

  @Action(GetBorrowingsPageAction)
  getBorrowersPage({ patchState }: StateContext<BorrowingsStateModel>, { page, size }: GetBorrowingsPageAction) {
    return this.borrowingsService.getBorrowingPage({ page, size }).pipe(
      tap(response => patchState({ borrowingsPage: response, pageSize: size }))
    )
  }

  @Action(GetOvertimeBorrowingsAction)
  getOvertimeBorrowings({ patchState }: StateContext<BorrowingsStateModel>, {}: GetOvertimeBorrowingsAction) {
    return this.borrowingsService.getOvertimeBorrowing({}).pipe(
      tap(response => patchState({dataSource: response}))
    )
  }
}
