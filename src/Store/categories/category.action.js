import { CATEGORIES_ACTION_TYPES } from './category.type';
import { createAction } from '../../utils/Reducer/reducer.utils';

export const setCategories = categoriesMap =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
