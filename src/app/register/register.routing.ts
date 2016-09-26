import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  	{ 
  		path: 'register', 
  		component: RegisterComponent
	  }
]);