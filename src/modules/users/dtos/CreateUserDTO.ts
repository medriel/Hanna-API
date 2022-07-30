export interface CreateUserDTO {
  name: string;
  user_name: string;
  email: string;
  password: string;
  company_id: string;
}

export interface UserLoginDTO {
  user_name: string;
  password: string;
}