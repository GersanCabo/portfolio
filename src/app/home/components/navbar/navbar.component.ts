import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  visible: boolean = false;
  lastScrollTop: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.pageScrollDetected();
  }

  /**
   * Add a event listener that detect if the user scroll the page
   * and the direction of the scroll
   */
  pageScrollDetected() {
    window.addEventListener("scroll", () => {
      let pixelsScrolled = window.scrollY;
      if (pixelsScrolled && pixelsScrolled > this.lastScrollTop) {
        this.visible = false;
        console.log(this.visible);
      } else {
        this.visible = true;
        console.log(this.visible);
      }
      this.lastScrollTop = pixelsScrolled <= 0 ? 0 : pixelsScrolled;
    })
  }
}
