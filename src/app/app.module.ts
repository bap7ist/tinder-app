import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SwipeComponent } from './swipe/swipe.component';
import { ConnectionModalComponent } from './connection-modal/connection-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SwipeComponent,
    ConnectionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
