import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState } from '../store/app-state.interface';
import { CREDIT, DEBIT, RESET, actionCreator } from '../store/reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  balance$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.balance$ = this.store.pipe(
      select(x => x.main.balance)
    );
  }

  ngOnInit() {
    // this.store.subscribe(x => console.log(x));
  }

}
