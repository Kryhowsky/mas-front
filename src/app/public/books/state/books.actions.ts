export class GetPaperBooksPageAction {
  static readonly type = '[Books] GetPaperBooksPageAction';
  constructor(public page: number, public size: number) { }
}