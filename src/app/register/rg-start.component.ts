import { Component , Inject} from '@angular/core';
import { Router } from  '@angular/router';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ValidationService } from '../service/validation.service';

@Component({
	moduleId: module.id,
	selector: 'rg-start',
	templateUrl: 'rg-start.component.html',
	styleUrls: ['rg-common.css']

})


export class RegisterStartComponent {

	rgstartForm: any;

	aliPass: boolean = false;

	constructor(private  fb: FormBuilder,  private router: Router) {
		this.rgstartForm = this.fb.group({
			  'mobilePhone': ['', [Validators.required, ValidationService.patternValidator]],
			  'protocol': ['', [ValidationService.protocolCheckValidator]]
		});

	}


	onAliPass(aliPass: boolean) {
		this.aliPass = aliPass;
	}

	next() {
		console.log('click')
		//点击下一步： 验证是否通过？ 前台+后台
		if (this.rgstartForm.dirty && this.rgstartForm.valid) {
	    
	    	 this.router.navigate(['/register/rglast', { mobile: this.rgstartForm.value.mobilePhone }]);
	    }



	}

	setClasses() {
		let flag = this.isDisabled();
		let classes =  {
		     'btn-red': !flag,      // true
		     'btn-disabled': flag// false
		 };
		return classes;
	}

	isDisabled(): boolean {
		return  !(this.rgstartForm.valid && this.aliPass);
	}
}