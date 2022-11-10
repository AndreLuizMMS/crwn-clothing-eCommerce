export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  item: CategoryItem[];
};

export enum CATEGORIES_ACTION_TYPES {
  SET_CATEGORIES_MAP = 'category/SET_CATEGORIES_MAP'
}
