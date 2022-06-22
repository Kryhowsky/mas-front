/* tslint:disable */
/* eslint-disable */
export interface AdministratorDto {
  address?: string;
  confirmPassword?: string;
  email: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  maidenName?: string;
  militaryService?: boolean;
  password: string;
  roles?: Array<string>;
  sex?: 'MALE' | 'FEMALE';
}
