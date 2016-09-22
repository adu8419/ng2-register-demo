import { Component } from '@angular/core';


@Component({
	moduleId: module.id,
	selector: 'my-register',
	template: `
	 <div class="register-box">
		<router-outlet></router-outlet>
	 </div>`,

	 styleUrls: ['register.component.css']

})


export class RegisterComponent {
	
}