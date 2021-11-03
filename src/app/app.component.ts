import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { password, RxwebValidators } from '@rxweb/reactive-form-validators';

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
  this.createForm();
  console.log('value', this.signinForm.value);
  this.signinForm.setValue({
    FirstName :'Hema',
    LastName : 'Priya',
    email :'hema@123gmail.com',
    password:'12345678',
    confirmPassword:'12345678',
    phonenumber:'8097898058',
    country: 'India',
    gender:'female',
    check: 'true'
  });
  console.log(this.signinForm.value);

  this.signinForm.patchValue({
    FirstName:'Hemapriya',
    LastName: 'Ramakrishnan'

  })
  
}


 get f()
 {
 return this.signinForm.controls;
}
onSubmit()
{
  console.log(this.signinForm);
  this.submitted=true;
  
  }
  createForm(){
    this.signinForm = this.formBuilder.group(
      {
        FirstName: ['',Validators.required],
        LastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password:['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['',[Validators.required,Validators.minLength(8)]],
        phonenumber:['',[ Validators.required, RxwebValidators.pattern({expression:{'onlyDigit': /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/} }),]], 
        country: ['',Validators.required],
        gender: ['',Validators.required],
        check:['',Validators.required]
    },
    );
  }
  onReset() {
    this.submitted = false;
    this.signinForm.reset();
  }
}

