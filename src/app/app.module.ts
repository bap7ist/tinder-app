import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SwipeComponent } from './swipe/swipe.component';
import { ConnectionModalComponent } from './connection-modal/connection-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { TinderCardComponent } from './tinder-card/tinder-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SwipeComponent,
    ConnectionModalComponent,
    TinderCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatIconModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
