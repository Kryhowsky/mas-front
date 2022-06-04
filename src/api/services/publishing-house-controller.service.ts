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

import { PagePublishingHouseDto } from '../models/page-publishing-house-dto';
import { PublishingHouseDto } from '../models/publishing-house-dto';

@Injectable({
  providedIn: 'root',
})
export class PublishingHouseControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getPublishingHouseById
   */
  static readonly GetPublishingHouseByIdPath = '/api/publishing-houses/{id}';

  /**
   * Returns Publishing house by given ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPublishingHouseById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPublishingHouseById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<PublishingHouseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PublishingHouseControllerService.GetPublishingHouseByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PublishingHouseDto>;
      })
    );
  }

  /**
   * Returns Publishing house by given ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPublishingHouseById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPublishingHouseById(params: {
    id: number;
  }): Observable<PublishingHouseDto> {

    return this.getPublishingHouseById$Response(params).pipe(
      map((r: StrictHttpResponse<PublishingHouseDto>) => r.body as PublishingHouseDto)
    );
  }

  /**
   * Path part for operation updatePublishingHouse
   */
  static readonly UpdatePublishingHousePath = '/api/publishing-houses/{id}';

  /**
   * Allows to update Publishing house specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePublishingHouse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePublishingHouse$Response(params: {
    id: number;
    body: PublishingHouseDto
  }): Observable<StrictHttpResponse<PublishingHouseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PublishingHouseControllerService.UpdatePublishingHousePath, 'put');
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
        return r as StrictHttpResponse<PublishingHouseDto>;
      })
    );
  }

  /**
   * Allows to update Publishing house specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePublishingHouse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePublishingHouse(params: {
    id: number;
    body: PublishingHouseDto
  }): Observable<PublishingHouseDto> {

    return this.updatePublishingHouse$Response(params).pipe(
      map((r: StrictHttpResponse<PublishingHouseDto>) => r.body as PublishingHouseDto)
    );
  }

  /**
   * Path part for operation deletePublishingHouseById
   */
  static readonly DeletePublishingHouseByIdPath = '/api/publishing-houses/{id}';

  /**
   * Allows to delete Publishing house specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePublishingHouseById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePublishingHouseById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PublishingHouseControllerService.DeletePublishingHouseByIdPath, 'delete');
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
   * Allows to delete Publishing house specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePublishingHouseById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePublishingHouseById(params: {
    id: number;
  }): Observable<void> {

    return this.deletePublishingHouseById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPublishingHousePage
   */
  static readonly GetPublishingHousePagePath = '/api/publishing-houses';

  /**
   * Returns page of Publishing house with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPublishingHousePage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPublishingHousePage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PagePublishingHouseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PublishingHouseControllerService.GetPublishingHousePagePath, 'get');
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
        return r as StrictHttpResponse<PagePublishingHouseDto>;
      })
    );
  }

  /**
   * Returns page of Publishing house with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPublishingHousePage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPublishingHousePage(params: {
    page: number;
    size: number;
  }): Observable<PagePublishingHouseDto> {

    return this.getPublishingHousePage$Response(params).pipe(
      map((r: StrictHttpResponse<PagePublishingHouseDto>) => r.body as PagePublishingHouseDto)
    );
  }

  /**
   * Path part for operation savePublishingHouse
   */
  static readonly SavePublishingHousePath = '/api/publishing-houses';

  /**
   * Allows to add new Publishing house.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePublishingHouse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePublishingHouse$Response(params: {
    body: PublishingHouseDto
  }): Observable<StrictHttpResponse<PublishingHouseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PublishingHouseControllerService.SavePublishingHousePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PublishingHouseDto>;
      })
    );
  }

  /**
   * Allows to add new Publishing house.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `savePublishingHouse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePublishingHouse(params: {
    body: PublishingHouseDto
  }): Observable<PublishingHouseDto> {

    return this.savePublishingHouse$Response(params).pipe(
      map((r: StrictHttpResponse<PublishingHouseDto>) => r.body as PublishingHouseDto)
    );
  }

}
