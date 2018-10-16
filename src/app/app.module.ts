import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SpendingModule } from './modules/spending/spending.module';
import { reducer } from './modules/store/reducer';

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
    StoreModule.forRoot({ main: reducer }),
    StoreDevtoolsModule.instrument({ }),
    HomeModule,
    SpendingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
