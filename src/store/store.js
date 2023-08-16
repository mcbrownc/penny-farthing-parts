import { compose, legacy_createStore as createStore, applyMiddlewar } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// root reducer

export const store = createStore(rootReducer)