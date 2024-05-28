import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { TextAreasCodeComponent } from './text-areas-code/text-areas-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgDompurifyModule } from '@tinkoff/ng-dompurify';

@NgModule({
  declarations: [		
    AppComponent,
      SubmitButtonComponent,
      TextAreasCodeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgDompurifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
