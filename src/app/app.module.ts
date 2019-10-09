import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CallbackComponent } from './callback/callback.component';
import { ListsComponent } from './lists/lists.component';

import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from './profile/profile.component';
import { ElementsComponent } from './elements/elements.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallbackComponent,
    ListsComponent,
    ProfileComponent,
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
