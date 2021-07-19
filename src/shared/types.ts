export interface Location {
  address?: string;
  state?: string;
  city?: string;
  zipCode?: string;
}

export interface User extends Location {
  SNN?: string;
  _id?: string;
  email: string;
  firstname?: string;
  lastname?: string;
  dateOfBirth?: string;
  gender?: string;
  phone?: string;
  needProfile?: boolean;
  picture?: string;
}
