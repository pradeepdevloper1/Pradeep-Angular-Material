import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pradeepprogressspinner',
  templateUrl: './pradeepprogressspinner.component.html',
  styleUrls: ['./pradeepprogressspinner.component.css']
})
export class PradeepprogressspinnerComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

  showSpinner=false;
  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{this.showSpinner=false},5000)
  }
}
