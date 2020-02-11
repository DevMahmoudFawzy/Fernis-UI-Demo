import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxMasonryModule } from 'ngx-masonry';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArtWorkComponent } from './art-work/art-work.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { MainHeaderComponent } from './shared/layouts/main-layout/main-header/main-header.component';
import { MainFooterComponent } from './shared/layouts/main-layout/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtWorkComponent,
    MainLayoutComponent,
    MainHeaderComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    NgxMasonryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
