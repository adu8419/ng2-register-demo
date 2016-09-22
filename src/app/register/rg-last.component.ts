import { Component } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

import { ValidationService } from '../service/validation.service';

@Component({
	moduleId: module.id,
	selector: 'rg-last',
	templateUrl: 'rg-last.component.html',
	styleUrls: ['rg-common.css']

})


export class RegisterLastComponent {

	mobile: string = '';

	btnTitle: string = '重新获取';

	rgstartForm: any;

	constructor(private route: ActivatedRoute, private  fb: FormBuilder ) {
		this.rgstartForm = this.fb.group({
			  'codeSMS': ['', [ ValidationService.codeSMSValidator]],
			  'pwd': ['', [ValidationService.passwordValidator]]
		});

	}

	ngOnInit() {
		console.log(this.route)
    	this.route.params.subscribe((params: Params ) => {
      		this.mobile = params['mobile'];
    	 });
    }

    getCode() {

    }

}