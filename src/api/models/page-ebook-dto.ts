/* tslint:disable */
/* eslint-disable */
import { EbookDto } from './ebook-dto';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageEbookDto {
  content?: Array<EbookDto>;
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
