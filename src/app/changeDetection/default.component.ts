import { Component, Input } from '@angular/core';

import { Profile }  from  './profile';


@Component({
	 selector: 'default',
	 template: `
		 <h4 class="ui horizontal divider header">
		 Default Strategy
		 </h4>

		 <form class="ui form">
		 <div class="field">
		 <label>First Name</label>
		 <input
		 type="text"
		 [(ngModel)]="profile.first"
		 name="first"
		 placeholder="First Name">
		 </div>
		 <div class="field">
		 <label>Last Name</label>
		 <input
		 type="text"
		 [(ngModel)]="profile.last"
		 name="last"
		 placeholder="Last Name">
		 </div>
		 </form>
		 <div>

		 {{profile.lastChanged() | date:'medium'}}
		 </div>
	 `
})

export class DefaultComponent {
 	@Input() profile: Profile;
}