import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { PradeepdialogExampleComponent } from '../pradeepdialog-example/pradeepdialog-example.component';

@Component({
  selector: 'app-pradeepdialog',
  templateUrl: './pradeepdialog.component.html',
  styleUrls: ['./pradeepdialog.component.css']
})
export class PradeepdialogComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  openDialog(){
    this.dialog.open(PradeepdialogExampleComponent);
  }
  openDialog2(){
    let dialogRef=this.dialog.open(PradeepdialogExampleComponent);
  }
  openDialog3(){
    let dialogRef=this.dialog.open(PradeepdialogExampleComponent,{data:{name:'Pradeep'}});
    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }
}
