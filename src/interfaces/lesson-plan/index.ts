import { ContentInterface } from 'interfaces/content';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LessonPlanInterface {
  id?: string;
  content_id: string;
  created_by: string;
  duration: number;
  objectives: string;
  resources: string;
  assessment: string;
  created_at?: any;
  updated_at?: any;

  content?: ContentInterface;
  user?: UserInterface;
  _count?: {};
}

export interface LessonPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  content_id?: string;
  created_by?: string;
  objectives?: string;
  resources?: string;
  assessment?: string;
}
