import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/de';

@Component({
  selector: 'app-ckeditor5-angular',
  templateUrl: './ckeditor5-angular.component.html',
  styleUrls: ['./ckeditor5-angular.component.scss']
})
export class Ckeditor5AngularComponent {

  public classicEditor = ClassicEditor;
  public config = {
    language: 'en'
  };

}
