import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContentComponent } from './add-content/add-content.component';
import { SeeContentComponent } from './see-content/see-content.component';
import { SeeContentItemComponent } from './see-content-item/see-content-item.component';
import { SeeContentItemPageComponent } from './see-content-item-page/see-content-item-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContentComponent,
    SeeContentComponent,
    SeeContentItemComponent,
    SeeContentItemPageComponent,
    MainPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
