/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { PaperBookDto } from './paper-book-dto';
import { Sort } from './sort';
export interface PagePaperBookDto {
  content?: Array<PaperBookDto>;
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
