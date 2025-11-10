/**
 * Serviço de API do PNCP
 *
 * Este arquivo é similar a uma classe de serviço em C#
 * Aqui fazemos as chamadas HTTP para a API do PNCP
 */

import { PNCP_BASE_URL, API_ENDPOINTS, CNPJ_EXEMPLO } from '../config/api';
import type { Licitacao, Contrato, Dispensa, Orgao } from '../models/pncp';

/**
 * Função auxiliar para fazer requisições HTTP
 * Similar ao HttpClient em C#
 */
async function fetchApi<T>(endpoint: string): Promise<T> {
  try {
    const url = `${PNCP_BASE_URL}${endpoint}`;
    console.log('Fazendo requisição para:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

/**
 * Busca licitações de um órgão
 *
 * @param cnpj - CNPJ do órgão (opcional, usa o CNPJ de exemplo se não fornecido)
 * @returns Promise com array de licitações
 */
export async function buscarLicitacoes(cnpj: string = CNPJ_EXEMPLO): Promise<Licitacao[]> {
  const endpoint = API_ENDPOINTS.LICITACOES.replace('{cnpj}', cnpj);
  const response = await fetchApi<any>(endpoint);

  // A API do PNCP retorna os dados em diferentes formatos
  // Vamos normalizar para sempre retornar um array
  if (Array.isArray(response)) {
    return response;
  } else if (response.data && Array.isArray(response.data)) {
    return response.data;
  } else if (response.items && Array.isArray(response.items)) {
    return response.items;
  } else {
    return [];
  }
}

/**
 * Busca contratos de um órgão
 *
 * @param cnpj - CNPJ do órgão (opcional, usa o CNPJ de exemplo se não fornecido)
 * @returns Promise com array de contratos
 */
export async function buscarContratos(cnpj: string = CNPJ_EXEMPLO): Promise<Contrato[]> {
  const endpoint = API_ENDPOINTS.CONTRATOS.replace('{cnpj}', cnpj);
  const response = await fetchApi<any>(endpoint);

  if (Array.isArray(response)) {
    return response;
  } else if (response.data && Array.isArray(response.data)) {
    return response.data;
  } else if (response.items && Array.isArray(response.items)) {
    return response.items;
  } else {
    return [];
  }
}

/**
 * Busca dispensas de um órgão
 *
 * @param cnpj - CNPJ do órgão (opcional, usa o CNPJ de exemplo se não fornecido)
 * @returns Promise com array de dispensas
 */
export async function buscarDispensas(cnpj: string = CNPJ_EXEMPLO): Promise<Dispensa[]> {
  const endpoint = API_ENDPOINTS.DISPENSAS.replace('{cnpj}', cnpj);
  const response = await fetchApi<any>(endpoint);

  if (Array.isArray(response)) {
    return response;
  } else if (response.data && Array.isArray(response.data)) {
    return response.data;
  } else if (response.items && Array.isArray(response.items)) {
    return response.items;
  } else {
    return [];
  }
}

/**
 * Busca informações de órgãos
 *
 * @returns Promise com array de órgãos
 */
export async function buscarOrgaos(): Promise<Orgao[]> {
  const endpoint = API_ENDPOINTS.ORGAOS;
  const response = await fetchApi<any>(endpoint);

  if (Array.isArray(response)) {
    return response;
  } else if (response.data && Array.isArray(response.data)) {
    return response.data;
  } else if (response.items && Array.isArray(response.items)) {
    return response.items;
  } else {
    return [];
  }
}

