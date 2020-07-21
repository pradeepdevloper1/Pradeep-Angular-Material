import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pradeeptab',
  templateUrl: './pradeeptab.component.html',
  styleUrls: ['./pradeeptab.component.css']
})
export class PradeeptabComponent implements OnInit {

  logChange(index){
    console.log(index);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
