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

import { LaneDto } from '../models/lane-dto';
import { PageLaneDto } from '../models/page-lane-dto';

@Injectable({
  providedIn: 'root',
})
export class LaneControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getLaneById
   */
  static readonly GetLaneByIdPath = '/api/lanes/{id}';

  /**
   * Returns Lane by given ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLaneById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLaneById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<LaneDto>> {

    const rb = new RequestBuilder(this.rootUrl, LaneControllerService.GetLaneByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LaneDto>;
      })
    );
  }

  /**
   * Returns Lane by given ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getLaneById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLaneById(params: {
    id: number;
  }): Observable<LaneDto> {

    return this.getLaneById$Response(params).pipe(
      map((r: StrictHttpResponse<LaneDto>) => r.body as LaneDto)
    );
  }

  /**
   * Path part for operation updateLane
   */
  static readonly UpdateLanePath = '/api/lanes/{id}';

  /**
   * Allows to update Lane specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLane()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLane$Response(params: {
    id: number;
    body: LaneDto
  }): Observable<StrictHttpResponse<LaneDto>> {

    const rb = new RequestBuilder(this.rootUrl, LaneControllerService.UpdateLanePath, 'put');
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
        return r as StrictHttpResponse<LaneDto>;
      })
    );
  }

  /**
   * Allows to update Lane specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateLane$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLane(params: {
    id: number;
    body: LaneDto
  }): Observable<LaneDto> {

    return this.updateLane$Response(params).pipe(
      map((r: StrictHttpResponse<LaneDto>) => r.body as LaneDto)
    );
  }

  /**
   * Path part for operation deleteLaneById
   */
  static readonly DeleteLaneByIdPath = '/api/lanes/{id}';

  /**
   * Allows to delete Paperbook specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLaneById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLaneById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LaneControllerService.DeleteLaneByIdPath, 'delete');
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
   * Allows to delete Paperbook specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteLaneById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLaneById(params: {
    id: number;
  }): Observable<void> {

    return this.deleteLaneById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getLanePage
   */
  static readonly GetLanePagePath = '/api/lanes';

  /**
   * Returns page of Lane with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLanePage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLanePage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageLaneDto>> {

    const rb = new RequestBuilder(this.rootUrl, LaneControllerService.GetLanePagePath, 'get');
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
        return r as StrictHttpResponse<PageLaneDto>;
      })
    );
  }

  /**
   * Returns page of Lane with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getLanePage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLanePage(params: {
    page: number;
    size: number;
  }): Observable<PageLaneDto> {

    return this.getLanePage$Response(params).pipe(
      map((r: StrictHttpResponse<PageLaneDto>) => r.body as PageLaneDto)
    );
  }

  /**
   * Path part for operation saveLane
   */
  static readonly SaveLanePath = '/api/lanes';

  /**
   * Allows to add new Lane.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveLane()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveLane$Response(params: {
    body: LaneDto
  }): Observable<StrictHttpResponse<LaneDto>> {

    const rb = new RequestBuilder(this.rootUrl, LaneControllerService.SaveLanePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LaneDto>;
      })
    );
  }

  /**
   * Allows to add new Lane.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveLane$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveLane(params: {
    body: LaneDto
  }): Observable<LaneDto> {

    return this.saveLane$Response(params).pipe(
      map((r: StrictHttpResponse<LaneDto>) => r.body as LaneDto)
    );
  }

}
