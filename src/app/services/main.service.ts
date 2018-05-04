import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {AppConfig} from "../components/app.config";
import {PaySlip} from "../models/payslip";

@Injectable()
export class MainService {
  paySlipUrl = "/payslip";

  constructor(private http: Http, private appConfig: AppConfig) {
  }

  createPaySlip(paySlip: PaySlip) {
    let data: any = {'data': paySlip};
    return this.http.post(AppConfig.apiUrl + this.paySlipUrl + '/create', data)
      .map(success => success.status)
      .catch(this.handleError);
  }

  fetchPaySlips() {
    return this.http.get(AppConfig.apiUrl + this.paySlipUrl + '/fetch/')
      .map(this.extractData)
      .catch(this.handleError);
  }

  //Data Extractor from json
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
