import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SpendingModule } from '../spending/spending.module';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SpendingModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
