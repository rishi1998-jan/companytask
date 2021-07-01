import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Route } from '../../../node_modules/@angular/compiler/src/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-task-Pie',
  templateUrl: './task-Pie.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskPieComponent implements OnInit {

  constructor(private service:HttpServiceService, private router : Router) { }
  form ={
    message : null,
    data: { id :null},
    list:[]
  }

  ngOnInit() {
  }
  save(){

    var _self = this;
   
    let url = "http://localhost:8000/student/"
    _self.service.post(url, _self.form.data,
      function (response) {
        _self.form.message = "Data is saved "
        if (response.success) {
      
        } else {

          
        }
      });
  }

  
  forward(page){
    this.router.navigateByUrl(page);
  }
}
