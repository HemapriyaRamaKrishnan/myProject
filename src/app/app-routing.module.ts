import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNameComponent } from './profile/my-name/my-name.component';
import { MyProfileComponent } from './profile/my-profile/my-profile.component';

const routes: Routes = [
  {
    path:'my-name',
    component:MyNameComponent
  },
  {
    path:'my-profile',
    component:MyProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
