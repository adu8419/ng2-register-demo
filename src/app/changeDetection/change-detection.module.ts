import {  NgModule } from  '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing }  from './onpush-change-detection.routing';

import { OnPushChangeDetectionSampleApp } from  './onpush-change-detection.component';
import { OnPushComponent }  from  './onpush.component';
import { DefaultComponent }  from  './default.component';



@NgModule({
   imports:      [ CommonModule, FormsModule, routing ],
   declarations: [ OnPushChangeDetectionSampleApp, DefaultComponent, OnPushComponent],
})

export class ChangeDModule{

}


/*
  本module 测试 ng2 的 变更检测

  ng2 默认为 ChangeDetectionStrategy.default 
  即： 整个组件树 有一个组件发生变化 整个组件树更新


  如果某个组件切换	 changeDetection: ChangeDetectionStrategy.OnPush, 时候
  则只有在这个组件输入发生变化的时候才会更新（也就是说其他不相干的组件的变化不会影响这个组件）



*/
