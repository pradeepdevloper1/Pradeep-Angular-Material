import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-pradeepsnackbar',
  templateUrl: './pradeepsnackbar.component.html',
  styleUrls: ['./pradeepsnackbar.component.css']
})

export class PradeepsnackbarComponent implements OnInit {

  constructor(private snackBar:MatSnackBar) { }
openSnackBar(message,action){
  this.snackBar.open(message,action);
}
openSnackBar2(message,action){
 let snackBarRef= this.snackBar.open(message,action);
 
 snackBarRef.afterDismissed().subscribe(()=>{
   console.log('The snackBar Was Dismissed');
 });
 snackBarRef.onAction().subscribe(()=>{
  console.log('The snackBar  Action Was Triggered');
 });
}
openSnackBar3(message,action){
  let snackBarRef= this.snackBar.open(message,action,{duration:2000});
  
  snackBarRef.afterDismissed().subscribe(()=>{
    console.log('The snackBar Was Dismissed');
  });
  snackBarRef.onAction().subscribe(()=>{
   console.log('The snackBar  Action Was Triggered');
  });
 }
 openCustomSnackBar(){
   this.snackBar.openFromComponent(CustomSnackBarComponent,{duration:2000})
 }
  ngOnInit(): void {
  }
}
@Component({
  selector:'custom-snackbar',
  template:`<span style='color:orange'>Custom Snackbar</span>`
})
export class CustomSnackBarComponent{}
