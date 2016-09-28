import  { ModuleWithProviders }  from  '@angular/core'
import  { RouterModule }  from  '@angular/router';

import { ObservableDemoComponent }  from  './observables-demo.component';


export  const routing: ModuleWithProviders = RouterModule.forChild([
	{
		path: 'observableDemo', 
		component: ObservableDemoComponent
	}
])