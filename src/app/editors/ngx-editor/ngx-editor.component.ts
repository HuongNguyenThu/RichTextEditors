import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-ngx-editor',
  templateUrl: './ngx-editor.component.html',
  styleUrls: ['./ngx-editor.component.scss']
})
export class NgxEditorComponent  {

  editor = new Editor();
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: '', disabled: false },
      Validators.required()
    ),
  });

}
