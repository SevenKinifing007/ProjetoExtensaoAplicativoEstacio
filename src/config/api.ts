/**
 * Constantes da API do PNCP (Portal Nacional de Contratações Públicas)
 * Base URL: https://pncp.gov.br/api/consulta/v1
 *
 * Documentação Swagger: https://pncp.gov.br/api/consulta/swagger-ui/index.html
 */

export const PNCP_BASE_URL = 'https://pncp.gov.br/api/consulta/v1';

/**
 * Endpoints da API do PNCP
 */
export const API_ENDPOINTS = {
  // Endpoint para consultar contratações por data de publicação
  // Parâmetros obrigatórios: dataInicial, dataFinal, codigoModalidadeContratacao, pagina
  CONTRATACOES_PUBLICACAO: '/contratacoes/publicacao',

  // TODO: Adicionar endpoint de contratos quando disponível
  CONTRATOS: '/contratos',

  // TODO: Adicionar endpoint de órgãos quando disponível
  ORGAOS: '/orgaos',
};

/**
 * Códigos de Modalidade de Contratação (tabela de domínio do PNCP)
 *
 * Fonte: Manual da API do PNCP
 */
export const MODALIDADES = {
  LEILAO_ELETRONICO: 1,
  DIALOGO_COMPETITIVO: 2,
  CONCURSO: 3,
  CONCORRENCIA_ELETRONICA: 4,
  CONCORRENCIA_PRESENCIAL: 5,
  PREGAO_ELETRONICO: 6,
  PREGAO_PRESENCIAL: 7,
  DISPENSA: 8,
  INEXIGIBILIDADE: 9,
  MANIFESTACAO_INTERESSE: 10,
  PRE_QUALIFICACAO: 11,
  CREDENCIAMENTO: 12,
  LEILAO_PRESENCIAL: 13,
  INAPLICABILIDADE: 14,
  CHAMADA_PUBLICA: 15,
};

/**
 * CNPJ de exemplo para filtros opcionais
 * (Você pode substituir por qualquer CNPJ de órgão público)
 */
export const CNPJ_EXEMPLO = '00394460005887';
