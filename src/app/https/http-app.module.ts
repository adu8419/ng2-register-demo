import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule }       from '@angular/common';

import { routing }  from  './http-app.routing';

import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from './constant';
import { SearchBoxComponent }  from  './search-box.component';
import { SearchResultComponent }  from  './search-result.component';
import { YouTubeSearchComponent }  from  './youtube-search.component';

import { YouTubeService } from './youtube.service';
import { LoggedInGuard }  from  './loggedin-guard';

@NgModule({
	 imports: [  CommonModule, HttpModule, routing ],
	 declarations: [
		 YouTubeSearchComponent,
		 SearchBoxComponent,
		 SearchResultComponent
	 ],
	 providers: [
		 [ 
		 	{provide: YouTubeService, useClass: YouTubeService}, 
		 	{provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY}, 
		 	{provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL},
		 	{provide: LoggedInGuard, useClass: LoggedInGuard}
		 ] 
	 ]
 })

export class HttpAppModule {}


/*
 本模块测试 http  Observable   路由的canActivate 使用
 还使用到了 父组件 与 子组件的通信  通过 EventEmitter

*/



