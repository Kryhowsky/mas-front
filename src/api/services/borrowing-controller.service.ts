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

import { BorrowingDto } from '../models/borrowing-dto';
import { PageBorrowingDto } from '../models/page-borrowing-dto';

@Injectable({
  providedIn: 'root',
})
export class BorrowingControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getBorrowingPage
   */
  static readonly GetBorrowingPagePath = '/api/borrowings';

  /**
   * Returns page of Borrowings with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBorrowingPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBorrowingPage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageBorrowingDto>> {

    const rb = new RequestBuilder(this.rootUrl, BorrowingControllerService.GetBorrowingPagePath, 'get');
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
        return r as StrictHttpResponse<PageBorrowingDto>;
      })
    );
  }

  /**
   * Returns page of Borrowings with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBorrowingPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBorrowingPage(params: {
    page: number;
    size: number;
  }): Observable<PageBorrowingDto> {

    return this.getBorrowingPage$Response(params).pipe(
      map((r: StrictHttpResponse<PageBorrowingDto>) => r.body as PageBorrowingDto)
    );
  }

  /**
   * Path part for operation getOvertimeBorrowing
   */
  static readonly GetOvertimeBorrowingPath = '/api/borrowings/overtime';

  /**
   * Returns list of overtime Borrowings.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOvertimeBorrowing()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOvertimeBorrowing$Response(params?: {
  }): Observable<StrictHttpResponse<Array<BorrowingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BorrowingControllerService.GetOvertimeBorrowingPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BorrowingDto>>;
      })
    );
  }

  /**
   * Returns list of overtime Borrowings.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOvertimeBorrowing$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOvertimeBorrowing(params?: {
  }): Observable<Array<BorrowingDto>> {

    return this.getOvertimeBorrowing$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BorrowingDto>>) => r.body as Array<BorrowingDto>)
    );
  }

}
