import { Action as NgrxAction } from '@ngrx/store';

export interface Action extends NgrxAction {
  type: string;
  payload: any;
}

export const DEBIT = 'DEBIT'; // expenses
export const CREDIT = 'CREDIT'; // gains
export const RESET = 'RESET';

export function actionCreator(type: string, payload: any): Action {
  const verb = {
    type,
    payload
  };
  console.log(verb);
  return verb;
}

export interface InfoState {
  balance: number;
}

const initialState: InfoState = {
  balance: 1880
};

export function reducer(state: InfoState = initialState, action: Action) {
  switch (action.type) {
    case DEBIT:
      return Object.assign({}, state, {
        balance: state.balance - action.payload
      });

    case CREDIT:
      return Object.assign({}, state, {
        balance: state.balance + action.payload
      });

    case RESET:
      return 0;

    default:
      return state;
  }
}
