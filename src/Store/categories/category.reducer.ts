import { setCategories } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.type';

import { getCategoriesAndDocuments } from '../../utils/FireBase/FireBase';

const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {}
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as setCategories
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
