export interface User {
  userId: number;
  imageUrl: string;
  first_name: string;
  last_name: string;
  cpf: number;
  email: string;
  instagram: string;
  password: string;
  confirm_password: string;
  permissions: string;
  phone: number;
  pushToken: string;
  push_notification: boolean;
}
