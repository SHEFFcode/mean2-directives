import { Component } from '@angular/core';
import {Highlight} from "./highlight.directive";
import {Unless} from "./unless.directive";

@Component({
  moduleId: module.id,
  selector: 'js-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [Highlight, Unless]
})
export class AppComponent {
  //comment
  private switch = true;
  private items = [1, 2, 3, 4, 5];
  private value = 100; // change this value to trigger the other switch value on render
  onSwitch() {
    this.switch = !this.switch;
  }
}
