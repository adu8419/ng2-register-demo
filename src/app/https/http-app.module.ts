import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule }       from '@angular/common';

import { routing }  from  './http-app.routing';

import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from './constant';
import { SearchBoxComponent }  from  './search-box.component';
import { SearchResultComponent }  from  './search-result.component';
import { YouTubeSearchComponent }  from  './youtube-search.component';

import { YouTubeService } from '../service/youtube.service';


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
		 	{provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
		 ] 
	 ]
 })

export class HttpAppModule {}



