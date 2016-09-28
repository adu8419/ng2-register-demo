import { Component } from  '@angular/core';

import { Profile }  from  './profile';


@Component({
	 selector: 'change-detection-sample-app',
	 template: `
		 <div class="ui page grid">
		 <div class="two column row">
		 <div class="column area">
		 <default [profile]="profile1"></default>
		 </div>
		 <div class="column area">
		 <on-push [profile]="profile2"></on-push>
		 </div>
		 </div>
		 </div>
	 `
 })


 export class OnPushChangeDetectionSampleApp {
 	profile1: Profile = new Profile('Felipe', 'Coury');
 	profile2: Profile = new Profile('Nate', 'Murray');
 }
