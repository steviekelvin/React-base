/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  AuthInterface,
  ChangePasswordInterface,
  ForgotPasswordInterface,
  LoginInterface,
  RegisterInterface,
  ResetPasswordInterface,
} from "../interfaces/AuthInterface copy";
import { Conn } from "./Conn";

// Exemplo de uso da classe base
export class Auth extends Conn implements AuthInterface {
  async login(params: LoginInterface): Promise<any> {
    return this.post("/auth/login", params);
  }

  async register(params: RegisterInterface): Promise<any> {
    return this.post("/auth/register", params);
  }

  async forgotPassword(params: ForgotPasswordInterface): Promise<any> {
    return this.post("/auth/forgot-password", params);
  }

  async resetPassword(params: ResetPasswordInterface): Promise<any> {
    return this.post("/auth/reset-password", params);
  }

  async changePassword(params: ChangePasswordInterface): Promise<any> {
    return this.post("/auth/change-password", params);
  }

  async refreshToken(): Promise<any> {
    return this.get("/auth/refresh-token");
  }

  async logout(): Promise<any> {
    return this.get("/auth/logout");
  }
}
