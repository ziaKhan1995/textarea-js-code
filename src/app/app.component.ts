import { Component, OnInit, ViewChild } from '@angular/core';
import { TextAreasCodeComponent } from './text-areas-code/text-areas-code.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment-task';
  @ViewChild('textAreaComponent') textAreaComponent:TextAreasCodeComponent | undefined;
  constructor(){

  }

  ngOnInit(): void {
    
  }

  onSendData(value:boolean){
    if(this.textAreaComponent){
      this.textAreaComponent?.initAndExecuteCode();
    }
  }
}
