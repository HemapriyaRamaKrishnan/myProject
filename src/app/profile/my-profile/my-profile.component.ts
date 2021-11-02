import { Component, OnInit } from '@angular/core';
import { MathsService } from 'src/app/services/maths.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
   bookId:number=30;
   bookName="Wings of Fire";
   author:string="Abdul Kalam";
   bookStatus:string="Available";
   myButton:any=true;
  constructor(
    public _maths: MathsService
    ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.myButton =false;
    },2000);
    
  }
  increase(){
    this._maths.addOne();
  }
btnToggle(){
  if(this.bookStatus =="Available"){
    this.bookStatus="Not-Available"
  }
  else{
    this.bookStatus="Available"
  }
}
}
