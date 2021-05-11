import { ThemeEntity } from 'models/entities';

export interface TaskFormData {
  name: string;
  description: string;
  theme: ThemeEntity;
}
