import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pradeepsidenavbar',
  templateUrl: './pradeepsidenavbar.component.html',
  styleUrls: ['./pradeepsidenavbar.component.css']
})
export class PradeepsidenavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  opened=false;
  log(state){
    console.log(state);
  }
}
