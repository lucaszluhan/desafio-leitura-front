import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

interface CreateUserType {
  username: string;
  password: string;
}

export const createUser = async (user: CreateUserType) => {
  try {
    const result = await api.post("/user", user);
    return result.data;
  } catch (error: any) {
    if (error.request.response) {
      const result = error.request.response;
      return JSON.parse(result);
    }
    return {
      ok: false,
      message: error.toString(),
    };
  }
};

export interface LoginUserType {
  username: string;
  password: string;
}
export const loginUser = async (user: LoginUserType) => {
  try {
    const result = await api.post("/user/login", user);
    return result.data;
  } catch (error: any) {
    if (error.request.response) {
      const result = error.request.response;
      return JSON.parse(result);
    }
    return {
      ok: false,
      message: error.toString(),
    };
  }
};

export const listaLeitura = async (userId: string) => {
  try {
    const result = await api.get(`/user/${userId}/leituras`);
    return result.data;
  } catch (error: any) {
    if (error.request.response) {
      const result = error.request.response;
      return JSON.parse(result);
    }
    return {
      ok: false,
      message: error.toString(),
    };
  }
};

export interface CreateBookType {
  userId: string;
  nome: string;
  genero: string;
  numPaginas: number;
  data: string;
}

export const createBook = async (book: CreateBookType) => {
  try {
    const result = await api.post(`/user/${book.userId}/leituras`, book);
    return result.data;
  } catch (error: any) {
    if (error.request.response) {
      const result = error.request.response;
      return JSON.parse(result);
    }
    return {
      ok: false,
      message: error.toString(),
    };
  }
};
