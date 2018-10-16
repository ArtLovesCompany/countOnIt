import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSpendingComponent } from './add-spending/add-spending.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  declarations: [
    AddSpendingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
  ],
  exports: [AddSpendingComponent]
})
export class SpendingModule { }
