// user model
export interface IUser {
    email: string;
    id: string;
  }
  // auth model
  export interface IAuthInfo {
    access_token?: string;
    refresh_token?: string;
  }