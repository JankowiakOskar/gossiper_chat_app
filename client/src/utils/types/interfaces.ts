export interface ErrorMessage {
  code?: number | string;
  errorMessage: string;
}

export interface Error {
  response: {
    code: number | string;
    data: string;
  };
}
