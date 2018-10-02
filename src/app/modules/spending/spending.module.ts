import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSpendingComponent } from './add-spending/add-spending.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  declarations: [
    AddSpendingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [AddSpendingComponent]
})
export class SpendingModule { }
