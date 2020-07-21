import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from'@angular/forms';

import { PradeepbuttonComponent } from './pradeepbutton/pradeepbutton.component';
import { PradeepiconComponent } from './pradeepicon/pradeepicon.component';
import { PradeepprogressspinnerComponent } from './pradeepprogressspinner/pradeepprogressspinner.component';
import { MaterialModule } from './material/material.module';
import { PradeepnavbarComponent } from './pradeepnavbar/pradeepnavbar.component';
import { PradeepsidenavbarComponent } from './pradeepsidenavbar/pradeepsidenavbar.component';
import { PradeepmenuComponent } from './pradeepmenu/pradeepmenu.component';
import { PradeeplistComponent } from './pradeeplist/pradeeplist.component';
import { PradeepgridlistComponent } from './pradeepgridlist/pradeepgridlist.component';
import { PradeepexpansionpanelComponent } from './pradeepexpansionpanel/pradeepexpansionpanel.component';
import { PradeepcardComponent } from './pradeepcard/pradeepcard.component';
import { PradeeptabComponent } from './pradeeptab/pradeeptab.component';
import { PradeepstepperComponent } from './pradeepstepper/pradeepstepper.component';
import { PradeepinputComponent } from './pradeepinput/pradeepinput.component';
import { PradeepselectComponent } from './pradeepselect/pradeepselect.component';
import { PradeepautocompleteComponent } from './pradeepautocomplete/pradeepautocomplete.component';
import { PradeepcheckboxComponent } from './pradeepcheckbox/pradeepcheckbox.component';
import { PradeepdatepickerComponent } from './pradeepdatepicker/pradeepdatepicker.component';
import { PradeeptooltipComponent } from './pradeeptooltip/pradeeptooltip.component';
import { PradeepsnackbarComponent } from './pradeepsnackbar/pradeepsnackbar.component';
import { CustomSnackBarComponent } from './pradeepsnackbar/pradeepsnackbar.component';
import { PradeepdialogComponent } from './pradeepdialog/pradeepdialog.component';
import { PradeepdialogExampleComponent } from './pradeepdialog-example/pradeepdialog-example.component';
import { PradeepdatatableComponent } from './pradeepdatatable/pradeepdatatable.component';
import { PradeepdatatablefilteringComponent } from './pradeepdatatablefiltering/pradeepdatatablefiltering.component';
@NgModule({
  declarations: [
    AppComponent,
    PradeepbuttonComponent,
    PradeepiconComponent,
    PradeepprogressspinnerComponent,
    PradeepnavbarComponent,
    PradeepsidenavbarComponent,
    PradeepmenuComponent,
    PradeeplistComponent,
    PradeepgridlistComponent,
    PradeepexpansionpanelComponent,
    PradeepcardComponent,
    PradeeptabComponent,
    PradeepstepperComponent,
    PradeepinputComponent,
    PradeepselectComponent,
    PradeepautocompleteComponent,
    PradeepcheckboxComponent,
    PradeepdatepickerComponent,
    PradeeptooltipComponent,
    PradeepsnackbarComponent,
    CustomSnackBarComponent,
    PradeepdialogComponent,
    PradeepdialogExampleComponent,
    PradeepdatatableComponent,
    PradeepdatatablefilteringComponent
  ],
  entryComponents:[CustomSnackBarComponent,PradeepdialogExampleComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
