import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuOpen = false;

  constructor(private _elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  onclick(target) {
    const insideMenu = this._elementRef.nativeElement.contains(target);
    if(!insideMenu && this.menuOpen === true) {
      this.menuOpen = false;
    }
  }

  ngOnInit() { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    if (window.outerWidth < 768) {
      this.menuOpen = false;
    }
  }
}
