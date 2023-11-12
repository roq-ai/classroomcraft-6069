import { LearningModuleInterface } from 'interfaces/learning-module';
import { LessonPlanInterface } from 'interfaces/lesson-plan';
import { ProposalInterface } from 'interfaces/proposal';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  description?: string;
  subject: string;
  grade_level: number;
  created_by: string;
  created_at?: any;
  updated_at?: any;
  learning_module?: LearningModuleInterface[];
  lesson_plan?: LessonPlanInterface[];
  proposal?: ProposalInterface[];
  user?: UserInterface;
  _count?: {
    learning_module?: number;
    lesson_plan?: number;
    proposal?: number;
  };
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  subject?: string;
  created_by?: string;
}
