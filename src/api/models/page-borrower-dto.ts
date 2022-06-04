/* tslint:disable */
/* eslint-disable */
import { BorrowerDto } from './borrower-dto';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageBorrowerDto {
  content?: Array<BorrowerDto>;
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
