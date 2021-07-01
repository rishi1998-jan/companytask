import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskPieComponent } from './task/task-pie.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: 'user',
    component: TaskComponent
  },
  {
    path: 'piechart',
    component: TaskPieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
