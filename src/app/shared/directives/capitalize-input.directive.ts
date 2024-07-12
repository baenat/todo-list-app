import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[capitalizeInput]',
  standalone: true
})
export class CapitalizeInputDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    let value = (event.target as HTMLInputElement).value;

    this.elementRef.nativeElement.value = (value.length)
      ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      : value;
  }

}
