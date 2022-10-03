export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  company_id: string;
}

export interface UserLoginDTO {
  email: string;
  password: string;
}