/**
 * Funções utilitárias para formatação de dados
 *
 * Este arquivo contém funções auxiliares para formatar valores
 * e datas usados no aplicativo
 */

/**
 * Formata valor em Real brasileiro
 *
 * @param valor - Valor numérico
 * @returns String formatada (ex: R$ 1.000,00)
 */
export function formatarValor(valor?: number): string {
  if (!valor) return 'R$ 0,00';

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

/**
 * Formata data brasileira
 *
 * @param data - String de data ISO
 * @returns String formatada (ex: 01/12/2024)
 */
export function formatarData(data?: string): string {
  if (!data) return '-';

  try {
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
  } catch {
    return data;
  }
}
