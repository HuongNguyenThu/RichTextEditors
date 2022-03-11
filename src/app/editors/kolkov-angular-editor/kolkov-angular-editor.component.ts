import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-kolkov-angular-editor',
  templateUrl: './kolkov-angular-editor.component.html',
  styleUrls: ['./kolkov-angular-editor.component.scss']
})
export class KolkovAngularEditorComponent {

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
