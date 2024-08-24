/* eslint-disable @typescript-eslint/no-explicit-any */

export interface LoginInterface {
  email: string;
  password: string;
}
export interface RegisterInterface {
  name: string;
  email: string;
  password: string;
}
export interface ForgotPasswordInterface {
  email: string;
}
export interface ResetPasswordInterface {
  password: string;
  token: string;
}
export interface ChangePasswordInterface {
  password: string;
  newPassword: string;
}
// export interface RefreshTokenInterface {
//   // refreshToken: string;
// }
// export interface LogoutInterface {
//   // refreshToken: string;
// }
export interface AuthInterface {
  login(params: LoginInterface): Promise<any>;
  register(params: RegisterInterface): Promise<any>;
  forgotPassword(params: ForgotPasswordInterface): Promise<any>;
  resetPassword(params: ResetPasswordInterface): Promise<any>;
  changePassword(params: ChangePasswordInterface): Promise<any>;
  refreshToken(): Promise<any>;
  logout(): Promise<any>;
}
