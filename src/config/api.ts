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

  // Endpoint para consultar contratações por data de proposta
  // Parâmetros obrigatórios: dataInicial, dataFinal, codigoModalidadeContratacao, pagina
  CONTRATACOES_PROPOSTA: '/contratacoes/proposta',

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
 * Estados brasileiros (UF)
 */
export const ESTADOS_BRASIL = [
  { sigla: '', nome: 'Todos os Estados' },
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' },
];

/**
 * CNPJ de exemplo para filtros opcionais
 * (Você pode substituir por qualquer CNPJ de órgão público)
 */
export const CNPJ_EXEMPLO = '00394460005887';
