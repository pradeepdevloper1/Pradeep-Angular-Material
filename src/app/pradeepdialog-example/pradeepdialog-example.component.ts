import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-pradeepdialog-example',
  templateUrl: './pradeepdialog-example.component.html',
  styleUrls: ['./pradeepdialog-example.component.css']
})
export class PradeepdialogExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data:any) { }

  ngOnInit(): void {
  }

}
