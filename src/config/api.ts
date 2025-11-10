/**
 * Constantes da API do PNCP (Portal Nacional de Contratações Públicas)
 * Base URL: https://pncp.gov.br/api/
 */

export const PNCP_BASE_URL = 'https://pncp.gov.br/api/consulta/v1';

export const API_ENDPOINTS = {
  // Endpoint para consultar licitações
  LICITACOES: '/orgaos/{cnpj}/licitacoes',

  // Endpoint para consultar contratos
  CONTRATOS: '/orgaos/{cnpj}/contratos',

  // Endpoint para consultar dispensas
  DISPENSAS: '/orgaos/{cnpj}/dispensas',

  // Endpoint para consultar órgãos
  ORGAOS: '/orgaos',
};

/**
 * CNPJ de exemplo para testes
 * (Você pode substituir por qualquer CNPJ de órgão público)
 */
export const CNPJ_EXEMPLO = '00394460005887'; // Ministério da Economia (exemplo)
