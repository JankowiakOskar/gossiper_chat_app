export interface ErrorMessage {
  code?: number;
  errorMessage: string;
}

export interface UserData {
  email: string;
  password: string;
  login?: string;
}

export interface AuthState {
  authToken: string;
  login: string;
  isAuthenticate: boolean;
  error?: ErrorMessage;
}
