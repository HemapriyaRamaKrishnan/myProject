import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MathsService } from 'src/app/services/maths.service';
@Component({
  selector: 'app-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.scss'],
  providers:[MathsService]
})
export class MyNameComponent implements OnInit {
  signinForm: FormGroup;
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
        email:['', Validators.required],
        password:['', Validators.required],
        confirmPassword: [''],
        phonenumber: [''],
        country: [''],
        gender: ['']
    })
  }

}

