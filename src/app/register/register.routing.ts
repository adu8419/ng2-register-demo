import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { RegisterStartComponent } from './rg-start.component';
import { RegisterLastComponent } from './rg-last.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  	{ 
  		path: 'register', 
  		component: RegisterComponent,
  		children: [
  			{
  				path: '', 
  				component: RegisterStartComponent
  			},
  			{
  				path: 'rglast', 
  				component: RegisterLastComponent
  			}
  		]
	}
]);