/* tslint:disable */
/* eslint-disable */
import { AuthorDto } from './author-dto';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageAuthorDto {
  content?: Array<AuthorDto>;
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
