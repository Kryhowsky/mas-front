/* tslint:disable */
/* eslint-disable */
export interface AdministratorDto {
  address: string;
  confirmPassword?: string;
  email: string;
  firstName: string;
  id?: number;
  lastName: string;
  password: string;
  roles?: Array<string>;
  sex?: 'MALE' | 'FEMALE';
}
