import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegisterDemoComponent } from './rg-demo.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  	{ 
  		path: 'rgdemo', 
  		component: RegisterDemoComponent
	  }
]);
