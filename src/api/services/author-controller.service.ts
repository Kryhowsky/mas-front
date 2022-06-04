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

import { AuthorDto } from '../models/author-dto';
import { PageAuthorDto } from '../models/page-author-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthorControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAuthorById
   */
  static readonly GetAuthorByIdPath = '/api/authors/{id}';

  /**
   * Return Author by given ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAuthorById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuthorById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<AuthorDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorControllerService.GetAuthorByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthorDto>;
      })
    );
  }

  /**
   * Return Author by given ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAuthorById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuthorById(params: {
    id: number;
  }): Observable<AuthorDto> {

    return this.getAuthorById$Response(params).pipe(
      map((r: StrictHttpResponse<AuthorDto>) => r.body as AuthorDto)
    );
  }

  /**
   * Path part for operation updateAuthor
   */
  static readonly UpdateAuthorPath = '/api/authors/{id}';

  /**
   * Allows to update Author specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAuthor()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAuthor$Response(params: {
    id: number;
    body: AuthorDto
  }): Observable<StrictHttpResponse<AuthorDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorControllerService.UpdateAuthorPath, 'put');
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
        return r as StrictHttpResponse<AuthorDto>;
      })
    );
  }

  /**
   * Allows to update Author specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAuthor$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAuthor(params: {
    id: number;
    body: AuthorDto
  }): Observable<AuthorDto> {

    return this.updateAuthor$Response(params).pipe(
      map((r: StrictHttpResponse<AuthorDto>) => r.body as AuthorDto)
    );
  }

  /**
   * Path part for operation deleteAuthorById
   */
  static readonly DeleteAuthorByIdPath = '/api/authors/{id}';

  /**
   * Allows to delete Author specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAuthorById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAuthorById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorControllerService.DeleteAuthorByIdPath, 'delete');
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
   * Allows to delete Author specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAuthorById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAuthorById(params: {
    id: number;
  }): Observable<void> {

    return this.deleteAuthorById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAuthorPage
   */
  static readonly GetAuthorPagePath = '/api/authors';

  /**
   * Returns page of Authors with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAuthorPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuthorPage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageAuthorDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorControllerService.GetAuthorPagePath, 'get');
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
        return r as StrictHttpResponse<PageAuthorDto>;
      })
    );
  }

  /**
   * Returns page of Authors with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAuthorPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAuthorPage(params: {
    page: number;
    size: number;
  }): Observable<PageAuthorDto> {

    return this.getAuthorPage$Response(params).pipe(
      map((r: StrictHttpResponse<PageAuthorDto>) => r.body as PageAuthorDto)
    );
  }

  /**
   * Path part for operation saveAuthor
   */
  static readonly SaveAuthorPath = '/api/authors';

  /**
   * Allows to add new Author.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAuthor()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAuthor$Response(params: {
    body: AuthorDto
  }): Observable<StrictHttpResponse<AuthorDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthorControllerService.SaveAuthorPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthorDto>;
      })
    );
  }

  /**
   * Allows to add new Author.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveAuthor$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAuthor(params: {
    body: AuthorDto
  }): Observable<AuthorDto> {

    return this.saveAuthor$Response(params).pipe(
      map((r: StrictHttpResponse<AuthorDto>) => r.body as AuthorDto)
    );
  }

}
