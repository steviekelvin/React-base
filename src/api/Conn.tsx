/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConnBase } from "./ConnBase";

// Exemplo de uso da classe base
export class Conn extends ConnBase {
  constructor() {
    const baseURL: string = import.meta.env.BASE_URL_BACKEND;
    const token: string = import.meta.env.TOKEN;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    super(baseURL, headers);
  }

  // Exemplo de método específico que faz uma requisição GET
  async get(endpoint: string): Promise<any> {
    return this.getBase(endpoint);
  }

  // Exemplo de método específico que faz uma requisição GET
  async post(endpoint: string, params: object): Promise<any> {
    return this.postBase(endpoint, params);
  }
}
