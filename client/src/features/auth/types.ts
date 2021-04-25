import { ErrorMessage } from 'utils/types/interfaces';

export interface UserData {
  email: string;
  password: string;
  login?: string;
}

export interface AuthState {
  authToken: string;
  login: UserData['login'];
  isAuthenticate: boolean;
  error?: ErrorMessage;
}
