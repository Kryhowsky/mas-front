/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { PublishingHouseDto } from './publishing-house-dto';
import { Sort } from './sort';
export interface PagePublishingHouseDto {
  content?: Array<PublishingHouseDto>;
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
