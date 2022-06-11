/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BorrowerDto } from '../models/borrower-dto';
import { BorrowerWithBorrowingsDto } from '../models/borrower-with-borrowings-dto';
import { PageBorrowerDto } from '../models/page-borrower-dto';

@Injectable({
  providedIn: 'root',
})
export class BorrowerControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getBorrowerById
   */
  static readonly GetBorrowerByIdPath = '/api/borrowers/{id}';

  /**
   * Returns borrower by given ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBorrowerById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBorrowerById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BorrowerDto>> {

    const rb = new RequestBuilder(this.rootUrl, BorrowerControllerService.GetBorrowerByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BorrowerDto>;
      })
    );
  }

  /**
   * Returns borrower by given ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBorrowerById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBorrowerById(params: {
    id: number;
  }): Observable<BorrowerDto> {

    return this.getBorrowerById$Response(params).pipe(
      map((r: StrictHttpResponse<BorrowerDto>) => r.body as BorrowerDto)
    );
  }

  /**
   * Path part for operation updateBorrower
   */
  static readonly UpdateBorrowerPath = '/api/borrowers/{id}';

  /**
   * Allows to update borrower specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBorrower()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBorrower$Response(params: {
    id: number;
    body: BorrowerDto
  }): Observable<StrictHttpResponse<BorrowerDto>> {

    const rb = new RequestBuilder(this.rootUrl, BorrowerControllerService.UpdateBorrowerPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BorrowerDto>;
      })
    );
  }

  /**
   * Allows to update borrower specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateBorrower$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBorrower(params: {
    id: number;
    body: BorrowerDto
  }): Observable<BorrowerDto> {

    return this.updateBorrower$Response(params).pipe(
      map((r: StrictHttpResponse<BorrowerDto>) => r.body as BorrowerDto)
    );
  }

  /**
   * Path part for operation deleteBorrowerById
   */
  static readonly DeleteBorrowerByIdPath = '/api/borrowers/{id}';

  /**
   * Allows to delete Borrower specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBorrowerById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBorrowerById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BorrowerControllerService.DeleteBorrowerByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Allows to delete Borrower specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBorrowerById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBorrowerById(params: {
    id: number;
  }): Observable<void> {

    return this.deleteBorrowerById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getBorrowerPage
   */
  static readonly GetBorrowerPagePath = '/api/borrowers';

  /**
   * Returns page of Borrowers with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBorrowerPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBorrowerPage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageBorrowerDto>> {

    const rb = new RequestBuilder(this.rootUrl, BorrowerControllerService.GetBorrowerPagePath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PageBorrowerDto>;
      })
    );
  }

  /**
   * Returns page of Borrowers with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBorrowerPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBorrowerPage(params: {
    page: number;
    size: number;
  }): Observable<PageBorrowerDto> {

    return this.getBorrowerPage$Response(params).pipe(
      map((r: StrictHttpResponse<PageBorrowerDto>) => r.body as PageBorrowerDto)
    );
  }

  /**
   * Path part for operation saveBorrower
   */
  static readonly SaveBorrowerPath = '/api/borrowers';

  /**
   * Allows to add new Borrower.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveBorrower()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBorrower$Response(params: {
    body: BorrowerDto
  }): Observable<StrictHttpResponse<BorrowerDto>> {

    const rb = new RequestBuilder(this.rootUrl, BorrowerControllerService.SaveBorrowerPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BorrowerDto>;
      })
    );
  }

  /**
   * Allows to add new Borrower.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveBorrower$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBorrower(params: {
    body: BorrowerDto
  }): Observable<BorrowerDto> {

    return this.saveBorrower$Response(params).pipe(
      map((r: StrictHttpResponse<BorrowerDto>) => r.body as BorrowerDto)
    );
  }

  /**
   * Path part for operation getBorrowerWithBorrowingsById
   */
  static readonly GetBorrowerWithBorrowingsByIdPath = '/api/borrowers/{id}/borrowings';

  /**
   * Allows to get Borrower specified by ID with borrowings.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBorrowerWithBorrowingsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBorrowerWithBorrowingsById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BorrowerWithBorrowingsDto>> {

    const rb = new RequestBuilder(this.rootUrl, BorrowerControllerService.GetBorrowerWithBorrowingsByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BorrowerWithBorrowingsDto>;
      })
    );
  }

  /**
   * Allows to get Borrower specified by ID with borrowings.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBorrowerWithBorrowingsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBorrowerWithBorrowingsById(params: {
    id: number;
  }): Observable<BorrowerWithBorrowingsDto> {

    return this.getBorrowerWithBorrowingsById$Response(params).pipe(
      map((r: StrictHttpResponse<BorrowerWithBorrowingsDto>) => r.body as BorrowerWithBorrowingsDto)
    );
  }

}
