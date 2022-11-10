import { CATEGORIES_ACTION_TYPES, Category } from './category.type';

import {
  createAction,
  ActionWithPayload
} from '../../utils/Reducer/reducer.utils';

export type setCategories = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
  Category[]
>;

export const setCategories = (categoriesMap: Category) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
