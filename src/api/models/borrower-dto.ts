/* tslint:disable */
/* eslint-disable */
export interface BorrowerDto {
  address: string;
  confirmPassword?: string;
  email: string;
  firstName: string;
  id?: number;
  lastName: string;
  libraryCardNumber: string;
  password: string;
  roles?: Array<string>;
  sex?: 'MALE' | 'FEMALE';
}
