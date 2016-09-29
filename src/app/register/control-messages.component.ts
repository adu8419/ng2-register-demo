import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ValidationService } from './validation.service';

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'control-messages',
  template: `<span *ngIf="errorMessage !== null"   [style.color]= "'网络错误' == errorMessage ? 'green': 'inherit'">{{errorMessage}}</span>`
})
export class ControlMessagesComponent   {
  //errorMessage: string;
  @Input() control: FormControl;

  abc: any;

  constructor() { }


  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]) ||  this.control.errors[propertyName];
    }
    // 你忒么换  vscode 会死啊，sb这不会 提示ts
    
    return null;
  }

 }

 
}