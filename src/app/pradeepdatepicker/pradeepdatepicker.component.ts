import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pradeepdatepicker',
  templateUrl: './pradeepdatepicker.component.html',
  styleUrls: ['./pradeepdatepicker.component.css']
})
export class PradeepdatepickerComponent implements OnInit {
minDate=new Date();
maxDate=new Date(2020,11,20);
  constructor() { }

  ngOnInit(): void {
  }

}
