/* tslint:disable */
/* eslint-disable */
import { BorrowingDto } from './borrowing-dto';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageBorrowingDto {
  content?: Array<BorrowingDto>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
