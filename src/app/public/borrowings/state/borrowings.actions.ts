export class GetBorrowingsPageAction {
  static readonly type = '[Borrowings] GetBorrowingsPageAction';
  constructor(public page: number, public size: number) { }
}

export class GetOvertimeBorrowingsAction {
  static readonly type = '[Borrowings] GetOvertimeBorrowingsAction';
  constructor() { }
}
