import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyNameComponent } from './my-name/my-name.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyProfileComponent,
    MyNameComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
