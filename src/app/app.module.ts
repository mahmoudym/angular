import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TpComponent } from './tp/tp.component';
import { AlphPipe } from './alph.pipe';
import { SortService } from './services/sort.service';
@NgModule({
  declarations: [
    AlphPipe,
    AppComponent,
    TpComponent,
    AlphPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
