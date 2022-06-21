import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { PagePaperBookDto, PaperBookDto } from 'src/api/models';
import { PaperBookControllerService } from 'src/api/services';
import { GetPaperBooksPageAction } from './books.actions';

export class BooksStateModel {
  public booksPage: PagePaperBookDto;
  public pageSize: number;
  public dataSource: PaperBookDto[]
}

const defaults = {
  booksPage: null,
  pageSize: 10,
  dataSource: null
};

@State<BooksStateModel>({
  name: 'books',
  defaults
})
@Injectable()
export class BooksState {

  constructor(private readonly paperBooksService: PaperBookControllerService) {}

  @Action(GetPaperBooksPageAction)
  getBorrowersPage({ patchState }: StateContext<BooksStateModel>, { page, size }: GetPaperBooksPageAction) {
    return this.paperBooksService.getPaperBookPage({ page, size }).pipe(
      tap(response => patchState({ booksPage: response, pageSize: size }))
    )
  }
}
