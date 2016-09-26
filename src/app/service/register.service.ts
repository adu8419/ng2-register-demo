import { Injectable} from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RegisterService {
	url: string = 'src/mock/sms.json';

	constructor(private http: Http) {}

	getCodeSMS(mobile) {
		return this.http.get(this.url).toPromise()
			.then(data => data.json())
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	   return Promise.reject(error.message || error);
	}
}