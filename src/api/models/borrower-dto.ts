/* tslint:disable */
/* eslint-disable */
export interface BorrowerDto {
  address?: string;
  confirmPassword?: string;
  email: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  libraryCardNumber?: string;
  maidenName?: string;
  militaryService?: boolean;
  password: string;
  roles?: Array<string>;
  sex?: 'MALE' | 'FEMALE';
}
