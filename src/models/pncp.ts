/**
 * Tipos TypeScript para os dados do PNCP
 *
 * Nota: TypeScript é similar ao C#, mas com algumas diferenças:
 * - interface (TS) = interface (C#)
 * - type (TS) = type alias (C#)
 * - string, number, boolean são tipos primitivos
 * - ? indica propriedade opcional (como nullable em C#)
 *
 * Baseado na documentação oficial da API do PNCP
 * Swagger: https://pncp.gov.br/api/consulta/swagger-ui/index.html
 */

/**
 * Interface para Contratação (retornada pela API)
 * Representa licitações, dispensas e outros tipos de contratação
 */
export interface Contratacao {
  srp?: boolean;
  orgaoEntidade?: {
    cnpj?: string;
    razaoSocial?: string;
    poderId?: string;
    esferaId?: string;
  };
  anoCompra?: number;
  sequencialCompra?: number;
  dataInclusao?: string;
  dataPublicacaoPncp?: string;
  dataAtualizacao?: string;
  numeroCompra?: string;
  unidadeOrgao?: {
    ufNome?: string;
    codigoUnidade?: string;
    nomeUnidade?: string;
    ufSigla?: string;
    municipioNome?: string;
    codigoIbge?: string;
  };
  amparoLegal?: {
    descricao?: string;
    nome?: string;
    codigo?: number;
  };
  dataAberturaProposta?: string;
  dataEncerramentoProposta?: string;
  informacaoComplementar?: string;
  processo?: string;
  objetoCompra?: string;
  linkSistemaOrigem?: string;
  justificativaPresencial?: string;
  valorTotalHomologado?: number;
  numeroControlePNCP?: string;
  modoDisputaId?: number;
  dataAtualizacaoGlobal?: string;
  modalidadeId?: number;
  linkProcessoEletronico?: string;
  valorTotalEstimado?: number;
  modoDisputaNome?: string;
  tipoInstrumentoConvocatorioCodigo?: number;
  tipoInstrumentoConvocatorioNome?: string;
  fontesOrcamentarias?: any[];
  situacaoCompraId?: number;
  situacaoCompraNome?: string;
  usuarioNome?: string;
  modalidadeNome?: string;
  situacaoCompra?: string; // Alias para compatibilidade
}

/**
 * Interface para Licitação (alias de Contratacao para compatibilidade)
 */
export interface Licitacao extends Contratacao {
  numeroCompra?: string;
  anoCompra?: number;
  sequencialCompra?: number;
  numeroControlePNCP?: string;
  linkSistemaOrigem?: string;
  orgaoEntidade?: {
    cnpj?: string;
    razaoSocial?: string;
    poderId?: string;
    esferaId?: string;
  };
  unidadeOrgao?: {
    codigoUnidade?: string;
    nomeUnidade?: string;
  };
  dataPublicacaoPncp?: string;
  dataAberturaProposta?: string;
  situacaoCompra?: string;
  objetoCompra?: string;
  valorTotalEstimado?: number;
  modalidadeNome?: string;
  modoDisputaNome?: string;
}

/**
 * Interface para Contrato
 */
export interface Contrato {
  numeroControlePNCP?: string;
  anoCompra?: number;
  numeroCompra?: number;
  sequencialCompra?: number;
  numeroContrato?: string;
  anoContrato?: number;
  dataAssinatura?: string;
  dataVigenciaInicio?: string;
  dataVigenciaFim?: string;
  valorInicial?: number;
  objeto?: string;
  razaoSocialFornecedor?: string;
  niFornecedor?: string;
  situacaoContrato?: string;
  orgaoEntidade?: {
    cnpj?: string;
    razaoSocial?: string;
  };
}

/**
 * Interface para Dispensa (alias de Contratacao com modalidade 8)
 */
export interface Dispensa extends Contratacao {
  fundamentacaoLegal?: {
    descricao?: string;
    numero?: string;
  };
}

/**
 * Interface para Órgão
 */
export interface Orgao {
  cnpj?: string;
  razaoSocial?: string;
  esferaId?: string;
  poderId?: string;
  codigoIBGE?: string;
  tipoOrgao?: string;
}

/**
 * Resposta paginada da API do PNCP
 * Estrutura retornada pelos endpoints de consulta
 */
export interface ApiResponsePaginada<T> {
  data: T[];
  totalRegistros: number;
  totalPaginas: number;
  numeroPagina: number;
  paginasRestantes: number;
  empty: boolean;
}

/**
 * Tipo genérico para resposta da API (mantido para compatibilidade)
 * @deprecated Use ApiResponsePaginada
 */
export interface ApiResponse<T> {
  data: T[];
  count?: number;
  page?: number;
  totalPages?: number;
}

/**
 * Tipo para indicar qual consulta está sendo feita
 */
export type TipoConsulta = 'licitacoes' | 'contratos' | 'dispensas' | 'orgaos';
