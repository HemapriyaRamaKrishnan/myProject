import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNameComponent } from './my-name/my-name.component';

const routes: Routes = [
  {
    path:'my-name',
    component:MyNameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
