import {createStore} from 'redux';
import testReducer from '../../features/sandbox/testReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from './rootReducer';

export function configureStore() {
    return createStore(rootReducer, devToolsEnhancer())
}