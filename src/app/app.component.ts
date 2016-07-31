import { Component } from '@angular/core';
import {Highlight} from "./highlight.directive";

@Component({
  moduleId: module.id,
  selector: 'js-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [Highlight]
})
export class AppComponent {
  private switch = true;
  onSwitch() {
    this.switch = !this.switch;
  }
}
