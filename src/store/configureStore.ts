import { combineReducers, configureStore } from '@reduxjs/toolkit';
import login from './login';

import logger from '../middlewares/logger';
import localStorage from '../middlewares/localStorage';

const store: any = configureStore({
  reducer: combineReducers({ login, logger }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorage),
});

export default store;
