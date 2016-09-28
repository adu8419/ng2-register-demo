import  { Component }  from  '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
	 selector: 'change-detection-sample-app',
	 template: `
	 <observable [items]="itemObservable"></observable>
	 `
 })


 export class ObservableDemoComponent {
 	itemObservable: Observable<number>;

	 constructor() {
	 	this.itemObservable = Observable.timer(100, 100).take(101);
	 }
 }