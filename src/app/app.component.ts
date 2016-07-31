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
  private items = [1, 2, 3, 4, 5];
  onSwitch() {
    this.switch = !this.switch;
  }
}
