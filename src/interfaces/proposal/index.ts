import { ContentInterface } from 'interfaces/content';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProposalInterface {
  id?: string;
  content_id: string;
  submitted_by: string;
  description?: string;
  status: string;
  submitted_at: any;
  created_at?: any;
  updated_at?: any;

  content?: ContentInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ProposalGetQueryInterface extends GetQueryInterface {
  id?: string;
  content_id?: string;
  submitted_by?: string;
  description?: string;
  status?: string;
}
