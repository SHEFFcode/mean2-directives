import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  @Input() defaultColor = '#fff';
  @Input('highlight') highlightColor = '#B4D455';
  private backgroundColor = this.defaultColor;
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
