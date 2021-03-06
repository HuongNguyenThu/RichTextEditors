import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-quill',
  templateUrl: './ngx-quill.component.html',
  styleUrls: ['./ngx-quill.component.scss']
})
export class NgxQuillComponent {

  htmlContent = '';
  hasFocus = false;
  subject: string ='';

  config={
    //toolbar: '.toolbar',
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button
        
        ['link', 'image', 'video']  
      ],
      
    },
    keyboard: {
      bindings: {
        // shiftEnter: {
        //   key: 13,
        //   shiftKey: true,
        //   handler: (range, context) => {
        //     // Handle shift+enter
        //     console.log("shift+enter")
        //   }
        // },
        enter:{
          key:13,
          handler: (range: any, context: any)=>{
            console.log("enter");
            return true;
          }
        }
      }
    }
  }

  constructor(
   
  ){

  }

  test=(event:any)=>{
    console.log(event.keyCode);
  }

  onSelectionChanged = (event: any) =>{
    if(event.oldRange == null){
      this.onFocus();
    }
    if(event.range == null){
      this.onBlur();
    }
  }

  onContentChanged = (event: any) =>{
    //console.log(event.html);
  }

  onFocus = () =>{
    console.log("On Focus");
  }
  onBlur = () =>{
    console.log("Blurred");
  }

}
