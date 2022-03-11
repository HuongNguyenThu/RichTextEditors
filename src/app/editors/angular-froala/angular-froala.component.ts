import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-froala',
  templateUrl: './angular-froala.component.html',
  styleUrls: ['./angular-froala.component.scss']
})
export class AngularFroalaComponent {

  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
  }

}
