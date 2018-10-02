import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SpendingModule } from './modules/spending/spending.module';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeModule,
    SpendingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
