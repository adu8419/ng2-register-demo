import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YouTubeSearchComponent } from './youtube-search.component';
import { LoggedInGuard }  from  '../shared/loggedin-guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  	{ 
  		path: 'httpDemo', 
  		component: YouTubeSearchComponent,
  		canActivate:[LoggedInGuard]
	  }
]);
