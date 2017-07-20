import { createStore } from 'redux';
import rootReducer from '../../../src/renderer/reducers';
import * as selectors from '../../../src/renderer/sagas/selectors';

describe('selectors', () => {
  const storeState = createStore(rootReducer).getState();

  it('should get auth.email', () => {
    expect(selectors.getMail(storeState)).toEqual('');
  });
});
