import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') get opened() {
    return this.isOpen;
  }
  @HostListener('click') open() {
    this.isOpen = !this.isOpen;
  }

  private isOpen = false;
}
