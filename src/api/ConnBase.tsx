import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export abstract class ConnBase {
  protected readonly axiosInstance: AxiosInstance;

  constructor(baseURL: string, headers?: Record<string, string>) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: headers || { "Content-Type": "application/json" },
    });
  }

  // Método para requisições GET, pode ser sobrescrito em classes derivadas
  async getBase<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(
        url,
        config
      );
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
      throw error; // Necessário para propagar o erro corretamente
    }
  }

  // Método para requisições POST, pode ser sobrescrito em classes derivadas
  async postBase<T>(
    url: string,
    params: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(
        url,
        params,
        config
      );
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
      throw error; // Necessário para propagar o erro corretamente
    }
  }

  // Método para tratar a resposta
  private handleResponse<T>(response: AxiosResponse<T>): T {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`
      );
    }
  }

  // Método para tratamento de erros, pode ser sobrescrito em classes derivadas
  protected handleError(error: unknown): void {
    if (axios.isAxiosError(error)) {
      console.error("Erro Axios:", error.response?.status, error.message);
    } else {
      console.error("Erro desconhecido:", error);
    }
    // Throw error has been added in the catch blocks of getBase and postBase methods.
  }
}
