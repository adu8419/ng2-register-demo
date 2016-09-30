import { Component } from '@angular/core';

import { SearchResult }  from  './search-result';

//let loadingGif: string = '/src/accsets/images/\g.gif';

@Component({
 selector: 'youtube-search',
 template: `
 <div class='container'>
 <div class="page-header">
 <h1>YouTube Search

  <div *ngIf="loading">Loading...</div>

 </h1>
 </div>

 <div class="row">
 <div class="input-group input-group-lg col-md-12">
 <search-box
 (loading)="loading = $event"
 (results)="updateResults($event)"
 ></search-box>
 </div>
 </div>

 <div class="row">
 <search-result
 *ngFor="let result of results"
 [result]="result">
 </search-result>
 </div>
 </div>
`
})


export class YouTubeSearchComponent {
 results: SearchResult[];
 loading: boolean;
 updateResults(results: SearchResult[]): void {
	 this.results = results;
 	// console.log("results:", this.results); // uncomment to take a look
 }
}