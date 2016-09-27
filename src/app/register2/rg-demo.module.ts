
import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';


import { routing } from './rg-demo.routing';


import { RegisterDemoComponent }   from './rg-demo.component';



@NgModule({
  imports:      [ CommonModule , FormsModule, routing],
  declarations: [ RegisterDemoComponent],

})

export class RgDemoModule { }


/*

本模块测试：
 • ngModel and
 • NgForm
 
经过测试 初步 认为  ngModel and NgForm 只支持 在html模板中 使用 h5的验证

如果要自定义验证 或者 更加复杂的验证 甚至 后台验证 请使用 

• formControl and
• ngFormGroup

*/

