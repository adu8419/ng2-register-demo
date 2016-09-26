import { Injectable }  from  '@angular/core';


@Injectable()
export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': '请输入手机号',
            'requireSMSCode': '请输入短信验证码',
            'invalidPatternPhone': '请输入正确的手机号',
            'invalidProtocol': '',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': '请设置6-18位密码，支持数字、英文、符号',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }

    static patternValidator(control) {
        if (control.value.match(/^1\d{10}$/)) {
            return null;
        } else {
            return { 'invalidPatternPhone': true };
        }
    }

    static protocolCheckValidator(control)  {
        if(ValidationService.stringIsNotBlank(control.value)) {
            return null;
        }
        return { 'invalidProtocol': true}
    }


    static codeSMSValidator(control) {
        if(ValidationService.stringIsNotBlank(control.value)) {
            return null;
        }
        return { 'requireSMSCode': true}
    }


    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        ///^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/

        if (ValidationService.stringIsNotBlank(control.value)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static stringIsNotBlank(v) {
       if(/^\s*$/g.test(v)  || v == undefined || v == null) {
        return false;
       } 
       return true;
    }
}
