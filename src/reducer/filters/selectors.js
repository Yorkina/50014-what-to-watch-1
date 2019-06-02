import {NameSpace} from '../name-space';

const NAMESPACE = NameSpace.FILTER;

export const getCurrentFilter = (state) => state[NAMESPACE].activeItem;
