
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppComponent } from './app.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { QuillModule } from 'ngx-quill';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgxEditorModule } from 'ngx-editor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { NgxQuillComponent } from './editors/ngx-quill/ngx-quill.component';
import { KolkovAngularEditorComponent } from './editors/kolkov-angular-editor/kolkov-angular-editor.component';
import { AngularFroalaComponent } from './editors/angular-froala/angular-froala.component';
import { NgxEditorComponent } from './editors/ngx-editor/ngx-editor.component';
import { Ckeditor5AngularComponent } from './editors/ckeditor5-angular/ckeditor5-angular.component';

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    AngularEditorModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    MatSelectModule, 
    QuillModule.forRoot(),
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    NgxEditorModule,
    CKEditorModule
  ],
  declarations: [ AppComponent, KolkovAngularEditorComponent, NgxQuillComponent, AngularFroalaComponent, NgxEditorComponent, Ckeditor5AngularComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }