/* tslint:disable */
/* eslint-disable */
export interface AuthorDto {
  confirmPassword?: string;
  email: string;
  firstName: string;
  id?: number;
  lastName: string;
  password: string;
  pseudonym: string;
  roles?: Array<string>;
  sex?: 'MALE' | 'FEMALE';
}
