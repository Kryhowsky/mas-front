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

import { PagePaperBookDto } from '../models/page-paper-book-dto';
import { PaperBookDto } from '../models/paper-book-dto';

@Injectable({
  providedIn: 'root',
})
export class PaperBookControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getPaperBookByIban
   */
  static readonly GetPaperBookByIbanPath = '/api/paper-books/{iban}';

  /**
   * Returns Paperbook by given IBAN.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPaperBookByIban()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaperBookByIban$Response(params: {
    iban: string;
  }): Observable<StrictHttpResponse<PaperBookDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaperBookControllerService.GetPaperBookByIbanPath, 'get');
    if (params) {
      rb.path('iban', params.iban, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaperBookDto>;
      })
    );
  }

  /**
   * Returns Paperbook by given IBAN.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPaperBookByIban$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaperBookByIban(params: {
    iban: string;
  }): Observable<PaperBookDto> {

    return this.getPaperBookByIban$Response(params).pipe(
      map((r: StrictHttpResponse<PaperBookDto>) => r.body as PaperBookDto)
    );
  }

  /**
   * Path part for operation updatePaperBook
   */
  static readonly UpdatePaperBookPath = '/api/paper-books/{iban}';

  /**
   * Allows to update Paperbook specified by IBAN.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePaperBook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePaperBook$Response(params: {
    iban: string;
    body: PaperBookDto
  }): Observable<StrictHttpResponse<PaperBookDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaperBookControllerService.UpdatePaperBookPath, 'put');
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
        return r as StrictHttpResponse<PaperBookDto>;
      })
    );
  }

  /**
   * Allows to update Paperbook specified by IBAN.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePaperBook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePaperBook(params: {
    iban: string;
    body: PaperBookDto
  }): Observable<PaperBookDto> {

    return this.updatePaperBook$Response(params).pipe(
      map((r: StrictHttpResponse<PaperBookDto>) => r.body as PaperBookDto)
    );
  }

  /**
   * Path part for operation deletePaperBookByIban
   */
  static readonly DeletePaperBookByIbanPath = '/api/paper-books/{iban}';

  /**
   * Allows to delete Paperbook specified by IBAN.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePaperBookByIban()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePaperBookByIban$Response(params: {
    iban: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaperBookControllerService.DeletePaperBookByIbanPath, 'delete');
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
   * Allows to delete Paperbook specified by IBAN.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePaperBookByIban$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePaperBookByIban(params: {
    iban: string;
  }): Observable<void> {

    return this.deletePaperBookByIban$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPaperBookPage
   */
  static readonly GetPaperBookPagePath = '/api/paper-books';

  /**
   * Returns page of Paperbooks with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPaperBookPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaperBookPage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PagePaperBookDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaperBookControllerService.GetPaperBookPagePath, 'get');
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
        return r as StrictHttpResponse<PagePaperBookDto>;
      })
    );
  }

  /**
   * Returns page of Paperbooks with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPaperBookPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaperBookPage(params: {
    page: number;
    size: number;
  }): Observable<PagePaperBookDto> {

    return this.getPaperBookPage$Response(params).pipe(
      map((r: StrictHttpResponse<PagePaperBookDto>) => r.body as PagePaperBookDto)
    );
  }

  /**
   * Path part for operation savePaperBook
   */
  static readonly SavePaperBookPath = '/api/paper-books';

  /**
   * Allows to add new PaperBook.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePaperBook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePaperBook$Response(params: {
    body: PaperBookDto
  }): Observable<StrictHttpResponse<PaperBookDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaperBookControllerService.SavePaperBookPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaperBookDto>;
      })
    );
  }

  /**
   * Allows to add new PaperBook.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `savePaperBook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePaperBook(params: {
    body: PaperBookDto
  }): Observable<PaperBookDto> {

    return this.savePaperBook$Response(params).pipe(
      map((r: StrictHttpResponse<PaperBookDto>) => r.body as PaperBookDto)
    );
  }

  /**
   * Path part for operation getPaperBookQuantityByIban
   */
  static readonly GetPaperBookQuantityByIbanPath = '/api/paper-books/quantity/{iban}';

  /**
   * Returns Quantity of Paperbook by given IBAN.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPaperBookQuantityByIban()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaperBookQuantityByIban$Response(params: {
    iban: string;
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, PaperBookControllerService.GetPaperBookQuantityByIbanPath, 'get');
    if (params) {
      rb.path('iban', params.iban, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Returns Quantity of Paperbook by given IBAN.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPaperBookQuantityByIban$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaperBookQuantityByIban(params: {
    iban: string;
  }): Observable<number> {

    return this.getPaperBookQuantityByIban$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
