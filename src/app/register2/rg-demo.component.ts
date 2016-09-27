import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'rg-demo',
	templateUrl: 'rg-demo.component.html'

	})

export class RegisterDemoComponent {
	onSubmit(v) {
		console.log(v);
	}	
	myChecked: boolean = true;

	mySexChecked: string = '1';
}