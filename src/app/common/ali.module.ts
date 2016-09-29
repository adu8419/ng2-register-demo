
import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common';
import { HttpModule }    from '@angular/http';

import { AliSecurityComponent }   from './alisecurity.component';

import { AliSecurityService }   from  './alisecurity.service';


@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [ AliSecurityComponent],
  exports: [ AliSecurityComponent ],
  providers: [AliSecurityService]

})

export class AliModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/