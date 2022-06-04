import { BorrowerDto } from "src/api/models";

export class GetBorrowersPageAction {
  static readonly type = '[Borrower] GetBorrowersPageAction';
  constructor(public page: number, public size: number) { }
}

export class DeleteBorrowerByIdAction {
  static readonly type = '[Borrower] DeleteBorrowerByIdAction';
  constructor(public borrowerId: number) { }
}

export class CreateBorrowerAction {
  static readonly type = '[Borrower] CreateBorrowerAction';
  constructor(public borrower: BorrowerDto) { }
}

export class EditBorrowerAction {
  static readonly type = '[Borrower] EditBorrowerAction';
  constructor(public borrowerId: number, public borrower: BorrowerDto) { }
}

export class GetBorrowerByIdAction {
  static readonly type = '[Borrower] GetBorrowerByIdAction';
  constructor(public borrowerId: number) { }
}

export class ClearBorrowerAction {
  static readonly type = '[Borrower] ClearBorrowerAction';
}
