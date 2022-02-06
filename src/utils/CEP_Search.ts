import axios from 'axios';

async function findAdress(cep: string){
  return await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}

export { findAdress }