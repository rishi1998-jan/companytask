import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }



  
  get(endpoint, callback) {
  
    return this.httpClient.get(endpoint).subscribe((data) => {
      console.log(data);
      callback(data);
     
    });
  }

  post(endpoint, bean, callback) {
  
    return this.httpClient.post(endpoint, bean).subscribe((data) => {
      console.log(data);
      callback(data);
      
    }, error => {
      console.log(' Error', error);
    });
  }
}
