import { NgModule }             from  '@angular/core';
import { BrowserModule }        from  '@angular/platform-browser';

import { RgModule }             from  './register/rg.module';
import { RgDemoModule }         from  './register2/rg-demo.module';
import { HttpAppModule }        from  './https/http-app.module';
import { ChangeDModule }        from  './changeDetection/change-detection.module';
import { ObservableDemoModule } from  './observableOnpush/observables-demo.module';

import { routing }              from  './app.routing';


import { AppComponent }         from  './app.component';

//import { ValidationService }    from  './service/validation.service';
//import { AliSecurityService }   from  './service/alisecurity.service';
//import { RegisterService }      from  './service/register.service';



@NgModule({
  imports:      [ 
	  BrowserModule, 
	  RgModule, 
	  RgDemoModule, 
	  HttpAppModule, 
	  ChangeDModule, 
	  ObservableDemoModule,   
	  routing 
  ],
  declarations: [ AppComponent ],
 // providers: [ ValidationService, AliSecurityService, RegisterService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/