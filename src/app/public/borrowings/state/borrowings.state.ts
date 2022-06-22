import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Navigate } from '@ngxs/router-plugin';
import { State, Action, StateContext } from '@ngxs/store';
import { catchError, Observable, tap } from 'rxjs';
import { BorrowingDto, PageBorrowingDto } from 'src/api/models';
import { BorrowingControllerService, PaperBookControllerService } from 'src/api/services';
import { AddBorrowingAction, CheckActiveBorrowingsByLibraryCardNumberAction, CheckBookQuantityAction, GetBorrowingsPageAction, GetOvertimeBorrowingsAction } from './borrowings.actions';

export class BorrowingsStateModel {
  public borrowingsPage: PageBorrowingDto;
  public pageSize: number;
  public dataSource: BorrowingDto[];
  public libraryCardNumber: string;
  public isbn: string;
}

const defaults = {
  borrowingsPage: null,
  pageSize: 10,
  dataSource: null,
  libraryCardNumber: null,
  isbn: null
};

@State<BorrowingsStateModel>({
  name: 'borrowings',
  defaults
})
@Injectable()
export class BorrowingsState {

  constructor(private readonly borrowingsService: BorrowingControllerService, private readonly paperBookService: PaperBookControllerService, private readonly matSnackBar: MatSnackBar) {}

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

  @Action(CheckActiveBorrowingsByLibraryCardNumberAction)
  checkActiveBorrowingsByLibraryCardNumber({ patchState, dispatch }: StateContext<BorrowingsStateModel>, { libraryCardNumber }: CheckActiveBorrowingsByLibraryCardNumberAction) {
    return this.borrowingsService.checkNumberOfActiveBorrowingsByLibraryCardNumber({libraryCardNumber}).pipe(
      tap(response => {
        patchState({libraryCardNumber})
        dispatch(new Navigate(["/books/list"]))
      }), 
      catchError((err, caught) => {
        dispatch(new Navigate(["/borrowings/library-card"]))
        throw err
      })
    )
  }

  @Action(CheckBookQuantityAction)
  checkBookQuantity({dispatch, getState }: StateContext<BorrowingsStateModel>, { isbn }: CheckBookQuantityAction) {
    return this.paperBookService.getPaperBookQuantityByIban({iban: isbn}).pipe(
      tap(response => {
        dispatch(new AddBorrowingAction({libraryCardNumber: getState().libraryCardNumber, isbn: isbn}))
      }), 
      catchError((err, caught) => {
        dispatch(new Navigate(["/borrowings/library-card"]))
        throw err
      })
    )
  }

  @Action(AddBorrowingAction)
  addBorrowing({ patchState, dispatch }: StateContext<BorrowingsStateModel>, { borrowingDto }: AddBorrowingAction) {
    return this.borrowingsService.addBorrowing({body: borrowingDto}).pipe(
      tap(response => {
        patchState({isbn: null, libraryCardNumber: null})
        this.matSnackBar.open("Borrowing saved!", "X", {duration: 5000, verticalPosition: "top"})
        dispatch(new Navigate(["/"]))
      }), 
      catchError((err, caught) => {
        dispatch(new Navigate(["/"]))
        throw err
      })
    )
  }
}
