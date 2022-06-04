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

import { PageWorkerDto } from '../models/page-worker-dto';
import { WorkerDto } from '../models/worker-dto';

@Injectable({
  providedIn: 'root',
})
export class WorkerControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getWorkerById
   */
  static readonly GetWorkerByIdPath = '/api/workers/{id}';

  /**
   * Returns Worker by given ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWorkerById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkerById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<WorkerDto>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerControllerService.GetWorkerByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkerDto>;
      })
    );
  }

  /**
   * Returns Worker by given ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getWorkerById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkerById(params: {
    id: number;
  }): Observable<WorkerDto> {

    return this.getWorkerById$Response(params).pipe(
      map((r: StrictHttpResponse<WorkerDto>) => r.body as WorkerDto)
    );
  }

  /**
   * Path part for operation updateWorker
   */
  static readonly UpdateWorkerPath = '/api/workers/{id}';

  /**
   * Allows to update administrator specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateWorker()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateWorker$Response(params: {
    id: number;
    body: WorkerDto
  }): Observable<StrictHttpResponse<WorkerDto>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerControllerService.UpdateWorkerPath, 'put');
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
        return r as StrictHttpResponse<WorkerDto>;
      })
    );
  }

  /**
   * Allows to update administrator specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateWorker$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateWorker(params: {
    id: number;
    body: WorkerDto
  }): Observable<WorkerDto> {

    return this.updateWorker$Response(params).pipe(
      map((r: StrictHttpResponse<WorkerDto>) => r.body as WorkerDto)
    );
  }

  /**
   * Path part for operation deleteWorkerById
   */
  static readonly DeleteWorkerByIdPath = '/api/workers/{id}';

  /**
   * Allows to delete Worker specified by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteWorkerById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWorkerById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerControllerService.DeleteWorkerByIdPath, 'delete');
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
   * Allows to delete Worker specified by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteWorkerById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWorkerById(params: {
    id: number;
  }): Observable<void> {

    return this.deleteWorkerById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getWorkerPage
   */
  static readonly GetWorkerPagePath = '/api/workers';

  /**
   * Returns page of Workers with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWorkerPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkerPage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageWorkerDto>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerControllerService.GetWorkerPagePath, 'get');
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
        return r as StrictHttpResponse<PageWorkerDto>;
      })
    );
  }

  /**
   * Returns page of Workers with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getWorkerPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkerPage(params: {
    page: number;
    size: number;
  }): Observable<PageWorkerDto> {

    return this.getWorkerPage$Response(params).pipe(
      map((r: StrictHttpResponse<PageWorkerDto>) => r.body as PageWorkerDto)
    );
  }

  /**
   * Path part for operation saveWorker
   */
  static readonly SaveWorkerPath = '/api/workers';

  /**
   * Allows to add new Worker.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveWorker()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveWorker$Response(params: {
    body: WorkerDto
  }): Observable<StrictHttpResponse<WorkerDto>> {

    const rb = new RequestBuilder(this.rootUrl, WorkerControllerService.SaveWorkerPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WorkerDto>;
      })
    );
  }

  /**
   * Allows to add new Worker.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveWorker$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveWorker(params: {
    body: WorkerDto
  }): Observable<WorkerDto> {

    return this.saveWorker$Response(params).pipe(
      map((r: StrictHttpResponse<WorkerDto>) => r.body as WorkerDto)
    );
  }

}
