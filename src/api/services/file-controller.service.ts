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


@Injectable({
  providedIn: 'root',
})
export class FileControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation testGenericFlyweight
   */
  static readonly TestGenericFlyweightPath = '/api/files/generic';

  /**
   * Sends csv report
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `testGenericFlyweight()` instead.
   *
   * This method doesn't expect any request body.
   */
  testGenericFlyweight$Response(params: {
    fileType: 'XLS' | 'PDF' | 'CSV' | 'JSON';
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FileControllerService.TestGenericFlyweightPath, 'get');
    if (params) {
      rb.query('fileType', params.fileType, {});
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
   * Sends csv report
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `testGenericFlyweight$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  testGenericFlyweight(params: {
    fileType: 'XLS' | 'PDF' | 'CSV' | 'JSON';
  }): Observable<void> {

    return this.testGenericFlyweight$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
