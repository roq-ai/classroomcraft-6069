import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InstitutionInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  website?: string;
  established_on?: any;
  name: string;
  created_at?: any;
  updated_at?: any;
  user?: UserInterface[];

  _count?: {
    user?: number;
  };
}

export interface InstitutionGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  website?: string;
  name?: string;
}
