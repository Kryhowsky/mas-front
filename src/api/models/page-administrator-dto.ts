/* tslint:disable */
/* eslint-disable */
import { AdministratorDto } from './administrator-dto';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageAdministratorDto {
  content?: Array<AdministratorDto>;
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
