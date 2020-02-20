import {IAddress} from './IAddress';
import {ICompany} from './ICompany';

export interface IRobot {
  id: number,
  name: string,
  username?: string,
  email: string,
  address?: IAddress,
  phone?: string,
  website?: string,
  company?: ICompany
}