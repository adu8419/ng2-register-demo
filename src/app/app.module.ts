import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RgModule }    from './register/rg.module';

import { routing } from './app.routing';

import { AppComponent }   from './app.component';

import { ValidationService } from  './service/validation.service';
import { AliSecurityService } from './service/alisecurity.service';


@NgModule({
  imports:      [ BrowserModule, RgModule, routing ],
  declarations: [ AppComponent ],
  providers: [ ValidationService, AliSecurityService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/