/* tslint:disable */
/* eslint-disable */
import { BorrowerDto } from './borrower-dto';
import { BorrowingDto } from './borrowing-dto';
export interface BorrowerWithBorrowingsDto {
  address?: string;
  borrower?: BorrowerDto;
  borrowings?: Array<BorrowingDto>;
  email?: string;
  firstName?: string;
  lastName?: string;
  libraryCardNumber?: string;
  sex?: 'MALE' | 'FEMALE';
}
