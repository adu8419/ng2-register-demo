
import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AliModule } from '../common/ali.module';

import { routing } from './register.routing';


import { RegisterComponent }   from './register.component';
import { RegisterStartComponent }   from './rg-start.component';
import { RegisterLastComponent }   from './rg-last.component';
import { ControlMessagesComponent }  from './control-messages.component';




@NgModule({
  imports:      [ CommonModule, AliModule, ReactiveFormsModule , routing],
  declarations: [ RegisterComponent, RegisterStartComponent, RegisterLastComponent , ControlMessagesComponent],

})

export class RgModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/