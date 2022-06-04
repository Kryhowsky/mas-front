/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { WorkerControllerService } from './services/worker-controller.service';
import { PublishingHouseControllerService } from './services/publishing-house-controller.service';
import { PaperBookControllerService } from './services/paper-book-controller.service';
import { LaneControllerService } from './services/lane-controller.service';
import { EbookControllerService } from './services/ebook-controller.service';
import { BorrowerControllerService } from './services/borrower-controller.service';
import { BookstandControllerService } from './services/bookstand-controller.service';
import { AuthorControllerService } from './services/author-controller.service';
import { AdministratorControllerService } from './services/administrator-controller.service';
import { LoginControllerService } from './services/login-controller.service';
import { PersonControllerService } from './services/person-controller.service';
import { GenreControllerService } from './services/genre-controller.service';
import { BookControllerService } from './services/book-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    WorkerControllerService,
    PublishingHouseControllerService,
    PaperBookControllerService,
    LaneControllerService,
    EbookControllerService,
    BorrowerControllerService,
    BookstandControllerService,
    AuthorControllerService,
    AdministratorControllerService,
    LoginControllerService,
    PersonControllerService,
    GenreControllerService,
    BookControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
