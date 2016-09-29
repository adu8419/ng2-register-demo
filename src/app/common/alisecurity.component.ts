import { Component, OnInit, Output, EventEmitter }  from  '@angular/core';
import { AliSecurityService } from './alisecurity.service';

@Component({
	moduleId: module.id,
	selector: 'ali-security',
	template: `<div  [attr.id]="randomId" class="slider-box" style="display:block;"></div>`,
	styleUrls: [ 'alisecurity.component.css' ]

})


export class AliSecurityComponent implements OnInit{
	@Output() onAliPass = new EventEmitter<boolean>();

	randomId: string = '2';

	constructor(private aliService: AliSecurityService) {
	}

	ngOnInit() {
		
	}

	ngAfterViewInit() {
		this.aliService.create(this.randomId).subscribe((data) => {
			console.log('dd: ', data)
			if(data && data.sig && data.csessionid) {
                this.aliService.checkAli({
                    "sig": data.sig,
                    "token": data.token,
                    "csessionid": data.csessionid
                }).then((resp)=> {
                	console.log(resp)
                	if(resp && resp.result) {
                		this.onAliPass.emit(true);
                	}else {
                		this.onAliPass.emit(false);
                	}
                }).catch(() => {
                	this.onAliPass.emit(false);
                })
             }
		})
	}
}