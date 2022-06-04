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

import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root',
})
export class GenreControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllGenres
   */
  static readonly GetAllGenresPath = '/api/genres';

  /**
   * Allows to get all Genres.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllGenres()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllGenres$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Genre>>> {

    const rb = new RequestBuilder(this.rootUrl, GenreControllerService.GetAllGenresPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Genre>>;
      })
    );
  }

  /**
   * Allows to get all Genres.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllGenres$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllGenres(params?: {
  }): Observable<Array<Genre>> {

    return this.getAllGenres$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Genre>>) => r.body as Array<Genre>)
    );
  }

}
