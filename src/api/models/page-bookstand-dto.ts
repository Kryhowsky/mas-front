/* tslint:disable */
/* eslint-disable */
import { BookstandDto } from './bookstand-dto';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageBookstandDto {
  content?: Array<BookstandDto>;
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
