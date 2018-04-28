import { AppCategoryEnum } from '../enums/index';

export interface IApp {
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  description: string;
  link: string;
  category: AppCategoryEnum;
}
