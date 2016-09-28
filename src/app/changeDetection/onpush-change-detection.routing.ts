import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OnPushChangeDetectionSampleApp } from  './onpush-change-detection.component';



export const routing: ModuleWithProviders = RouterModule.forChild([
  	{ 
  		path: 'changeDetection', 
  		component: OnPushChangeDetectionSampleApp
	  }
]);
