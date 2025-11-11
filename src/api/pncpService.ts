/**
 * Serviço de API do PNCP
 *
 * Este arquivo é similar a uma classe de serviço em C#
 * Aqui fazemos as chamadas HTTP para a API do PNCP
 *
 * Documentação: https://pncp.gov.br/api/consulta/swagger-ui/index.html
 */

import { PNCP_BASE_URL, API_ENDPOINTS, MODALIDADES } from '../config/api';
import type { Licitacao, Contrato, Dispensa, Orgao, ApiResponsePaginada, Contratacao } from '../models/pncp';

/**
 * Parâmetros para busca de contratações
 */
export interface ParamsBuscaContratacoes {
  dataInicial: Date;
  dataFinal: Date;
  codigoModalidade: number;
  uf?: string; // Sigla do estado (ex: 'SP', 'RJ')
  cnpj?: string;
  pagina?: number;
  tamanhoPagina?: number;
}

/**
 * Tipo de busca: por publicação ou por proposta
 */
export type TipoBusca = 'publicacao' | 'proposta';

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
 * Formata data no formato AAAAMMDD exigido pela API
 * @param date - Objeto Date
 * @returns String no formato AAAAMMDD
 */
export function formatarDataApi(date: Date): string {
  const ano = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const dia = String(date.getDate()).padStart(2, '0');
  return `${ano}${mes}${dia}`;
}

/**
 * Obtém o primeiro e último dia do mês atual
 * @returns {dataInicial, dataFinal}
 */
export function obterPrimeiroeUltimoDiaDoMes(): { dataInicial: Date; dataFinal: Date } {
  const hoje = new Date();
  const dataInicial = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
  const dataFinal = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
  return { dataInicial, dataFinal };
}

/**
 * Busca contratações (genérica, funciona para publicação ou proposta)
 *
 * @param tipoBusca - 'publicacao' ou 'proposta'
 * @param params - Parâmetros da busca
 * @returns Promise com resposta paginada
 */
export async function buscarContratacoes(
  tipoBusca: TipoBusca,
  params: ParamsBuscaContratacoes
): Promise<ApiResponsePaginada<Contratacao>> {
  // Formata datas para o formato da API (AAAAMMDD)
  const dataFinalStr = formatarDataApi(params.dataFinal);

  // Constrói query parameters base
  const queryParams = new URLSearchParams({
    dataFinal: dataFinalStr,
    codigoModalidadeContratacao: String(params.codigoModalidade),
    pagina: String(params.pagina || 1),
    tamanhoPagina: String(params.tamanhoPagina || 10), // Padrão: 10 registros
  });

  // IMPORTANTE: Por Publicação usa dataInicial E dataFinal
  // Por Proposta usa APENAS dataFinal
  if (tipoBusca === 'publicacao') {
    const dataInicialStr = formatarDataApi(params.dataInicial);
    queryParams.append('dataInicial', dataInicialStr);
  }

  // Adiciona UF (estado) se fornecido
  if (params.uf) {
    queryParams.append('uf', params.uf);
  }

  // Adiciona CNPJ se fornecido
  if (params.cnpj) {
    queryParams.append('cnpj', params.cnpj);
  }

  // Seleciona endpoint baseado no tipo de busca
  const baseEndpoint = tipoBusca === 'publicacao'
    ? API_ENDPOINTS.CONTRATACOES_PUBLICACAO
    : API_ENDPOINTS.CONTRATACOES_PROPOSTA;

  const endpoint = `${baseEndpoint}?${queryParams.toString()}`;

  const response = await fetchApi<ApiResponsePaginada<Contratacao>>(endpoint);

  return response;
}

/**
 * Busca licitações (Pregões Eletrônicos)
 * Função simplificada para compatibilidade com código existente
 *
 * @param cnpj - CNPJ do órgão (opcional)
 * @param dataInicial - Data inicial (opcional, padrão: início do mês atual)
 * @param dataFinal - Data final (opcional, padrão: fim do mês atual)
 * @returns Promise com array de licitações
 */
export async function buscarLicitacoes(
  cnpj?: string,
  dataInicial?: Date,
  dataFinal?: Date
): Promise<Licitacao[]> {
  try {
    console.log('Buscando licitações...');

    // Define datas padrão: mês atual
    const datas = dataInicial && dataFinal
      ? { dataInicial, dataFinal }
      : obterPrimeiroeUltimoDiaDoMes();

    // Busca pregões eletrônicos (modalidade 6)
    const response = await buscarContratacoes('publicacao', {
      dataInicial: datas.dataInicial,
      dataFinal: datas.dataFinal,
      codigoModalidade: MODALIDADES.PREGAO_ELETRONICO,
      cnpj,
      pagina: 1,
      tamanhoPagina: 10,
    });

    console.log(`Encontradas ${response.totalRegistros} licitações`);

    return response.data || [];
  } catch (error) {
    console.error('Erro ao buscar licitações:', error);
    throw error;
  }
}

/**
 * Busca contratos
 *
 * TODO: Implementar quando o endpoint de contratos estiver disponível
 * Por enquanto, retorna array vazio
 *
 * @param cnpj - CNPJ do órgão (opcional)
 * @returns Promise com array de contratos
 */
export async function buscarContratos(cnpj?: string): Promise<Contrato[]> {
  try {
    console.log('Buscando contratos...');
    console.warn('Endpoint de contratos ainda não implementado');

    // TODO: Aguardando usuário fornecer endpoint correto de contratos
    return [];
  } catch (error) {
    console.error('Erro ao buscar contratos:', error);
    throw error;
  }
}

/**
 * Busca dispensas de licitação
 * Função simplificada para compatibilidade com código existente
 *
 * @param cnpj - CNPJ do órgão (opcional)
 * @param dataInicial - Data inicial (opcional, padrão: início do mês atual)
 * @param dataFinal - Data final (opcional, padrão: fim do mês atual)
 * @returns Promise com array de dispensas
 */
export async function buscarDispensas(
  cnpj?: string,
  dataInicial?: Date,
  dataFinal?: Date
): Promise<Dispensa[]> {
  try {
    console.log('Buscando dispensas...');

    // Define datas padrão: mês atual
    const datas = dataInicial && dataFinal
      ? { dataInicial, dataFinal }
      : obterPrimeiroeUltimoDiaDoMes();

    // Busca dispensas (modalidade 8)
    const response = await buscarContratacoes('publicacao', {
      dataInicial: datas.dataInicial,
      dataFinal: datas.dataFinal,
      codigoModalidade: MODALIDADES.DISPENSA,
      cnpj,
      pagina: 1,
      tamanhoPagina: 10,
    });

    console.log(`Encontradas ${response.totalRegistros} dispensas`);

    return response.data || [];
  } catch (error) {
    console.error('Erro ao buscar dispensas:', error);
    throw error;
  }
}

/**
 * Busca informações de órgãos
 *
 * TODO: Implementar quando o endpoint de órgãos estiver disponível
 * Por enquanto, retorna array vazio
 *
 * @returns Promise com array de órgãos
 */
export async function buscarOrgaos(): Promise<Orgao[]> {
  try {
    console.log('Buscando órgãos...');
    console.warn('Endpoint de órgãos ainda não implementado');

    // TODO: Aguardando usuário fornecer endpoint correto de órgãos
    return [];
  } catch (error) {
    console.error('Erro ao buscar órgãos:', error);
    throw error;
  }
}
