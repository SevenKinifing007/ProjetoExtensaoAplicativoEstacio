/**
 * Tipos TypeScript para os dados do PNCP
 *
 * Nota: TypeScript é similar ao C#, mas com algumas diferenças:
 * - interface (TS) = interface (C#)
 * - type (TS) = type alias (C#)
 * - string, number, boolean são tipos primitivos
 * - ? indica propriedade opcional (como nullable em C#)
 */

/**
 * Interface para Licitação
 */
export interface Licitacao {
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
 * Interface para Dispensa
 */
export interface Dispensa {
  numeroCompra?: string;
  anoCompra?: number;
  sequencialCompra?: number;
  numeroControlePNCP?: string;
  orgaoEntidade?: {
    cnpj?: string;
    razaoSocial?: string;
    poderId?: string;
    esferaId?: string;
  };
  dataPublicacaoPncp?: string;
  objetoCompra?: string;
  valorTotalEstimado?: number;
  fundamentacaoLegal?: {
    descricao?: string;
    numero?: string;
  };
  situacaoCompra?: string;
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
 * Tipo genérico para resposta da API
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
