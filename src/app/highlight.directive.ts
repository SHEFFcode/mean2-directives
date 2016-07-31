import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
