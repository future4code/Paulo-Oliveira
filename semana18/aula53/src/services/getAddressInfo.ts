import axios from "axios";
import { addressInfo } from "../types";

export const getAddressInfo = async (
  cep: string
): Promise<addressInfo > => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const address: addressInfo = {
      street: response.data.logradouro,
      neighborhood: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf
    };

    return address;
  } catch (err){
    throw new Error(err.message)
  }
}