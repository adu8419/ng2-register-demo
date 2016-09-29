import { Injectable  } from '@angular/core';
import { Http } from '@angular/http';

//import 'rxjs/add/operator/toPromise';

import  { Observable } from 'rxjs/Rx';




@Injectable()
export class AliSecurityService {

	private url: string = `src/mock/ali.json`;//aliValidatelogin

	aliPass: boolean;

	constructor(private http: Http ) {
	}

  create(id: string) {
        let nc2 = new noCaptcha();
        let token = new Date().getMilliseconds();
    
        let result =  Observable.create((subscriber) => {
               nc2.init({
                renderTo: id,
                appkey: '1934', 
                token: token,
                callback: (data) => {
                  console.log('callbak')
                  data.token = token;
                  subscriber.next(data);
                  subscriber.complete();
                }
              });
       });

      return result;
    }

  checkAli(data: any) {

      return  this.http.get(this.url).toPromise()
               .then((data) => data.json())
               .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
	   return Promise.reject(error.message || error);
	}
}
