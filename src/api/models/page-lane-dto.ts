/* tslint:disable */
/* eslint-disable */
import { LaneDto } from './lane-dto';
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
export interface PageLaneDto {
  content?: Array<LaneDto>;
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
