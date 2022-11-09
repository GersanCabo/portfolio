import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  visible: boolean = false;
  lastScrollTop: number = 0;
  firstTime: boolean = true;

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
      if (this.firstTime) {
        this.firstTime = false
        let navbar = document.getElementById("navbarTop");
        if (navbar) {
          navbar.style.zIndex = "3"
        }
      }
      if (pixelsScrolled && pixelsScrolled < this.lastScrollTop) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      this.lastScrollTop = pixelsScrolled <= 0 ? 0 : pixelsScrolled;
    })
  }
}
