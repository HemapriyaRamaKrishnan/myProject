import { Component, OnInit } from '@angular/core';
import { MathsService } from 'src/app/services/maths.service';

@Component({
  selector: 'app-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.scss'],
  providers:[MathsService]
})
export class MyNameComponent implements OnInit {

  constructor(
    public _maths:MathsService
  ) { }

  ngOnInit(): void {
  }
  increase(){
    this._maths.addOne()
  }

}
