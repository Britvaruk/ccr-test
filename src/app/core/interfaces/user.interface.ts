export interface User {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserPage {
  data: User;
}

export interface UsersPage {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: User[];
}