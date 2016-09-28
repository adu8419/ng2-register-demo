import { NgModule } from  '@angular/core';
import { CommonModule }       from '@angular/common';

import { routing }  from  './observable-demo.routing';
import { ObservableDemoComponent }  from  './observables-demo.component';
import { ObservableComponnet }  from  './observables.component';


@NgModule({
	imports: [CommonModule, routing],
	declarations: [ObservableDemoComponent, ObservableComponnet]
    
})

export class ObservableDemoModule { }
