import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Expense } from '../models/expense.interface';
import { AppState } from '../../store/app-state.interface';
import { CREDIT, DEBIT, RESET, actionCreator } from '../../store/reducer';

@Component({
  selector: 'app-add-spending',
  templateUrl: './add-spending.component.html',
  styleUrls: ['./add-spending.component.css']
})
export class AddSpendingComponent implements OnInit {

  expense: Expense;

  constructor(private store: Store<AppState>) {}

  credit() {
    this.store.dispatch(actionCreator(CREDIT, 25));
  }

  debit() {
    this.store.dispatch(actionCreator(DEBIT, 25));
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.expense = form.value;
    console.log(this.expense);
  }

}
