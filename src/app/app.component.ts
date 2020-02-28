import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  test: any = [];
  collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
  heads: any = [];
  copiedComment: string;
  constructor(){
    this.test = [
      {first: 'FteComment1',second:'Consultant1',third:'CopyComment1',paste:''},
      {first: 'FteComment2',second:'Consultant2',third:'CopyComment2',paste:''},
      {first: 'FteComment3',second:'Consultant3',third:'CopyComment3',paste:''},
      {first: 'FteComment4',second:'Consultant4',third:'CopyComment4',paste:''},
      {first: 'FteComment5',second:'Consultant5',third:'CopyComment5',paste:''}

    ];

    this.heads = ['first','second','third','paste']
    //this.test = this.test.sort((a, b) => (a- b) );
 //this.test.sort(this.collator.compare)
    console.log(this.test);
 }
 copyHere(kb: KeyboardEvent, index, name){
       if (kb.shiftKey && kb.keyCode == 67) {
  this.copiedComment =(<HTMLInputElement>document.getElementById("input_"+index+"_"+name)).value
  
    }

 }
 pasteHere(kb: KeyboardEvent, index, name){
   (<HTMLInputElement>document.getElementById("input_"+index+"_"+name)).value = this.copiedComment;
 }
}
