import {combineReducers} from 'redux';

import {reducer as films} from './films/films';
import {reducer as filter} from './filters/filter';
import {NameSpace} from './name-space';


export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.FILTER]: filter,
});
