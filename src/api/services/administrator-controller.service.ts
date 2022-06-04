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

import { AdministratorDto } from '../models/administrator-dto';
import { PageAdministratorDto } from '../models/page-administrator-dto';

@Injectable({
  providedIn: 'root',
})
export class AdministratorControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAdministratorById
   */
  static readonly GetAdministratorByIdPath = '/api/administrators/{id}';

  /**
   * Returns administrator by given ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdministratorById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdministratorById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<AdministratorDto>> {

    const rb = new RequestBuilder(this.rootUrl, AdministratorControllerService.GetAdministratorByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdministratorDto>;
      })
    );
  }

  /**
   * Returns administrator by given ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdministratorById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdministratorById(params: {
    id: number;
  }): Observable<AdministratorDto> {

    return this.getAdministratorById$Response(params).pipe(
      map((r: StrictHttpResponse<AdministratorDto>) => r.body as AdministratorDto)
    );
  }

  /**
   * Path part for operation updateAdministrator
   */
  static readonly UpdateAdministratorPath = '/api/administrators/{id}';

  /**
   * Allows to update administrator specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAdministrator()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAdministrator$Response(params: {
    id: number;
    body: AdministratorDto
  }): Observable<StrictHttpResponse<AdministratorDto>> {

    const rb = new RequestBuilder(this.rootUrl, AdministratorControllerService.UpdateAdministratorPath, 'put');
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
        return r as StrictHttpResponse<AdministratorDto>;
      })
    );
  }

  /**
   * Allows to update administrator specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAdministrator$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAdministrator(params: {
    id: number;
    body: AdministratorDto
  }): Observable<AdministratorDto> {

    return this.updateAdministrator$Response(params).pipe(
      map((r: StrictHttpResponse<AdministratorDto>) => r.body as AdministratorDto)
    );
  }

  /**
   * Path part for operation deleteAdministratorById
   */
  static readonly DeleteAdministratorByIdPath = '/api/administrators/{id}';

  /**
   * Allows to delete administrator specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAdministratorById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAdministratorById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdministratorControllerService.DeleteAdministratorByIdPath, 'delete');
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
   * Allows to delete administrator specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAdministratorById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAdministratorById(params: {
    id: number;
  }): Observable<void> {

    return this.deleteAdministratorById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAdministratorPage
   */
  static readonly GetAdministratorPagePath = '/api/administrators';

  /**
   * Returns page of Administrators with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdministratorPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdministratorPage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageAdministratorDto>> {

    const rb = new RequestBuilder(this.rootUrl, AdministratorControllerService.GetAdministratorPagePath, 'get');
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
        return r as StrictHttpResponse<PageAdministratorDto>;
      })
    );
  }

  /**
   * Returns page of Administrators with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdministratorPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdministratorPage(params: {
    page: number;
    size: number;
  }): Observable<PageAdministratorDto> {

    return this.getAdministratorPage$Response(params).pipe(
      map((r: StrictHttpResponse<PageAdministratorDto>) => r.body as PageAdministratorDto)
    );
  }

  /**
   * Path part for operation saveAdministrator
   */
  static readonly SaveAdministratorPath = '/api/administrators';

  /**
   * Allows to add new Administrator.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAdministrator()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAdministrator$Response(params: {
    body: AdministratorDto
  }): Observable<StrictHttpResponse<AdministratorDto>> {

    const rb = new RequestBuilder(this.rootUrl, AdministratorControllerService.SaveAdministratorPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdministratorDto>;
      })
    );
  }

  /**
   * Allows to add new Administrator.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveAdministrator$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAdministrator(params: {
    body: AdministratorDto
  }): Observable<AdministratorDto> {

    return this.saveAdministrator$Response(params).pipe(
      map((r: StrictHttpResponse<AdministratorDto>) => r.body as AdministratorDto)
    );
  }

}
