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
function formatarDataApi(date: Date): string {
  const ano = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const dia = String(date.getDate()).padStart(2, '0');
  return `${ano}${mes}${dia}`;
}

/**
 * Busca contratações por data de publicação
 *
 * @param dataInicial - Data inicial (padrão: 30 dias atrás)
 * @param dataFinal - Data final (padrão: hoje)
 * @param codigoModalidade - Código da modalidade (padrão: todos os pregões)
 * @param cnpj - CNPJ do órgão (opcional)
 * @param pagina - Número da página (padrão: 1)
 * @returns Promise com resposta paginada de contratações
 */
async function buscarContratacoesPorData(
  dataInicial?: Date,
  dataFinal?: Date,
  codigoModalidade?: number,
  cnpj?: string,
  pagina: number = 1
): Promise<ApiResponsePaginada<Contratacao>> {
  // Define datas padrão: últimos 30 dias
  const dataFim = dataFinal || new Date();
  const dataInicio = dataInicial || new Date(dataFim.getTime() - 30 * 24 * 60 * 60 * 1000);

  // Formata datas para o formato da API (AAAAMMDD)
  const dataInicialStr = formatarDataApi(dataInicio);
  const dataFinalStr = formatarDataApi(dataFim);

  // Modalidade padrão: Pregão Eletrônico (mais comum)
  const modalidade = codigoModalidade || MODALIDADES.PREGAO_ELETRONICO;

  // Constrói query parameters
  const params = new URLSearchParams({
    dataInicial: dataInicialStr,
    dataFinal: dataFinalStr,
    codigoModalidadeContratacao: String(modalidade),
    pagina: String(pagina),
  });

  // Adiciona CNPJ se fornecido
  if (cnpj) {
    params.append('cnpj', cnpj);
  }

  const endpoint = `${API_ENDPOINTS.CONTRATACOES_PUBLICACAO}?${params.toString()}`;

  return await fetchApi<ApiResponsePaginada<Contratacao>>(endpoint);
}

/**
 * Busca licitações (Pregões Eletrônicos e Presenciais)
 *
 * @param cnpj - CNPJ do órgão (opcional)
 * @param dataInicial - Data inicial (opcional, padrão: 30 dias atrás)
 * @param dataFinal - Data final (opcional, padrão: hoje)
 * @returns Promise com array de licitações
 */
export async function buscarLicitacoes(
  cnpj?: string,
  dataInicial?: Date,
  dataFinal?: Date
): Promise<Licitacao[]> {
  try {
    console.log('Buscando licitações...');

    // Busca pregões eletrônicos (modalidade 6)
    const response = await buscarContratacoesPorData(
      dataInicial,
      dataFinal,
      MODALIDADES.PREGAO_ELETRONICO,
      cnpj
    );

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
 *
 * @param cnpj - CNPJ do órgão (opcional)
 * @param dataInicial - Data inicial (opcional, padrão: 30 dias atrás)
 * @param dataFinal - Data final (opcional, padrão: hoje)
 * @returns Promise com array de dispensas
 */
export async function buscarDispensas(
  cnpj?: string,
  dataInicial?: Date,
  dataFinal?: Date
): Promise<Dispensa[]> {
  try {
    console.log('Buscando dispensas...');

    // Busca dispensas (modalidade 8)
    const response = await buscarContratacoesPorData(
      dataInicial,
      dataFinal,
      MODALIDADES.DISPENSA,
      cnpj
    );

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
