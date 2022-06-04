import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { BorrowerDto, PageBorrowerDto } from 'src/api/models';
import { BorrowerControllerService } from 'src/api/services';
import { ClearBorrowerAction, CreateBorrowerAction, DeleteBorrowerByIdAction, EditBorrowerAction, GetBorrowerByIdAction, GetBorrowersPageAction } from './borrower.actions';

export class BorrowerStateModel {
  public borrowerPage: PageBorrowerDto;
  public pageSize: number;
  public borrower: BorrowerDto;
}

const defaults = {
  borrowerPage: null,
  pageSize: 10,
  borrower: null
};

@State<BorrowerStateModel>({
  name: 'borrower',
  defaults
})
@Injectable()
export class BorrowerState {

  constructor(private readonly borrowerService: BorrowerControllerService) {}

  @Action(GetBorrowersPageAction)
  getBorrowersPage({ patchState }: StateContext<BorrowerStateModel>, { page, size }: GetBorrowersPageAction) {
    return this.borrowerService.getBorrowerPage({ page, size }).pipe(
      tap(response => patchState({ borrowerPage: response, pageSize: size }))
    )
  }

  @Action(DeleteBorrowerByIdAction)
  deleteBorrowerById({ dispatch, getState }: StateContext<BorrowerStateModel>, { borrowerId }: DeleteBorrowerByIdAction) {
    return this.borrowerService.deleteBorrowerById({ id: borrowerId }).pipe(
      tap(response => {
        const size = getState().pageSize;
        dispatch(new GetBorrowersPageAction(0, size))
      })
    )
  }

  @Action(CreateBorrowerAction)
  createProduct({ dispatch }: StateContext<BorrowerStateModel>, { borrower }: CreateBorrowerAction) {
    return this.borrowerService.saveBorrower({body: borrower}).pipe(
      tap(response => dispatch(new Navigate(["/"])))
    )
  }

  @Action(EditBorrowerAction)
  editProduct({ dispatch }: StateContext<BorrowerStateModel>, { borrowerId, borrower }: EditBorrowerAction) {
    return this.borrowerService.updateBorrower({id: borrowerId, body: borrower}).pipe(
      tap(response => dispatch(new Navigate(["/"])))
    )
  }

  @Action(GetBorrowerByIdAction)
  getProductById({ patchState }: StateContext<BorrowerStateModel>, { borrowerId }: GetBorrowerByIdAction) {
    return this.borrowerService.getBorrowerById({id: borrowerId}).pipe(
      tap(response => patchState({borrower: response}))
    )
  }

  @Action(ClearBorrowerAction)
  clearProduct({ patchState }: StateContext<BorrowerStateModel>) {
    patchState({borrower: null})
  }

}
