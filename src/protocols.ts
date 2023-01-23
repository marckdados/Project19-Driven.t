
export type ApplicationError = {
  name: string;
  message: string;
};

export type ViaCEPAddress = {
  cidade: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export type GetCEPAddress = {
  logradouro: string;
  cidade: string;
  complemento: string;
  bairro: string;
  uf: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};
