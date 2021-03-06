// @flow
import type { Action } from '/types';
import { SAVE_FILE_ENCRYPTION_KEY, LOGOUT, INCREMENT_WALLET_NUMBER, INCREMENT_ACCOUNT_NUMBER } from './actions';

type WalletState = {
  walletNumber: number,
  accountNumber: number,
  fileKey?: string | null
};

const initialState = {
  walletNumber: 0,
  accountNumber: 0,
  fileKey: null
};

const reducer = (state: WalletState = initialState, action: Action) => {
  switch (action.type) {
    case SAVE_FILE_ENCRYPTION_KEY: {
      const {
        payload: { key }
      } = action;
      return { ...state, fileKey: key };
    }
    case INCREMENT_WALLET_NUMBER: {
      return { ...state, walletNumber: state.walletNumber + 1 };
    }
    case INCREMENT_ACCOUNT_NUMBER: {
      return { ...state, accountNumber: state.accountNumber + 1 };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
