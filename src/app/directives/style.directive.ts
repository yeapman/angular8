import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() fontWeight: string = 'normal';
  @Input() dStyles: {border: '0px solid white' };
  constructor(private el: ElementRef, private rend: Renderer2) {
  this.rend.setStyle(el.nativeElement, 'color', 'red');
  }

  @HostBinding('style.color') myStyle = null;

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onClicks() {
    this.myStyle = this.color;

    // this.rend.setStyle(this.el.nativeElement, 'color', this.color);
    // this.rend.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
    // this.rend.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
  }

  @HostListener('mouseleave') onLeave() {
    this.myStyle = null;
    // this.rend.setStyle(this.el.nativeElement, 'color', null);
    // this.rend.setStyle(this.el.nativeElement, 'fontWeight', null);
  }

}
