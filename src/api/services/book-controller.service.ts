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

import { BookDto } from '../models/book-dto';
import { PageBookDto } from '../models/page-book-dto';

@Injectable({
  providedIn: 'root',
})
export class BookControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getPaperBookPage1
   */
  static readonly GetPaperBookPage1Path = '/api/books';

  /**
   * Returns page of Books with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPaperBookPage1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaperBookPage1$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageBookDto>> {

    const rb = new RequestBuilder(this.rootUrl, BookControllerService.GetPaperBookPage1Path, 'get');
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
        return r as StrictHttpResponse<PageBookDto>;
      })
    );
  }

  /**
   * Returns page of Books with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPaperBookPage1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaperBookPage1(params: {
    page: number;
    size: number;
  }): Observable<PageBookDto> {

    return this.getPaperBookPage1$Response(params).pipe(
      map((r: StrictHttpResponse<PageBookDto>) => r.body as PageBookDto)
    );
  }

  /**
   * Path part for operation getBookByIban
   */
  static readonly GetBookByIbanPath = '/api/books/{iban}';

  /**
   * Returns Book by given IBAN.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBookByIban()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookByIban$Response(params: {
    iban: string;
  }): Observable<StrictHttpResponse<BookDto>> {

    const rb = new RequestBuilder(this.rootUrl, BookControllerService.GetBookByIbanPath, 'get');
    if (params) {
      rb.path('iban', params.iban, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BookDto>;
      })
    );
  }

  /**
   * Returns Book by given IBAN.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBookByIban$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookByIban(params: {
    iban: string;
  }): Observable<BookDto> {

    return this.getBookByIban$Response(params).pipe(
      map((r: StrictHttpResponse<BookDto>) => r.body as BookDto)
    );
  }

}
