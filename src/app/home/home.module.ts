import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
