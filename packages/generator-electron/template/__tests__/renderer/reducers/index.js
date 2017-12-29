import { createStore } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import rootReducer from '../../../src/renderer/reducers';
import auth from '../../../src/renderer/reducers/auth';

describe('reducer/root', () => {
  it('should return initial state', () => {
    const state = createStore(rootReducer).getState();

    expect(state.auth).toEqual(auth(undefined, {}));
    expect(state.router).toEqual(router(undefined, {}));
  });
});
