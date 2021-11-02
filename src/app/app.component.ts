import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  signinForm: FormGroup;
  submitted=false;
  countryList=[
    {countryname:'India'},
    {countryname:'England'},
    {countryname:'Germany'}
  ];
  constructor(private formBuilder:FormBuilder) { }

ngOnInit(): void {
  this.signinForm = this.formBuilder.group(
    {
      FirstName: ['',Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',Validators.required],
      phonenumber:['',[ Validators.required, RxwebValidators.pattern({expression:{'onlyDigit': /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/} })]], 
      country: ['',Validators.required],
      food: ['',Validators.required],
      check:['',Validators.required]
  },
  );
}

 get f()
 {
 return this.signinForm.controls;
}
onSubmit()
{
  console.log("submitted");
  this.submitted=true;
}

}
