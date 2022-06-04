/* tslint:disable */
/* eslint-disable */
export interface WorkerDto {
  address: string;
  confirmPassword?: string;
  email: string;
  firstName: string;
  id?: number;
  lastName: string;
  password: string;
  position?: 'HELPER' | 'LIBRARIAN' | 'SENIOR_LIBRARIAN';
  roles?: Array<string>;
  sex?: 'MALE' | 'FEMALE';
}
