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

import { EbookDto } from '../models/ebook-dto';
import { PageEbookDto } from '../models/page-ebook-dto';

@Injectable({
  providedIn: 'root',
})
export class EbookControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getEbookByIban
   */
  static readonly GetEbookByIbanPath = '/api/ebooks/{iban}';

  /**
   * Returns Ebook by given IBAN.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEbookByIban()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEbookByIban$Response(params: {
    iban: string;
  }): Observable<StrictHttpResponse<EbookDto>> {

    const rb = new RequestBuilder(this.rootUrl, EbookControllerService.GetEbookByIbanPath, 'get');
    if (params) {
      rb.path('iban', params.iban, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EbookDto>;
      })
    );
  }

  /**
   * Returns Ebook by given IBAN.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getEbookByIban$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEbookByIban(params: {
    iban: string;
  }): Observable<EbookDto> {

    return this.getEbookByIban$Response(params).pipe(
      map((r: StrictHttpResponse<EbookDto>) => r.body as EbookDto)
    );
  }

  /**
   * Path part for operation updateEbook
   */
  static readonly UpdateEbookPath = '/api/ebooks/{iban}';

  /**
   * Allows to update Ebook specified by IBAN.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEbook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEbook$Response(params: {
    iban: string;
    body: EbookDto
  }): Observable<StrictHttpResponse<EbookDto>> {

    const rb = new RequestBuilder(this.rootUrl, EbookControllerService.UpdateEbookPath, 'put');
    if (params) {
      rb.path('iban', params.iban, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EbookDto>;
      })
    );
  }

  /**
   * Allows to update Ebook specified by IBAN.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateEbook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEbook(params: {
    iban: string;
    body: EbookDto
  }): Observable<EbookDto> {

    return this.updateEbook$Response(params).pipe(
      map((r: StrictHttpResponse<EbookDto>) => r.body as EbookDto)
    );
  }

  /**
   * Path part for operation deleteEbookByIban
   */
  static readonly DeleteEbookByIbanPath = '/api/ebooks/{iban}';

  /**
   * Allows to delete Ebook specified by IBAN.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEbookByIban()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEbookByIban$Response(params: {
    iban: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EbookControllerService.DeleteEbookByIbanPath, 'delete');
    if (params) {
      rb.path('iban', params.iban, {});
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
   * Allows to delete Ebook specified by IBAN.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteEbookByIban$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEbookByIban(params: {
    iban: string;
  }): Observable<void> {

    return this.deleteEbookByIban$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getEbookPage
   */
  static readonly GetEbookPagePath = '/api/ebooks';

  /**
   * Returns page of Ebooks with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEbookPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEbookPage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageEbookDto>> {

    const rb = new RequestBuilder(this.rootUrl, EbookControllerService.GetEbookPagePath, 'get');
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
        return r as StrictHttpResponse<PageEbookDto>;
      })
    );
  }

  /**
   * Returns page of Ebooks with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getEbookPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEbookPage(params: {
    page: number;
    size: number;
  }): Observable<PageEbookDto> {

    return this.getEbookPage$Response(params).pipe(
      map((r: StrictHttpResponse<PageEbookDto>) => r.body as PageEbookDto)
    );
  }

  /**
   * Path part for operation saveEbook
   */
  static readonly SaveEbookPath = '/api/ebooks';

  /**
   * Allows to add new Ebook.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveEbook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEbook$Response(params: {
    body: EbookDto
  }): Observable<StrictHttpResponse<EbookDto>> {

    const rb = new RequestBuilder(this.rootUrl, EbookControllerService.SaveEbookPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EbookDto>;
      })
    );
  }

  /**
   * Allows to add new Ebook.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveEbook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEbook(params: {
    body: EbookDto
  }): Observable<EbookDto> {

    return this.saveEbook$Response(params).pipe(
      map((r: StrictHttpResponse<EbookDto>) => r.body as EbookDto)
    );
  }

}
