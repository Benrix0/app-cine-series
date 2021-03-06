import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContentComponent } from './add-content/add-content.component';
import { SeeContentComponent } from './see-content/see-content.component';
import { SeeContentItemComponent } from './see-content-item/see-content-item.component';
import { SeeContentItemPageComponent } from './see-content-item-page/see-content-item-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPresentationComponent } from './add-presentation/add-presentation.component';
import { SeePresentationComponent } from './see-presentation/see-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    AddContentComponent,
    SeeContentComponent,
    SeeContentItemComponent,
    SeeContentItemPageComponent,
    MainPageComponent,
    NavBarComponent,
    AddPresentationComponent,
    SeePresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
