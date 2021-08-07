import {createStore} from 'redux';
import {searchbarReducer, searchbarActions} from './reducers/searchbarReducer';



const store = createStore(searchbarReducer.reducer)

export {store, searchbarActions};