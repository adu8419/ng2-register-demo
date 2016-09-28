import { Component } from '@angular/core';


@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<a [routerLink]="['./register']">ReactiveFormsModule</a>  |
		<a [routerLink]="['./rgdemo']">FormsModule</a>  |
		<a [routerLink]="['./httpDemo']">Http</a>  |
		<a [routerLink]="['./observableDemo']">Observable And  OnPush</a>  |
		<a [routerLink]="['./changeDetection']">Change Detection</a>  |
		<router-outlet></router-outlet>
	`

})

export class AppComponent {
	title: 'Angular2 App Register Demo'
}