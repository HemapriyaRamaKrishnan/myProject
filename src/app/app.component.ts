import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'my-project';
  submitted = false;
  countryList= [
    {"countryname":"India"},
    {"countryname":"England"},
    {"countryname":"USA"}

];
firstname="";
lastname="";
email="";
gender="";
password="";
country="";
city="";
street="";
pincode="";
ngOnInit(): void {
}
onSubmit(myForm: NgForm){
  this.submitted = true;
  console.log(myForm);
}
}
