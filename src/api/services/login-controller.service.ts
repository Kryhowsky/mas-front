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

import { LoginDto } from '../models/login-dto';
import { TokenDto } from '../models/token-dto';

@Injectable({
  providedIn: 'root',
})
export class LoginControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation authenticateUser
   */
  static readonly AuthenticateUserPath = '/api/login';

  /**
   * Allows to login.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticateUser$Response(params: {
    body: LoginDto
  }): Observable<StrictHttpResponse<TokenDto>> {

    const rb = new RequestBuilder(this.rootUrl, LoginControllerService.AuthenticateUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TokenDto>;
      })
    );
  }

  /**
   * Allows to login.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authenticateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticateUser(params: {
    body: LoginDto
  }): Observable<TokenDto> {

    return this.authenticateUser$Response(params).pipe(
      map((r: StrictHttpResponse<TokenDto>) => r.body as TokenDto)
    );
  }

}
