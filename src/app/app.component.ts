import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  editors: string [] = ['Kolkov Angular Editor', 'NGX Quill', 'Angular Froala', 'NGX Editor', 'CKEditor5']
  
  editorFormControl = new FormControl('');

  currentEditor = '';

  changeEditor(e: any) {
    this.currentEditor = e.target.value;
  }

  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "Quote",
        class: "quote",
        tag: "blockquote"
      },
      {
        name: "Code",
        class: "code",
        tag:"code"
      },
      {
        name: "Title",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}

