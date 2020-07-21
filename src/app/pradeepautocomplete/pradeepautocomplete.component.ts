import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,startWith} from 'rxjs/operators'

@Component({
  selector: 'app-pradeepautocomplete',
  templateUrl: './pradeepautocomplete.component.html',
  styleUrls: ['./pradeepautocomplete.component.css']
})
export class PradeepautocompleteComponent implements OnInit {

  options:string[]=['Angular','React','Vue'];
  objectOptions=[
    {name:'Angular'},
    {name:'AngularMaterial'},
    {name:'Python'},
    {name:'Java'}
  ];
  myControl=new FormControl();
  filteredOptions:Observable<string[]>;
  ngOnInit(){
 this.filteredOptions=this.myControl.valueChanges.pipe(
   startWith(''),
   map(value=>this._filter(value))
   );
  }
  private _filter(value:string):string[]{
    const filterValue=value.toLowerCase();
    return this.options.filter(option=>
      option.toLowerCase().includes(filterValue)
    );
  }
  displayFn(subject){
    return subject? subject.name:undefined;
  }
  constructor() { }


}
