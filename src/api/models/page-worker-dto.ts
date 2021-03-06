/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
import { WorkerDto } from './worker-dto';
export interface PageWorkerDto {
  content?: Array<WorkerDto>;
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
