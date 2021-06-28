import { ErrorMessage } from 'utils/types/interfaces';
import { ProcessStatus } from 'utils/types/enums';

export type AuthTokenType = string;

export interface UserData {
  email: string;
  password: string;
  login?: string;
}

export interface AuthState {
  authToken: AuthTokenType;
  login: UserData['login'];
  authProcess: ProcessStatus;
  error?: ErrorMessage;
}
