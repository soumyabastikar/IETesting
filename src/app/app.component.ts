import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'testIE';

  itemReadOnly = false;


  ngOnInit(): void {
    // window.onblur = function() {
    //   const inputEl = <HTMLInputElement>document.getElementById('inputName');
    //   inputEl.readOnly = true;
    //   inputEl.blur();
    //   console.log('Window onBlur called'+inputEl.readOnly);
    // };
  }

  // [readonly]="itemReadOnly"

  onBlurHandler(event) {

    const inputEl = <HTMLInputElement>document.getElementById('inputName');
    inputEl.readOnly = true;
    this.itemReadOnly = true;
    console.log('readOnly'+inputEl.readOnly);
    if(inputEl.readOnly){
      // inputEl.blur();
      console.log(event);
      event.srcElement.readOnly = true;
      console.log('blurred!');
    }
  }

  onEdit(){
    const inputEl = <HTMLInputElement>document.getElementById('inputName');
    inputEl.readOnly = false;
  }



}
