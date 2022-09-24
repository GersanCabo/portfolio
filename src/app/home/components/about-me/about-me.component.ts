import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  //Array with
  /*
  arrayTechnologies: Array<string> = [
    "JavaScript",
    "PHP",
    "Java",
    "SQL",
    "Angular",
    "React",
    "Docker",
    "Git",
    "CSS",
    "JSON",
    "XML",
    "Linux",
    "Unit Testing"
  ]
  */

  constructor() { }

  ngOnInit(): void {
    //this.createDivsTechnologies();
  }

  /*
  createDivsTechnologies() {
    this.arrayTechnologies.forEach(technology => {
      let spanTechnology = document.createElement("div");
      spanTechnology.textContent = technology;
      spanTechnology.style.position = "absolute";
      spanTechnology.style.top = (100 * Math.random()) + "%";
      spanTechnology.style.left = (100 * Math.random()) + "%";
      document.getElementById("prov")?.appendChild(spanTechnology);
    });
  }
  */
}
