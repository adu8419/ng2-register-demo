import {
 Component,
 Input,
 ChangeDetectorRef,
 ChangeDetectionStrategy
 } from '@angular/core';

import { Observable } from 'rxjs/Rx';


@Component({
	 selector: 'observable',
	 changeDetection: ChangeDetectionStrategy.OnPush,
	 template: `
	 <div>
	 <div>Total items: {{counter}}</div>
	 </div>
	 `
})


export class ObservableComponnet {
	 @Input() items: Observable<number>;

	 counter = 0;

	 constructor(private changeDetector: ChangeDetectorRef) {}

	 ngOnInit() {
		 this.items.subscribe((v) => {
		 	console.log('got value', v);
			 this.counter++;
			if (this.counter % 5 == 0) {
		 		this.changeDetector.markForCheck();
		 	}
		 }, 
		 null, //onError
		 () => {
		 	this.changeDetector.markForCheck();
		 });
	 }
}