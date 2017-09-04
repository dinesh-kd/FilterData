import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {
  
  constructor(private http: HttpClient) { }
  private CustomerDataUrl = 'https://gist.githubusercontent.com/Valindo/b017a02b694e1dcdc5a5885ba4f6df7c/raw/0d589bd9085f13a9b09358c223bd00f9470cc2d1/filter.json';
    public GetCustomerData():Observable<any> {  
        return this.http.get(this.CustomerDataUrl);
    }

}