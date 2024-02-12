import  colecaoUf  from '../dados/dados.js';

//Retorna toda coleção
export const buscarUfs = () => {
  return colecaoUf;
}

//Busca de UF através do nome
export const buscarUfsPorNome = (nomeUf) => {
  return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

//Retorno de UF com id específica
export const buscarUfPorId = (id) => {
  const idUF = parseInt(id);
  return colecaoUf.find(uf => uf.id === idUF);
}