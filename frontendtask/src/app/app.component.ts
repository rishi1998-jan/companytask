import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import {  Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private service:HttpServiceService, private router : Router) { }

ngOnInit() {
  this.getUser();
}



form ={
  message : null,
  data: { id :null},
  list:[]
}

getUser(){
  let _self = this;
 let url="http://localhost:8000/student/";
  
  _self.service.get(url, function (res, error) {
    if (error) {
      return;
    }
    _self.form.list = res;
    console.log(_self.form.list[0]+"dhvsdhj")
    if (res.success) {
      console.log(res+'result');
      _self.form.list = res;
    } 
    console.log('FORM', _self.form);
  });
}



forward(page){
  this.router.navigateByUrl(page);
}


}
