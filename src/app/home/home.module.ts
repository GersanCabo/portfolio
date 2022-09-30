import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AboutMeComponent,
    FooterComponent,
    MyProjectsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
