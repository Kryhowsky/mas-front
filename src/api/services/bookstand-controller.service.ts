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

import { BookstandDto } from '../models/bookstand-dto';
import { PageBookstandDto } from '../models/page-bookstand-dto';

@Injectable({
  providedIn: 'root',
})
export class BookstandControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getBookstandById
   */
  static readonly GetBookstandByIdPath = '/api/bookstands/{id}';

  /**
   * Returns Lane by given ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBookstandById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookstandById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BookstandDto>> {

    const rb = new RequestBuilder(this.rootUrl, BookstandControllerService.GetBookstandByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BookstandDto>;
      })
    );
  }

  /**
   * Returns Lane by given ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBookstandById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookstandById(params: {
    id: number;
  }): Observable<BookstandDto> {

    return this.getBookstandById$Response(params).pipe(
      map((r: StrictHttpResponse<BookstandDto>) => r.body as BookstandDto)
    );
  }

  /**
   * Path part for operation updateBookstand
   */
  static readonly UpdateBookstandPath = '/api/bookstands/{id}';

  /**
   * Allows to update Bookstand specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBookstand()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBookstand$Response(params: {
    id: number;
    body: BookstandDto
  }): Observable<StrictHttpResponse<BookstandDto>> {

    const rb = new RequestBuilder(this.rootUrl, BookstandControllerService.UpdateBookstandPath, 'put');
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
        return r as StrictHttpResponse<BookstandDto>;
      })
    );
  }

  /**
   * Allows to update Bookstand specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateBookstand$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBookstand(params: {
    id: number;
    body: BookstandDto
  }): Observable<BookstandDto> {

    return this.updateBookstand$Response(params).pipe(
      map((r: StrictHttpResponse<BookstandDto>) => r.body as BookstandDto)
    );
  }

  /**
   * Path part for operation deleteBookstandById
   */
  static readonly DeleteBookstandByIdPath = '/api/bookstands/{id}';

  /**
   * Allows to delete Boosktand specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBookstandById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBookstandById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BookstandControllerService.DeleteBookstandByIdPath, 'delete');
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
   * Allows to delete Boosktand specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBookstandById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBookstandById(params: {
    id: number;
  }): Observable<void> {

    return this.deleteBookstandById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getBookstandPage
   */
  static readonly GetBookstandPagePath = '/api/bookstands';

  /**
   * Returns page of Bookstand with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBookstandPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookstandPage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageBookstandDto>> {

    const rb = new RequestBuilder(this.rootUrl, BookstandControllerService.GetBookstandPagePath, 'get');
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
        return r as StrictHttpResponse<PageBookstandDto>;
      })
    );
  }

  /**
   * Returns page of Bookstand with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBookstandPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookstandPage(params: {
    page: number;
    size: number;
  }): Observable<PageBookstandDto> {

    return this.getBookstandPage$Response(params).pipe(
      map((r: StrictHttpResponse<PageBookstandDto>) => r.body as PageBookstandDto)
    );
  }

  /**
   * Path part for operation saveBookstand
   */
  static readonly SaveBookstandPath = '/api/bookstands';

  /**
   * Allows to add new Bookstand.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveBookstand()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBookstand$Response(params: {
    body: BookstandDto
  }): Observable<StrictHttpResponse<BookstandDto>> {

    const rb = new RequestBuilder(this.rootUrl, BookstandControllerService.SaveBookstandPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BookstandDto>;
      })
    );
  }

  /**
   * Allows to add new Bookstand.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveBookstand$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBookstand(params: {
    body: BookstandDto
  }): Observable<BookstandDto> {

    return this.saveBookstand$Response(params).pipe(
      map((r: StrictHttpResponse<BookstandDto>) => r.body as BookstandDto)
    );
  }

}
