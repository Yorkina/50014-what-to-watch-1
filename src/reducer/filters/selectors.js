import {NameSpace} from '../name-space';

const NAME_SPACE = NameSpace.FILTER;

export const getCurrentFilter = (state) => state[NAME_SPACE].activeItem;
