import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LibTbeModule } from 'lib-tbe';

const MATERIAL_MODULES = [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule
];


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibTbeModule,

    MATERIAL_MODULES
  ],
  providers: [


    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
