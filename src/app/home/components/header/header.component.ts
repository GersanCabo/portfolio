import { Component, OnInit } from '@angular/core';
import { IMG_ADDRESS } from 'src/app/global/constants/img-address';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imgAddress = IMG_ADDRESS;

  constructor() { }

  ngOnInit(): void {
  }

}
