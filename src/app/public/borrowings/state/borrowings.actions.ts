import { NewBorrowingDto } from "src/api/models";

export class GetBorrowingsPageAction {
  static readonly type = '[Borrowings] GetBorrowingsPageAction';
  constructor(public page: number, public size: number) { }
}

export class GetOvertimeBorrowingsAction {
  static readonly type = '[Borrowings] GetOvertimeBorrowingsAction';
  constructor() { }
}

export class CheckActiveBorrowingsByLibraryCardNumberAction {
  static readonly type = '[Borrowings] CheckActiveBorrowingsByLibraryCardNumberAction';
  constructor(public libraryCardNumber: string) {}
}

export class CheckBookQuantityAction {
  static readonly type = '[Borrowings] CheckBookQuantityAction';
  constructor(public isbn: string) {}
}

export class AddBorrowingAction {
  static readonly type = '[Borrowings] AddBorrowingAction';
  constructor(public borrowingDto: NewBorrowingDto) {}
}
