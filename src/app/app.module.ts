import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompTestComponent } from './comp-test/comp-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CompTestComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
