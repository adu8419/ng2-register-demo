import { Component , ChangeDetectorRef} from '@angular/core';
import { Router } from  '@angular/router';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

import { ControlEntity } from './control-entity';
import { ValidationService } from './validation.service';
import { RegisterService } from './register.service';



@Component({
	selector: 'my-register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css']
})


export class RegisterComponent {
	step: boolean;  // 是否到下一步 true：是 false：否
	aliPass: boolean; //阿里安全验证是否通过

	rgstartForm: any; 
	rglastForm: any;

	mobile: string = '';


	isSend: boolean; //验证码是否发送 true：发送(重新发送按钮不可用) false：未发送(重新发送按钮可用)
	timer: any; //定时任务
	second: number = 15; //倒计时数
	btnTitle: string = '重新获取'; //按钮文字

	codeEntity: ControlEntity = new ControlEntity(); 
	pwdEntity: ControlEntity = new ControlEntity();

	constructor(
		private  fb: FormBuilder, 
	    private router: Router, 
	    private ref: ChangeDetectorRef,
	    private rgService: RegisterService
	 ) {
		this.rgstartForm = this.fb.group({
			  'mobilePhone': ['', [Validators.required, ValidationService.patternValidator]],
			  'protocol': ['', [ValidationService.protocolCheckValidator]]
		});

		this.rglastForm = this.fb.group({
			  'codeSMS': ['', [ 
			  			ValidationService.codeSMSValidator
			  	]],
			  'pwd': ['', [ValidationService.passwordValidator]]
		});

	}

	onAliPass(aliPass: boolean) {
		this.aliPass = aliPass;
		//程序call ng2 我要做变更检测
		this.ref.detectChanges();
		
	}


	next() {
		console.log('click')
		//点击下一步： 验证是否通过？ 前台+后台
		if (this.rgstartForm.dirty && this.rgstartForm.valid) {
	    	this.step = true;
	    	this.mobile = this.rgstartForm.value.mobilePhone ;
	    }
	}

	setClasses(from) {
		let flag = this.isDisabled(from);
		let classes =  {
		     'btn-red': !flag,      // true
		     'btn-disabled': flag// false
		 };
		return classes;
	}

	isDisabled(from): boolean {
		return  !(from.valid && this.aliPass);
	}

	handlerSendCodeClick() {
		//发送请求到后台
		this.rgService.getCodeSMS(this.mobile).then((resp)=>{
		    this.countdown();
		    if(resp && resp.responseText == 'error') {
			    this.codeEntity.message = '当前网络不稳定，请稍后再试';
			    this.setEntity( this.codeEntity, {
		  	   		message: '当前网络不稳定，请稍后再试',
		  	   		result: false
		  	   	});
			   return;
            }

		    if (resp && resp.result) {
		  		this.setEntity( this.codeEntity, {
		  	   		message: '验证码已发送，请注意查收',
		  	   		result: true
		  	   	});
   
            } else {
                	this.codeEntity.result = false;
					if(resp.errorMessage){
				  	   this.setEntity( this.codeEntity, {
				  	   		message: resp.errorMessage,
				  	   		result: false
				  	   	});
					}else{
				  		 this.setEntity( this.codeEntity, {
				  	   		message: '发送验证码错误',
				  	   		result: false
				  	   	});
					}
                   this.isSend = true;
            }
	       
		});
	}

	handleKeyup(str) {
		switch(str) {
			case 'codeSMS':
			this.codeEntity.message = '';
			case 'pwd':
			this.pwdEntity.message = '';
		}
	}

	submitLastForm() {
		if (this.rglastForm.dirty && this.rglastForm.valid) {
			alert(`验证码：${this.rglastForm.value.codeSMS}  ;  密码：${this.rglastForm.value.pwd}`)
		}
	}

	private setEntity(entity, obj) {
		for(let attr in obj) {
			entity[attr] = obj[attr];
		}
	}

	private countdown() {
		this.isSend = true;
		  this.timer = setInterval(() => {
            this.second = this.second - 1;
            this.btnTitle = this.second + 's后重新发送';

            if (this.second == 0) {
                clearInterval(this.timer);
				//this.getCodeSendingStatus();
                this.second = 60;
               // 清除提示语;
                this.btnTitle = '重新获取';
                this.isSend = false;

                this.setEntity(this.codeEntity, {
			  		message: ''
			  	});
            }
        }, 1000);
	}
}