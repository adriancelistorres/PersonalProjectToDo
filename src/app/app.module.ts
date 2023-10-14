import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoBodyComponent } from './intranet/components/body/to-do-body/to-do-body.component';
import { HeaderComponent } from './core/shared/header/header.component';
import { ToDoHeaderComponent } from './intranet/components/header/to-do-header/to-do-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoBodyComponent,
    HeaderComponent,
    ToDoHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
