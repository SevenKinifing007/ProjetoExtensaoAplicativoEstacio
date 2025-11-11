/**
 * Tela Principal do Aplicativo - VERSÃO COMPLETA
 *
 * Interface com:
 * - Abas (Por Publicação / Por Proposta)
 * - Filtros (Estado, Datas, Modalidade, Tipo)
 * - Paginação (100 registros por página)
 * - Listagem de resultados
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// Importar componentes
import ConsultaButton from '../components/ConsultaButton';
import ItemCard from '../components/ItemCard';
import DateInput from '../components/DateInput';
import CustomPicker, { PickerOption } from '../components/CustomPicker';

// Importar serviços e tipos
import {
  buscarContratacoes,
  TipoBusca,
  ParamsBuscaContratacoes,
  obterPrimeiroeUltimoDiaDoMes,
} from '../api/pncpService';
import type { Contratacao } from '../models/pncp';

// Importar funções utilitárias
import { formatarValor, formatarData } from '../utils/formatters';

// Importar constantes
import { ESTADOS_BRASIL, MODALIDADES } from '../config/api';

/**
 * Componente principal da tela
 */
export default function HomeScreen() {
  // ==================== ESTADOS ====================

  // Abas
  const [abaAtiva, setAbaAtiva] = useState<TipoBusca>('publicacao');

  // Filtros
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>('');
  const [modalidadeSelecionada, setModalidadeSelecionada] = useState<number>(MODALIDADES.PREGAO_ELETRONICO);
  const [dataInicial, setDataInicial] = useState<string>('');
  const [dataFinal, setDataFinal] = useState<string>('');

  // Resultados e paginação
  const [resultados, setResultados] = useState<Contratacao[]>([]);
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(0);
  const [totalRegistros, setTotalRegistros] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  // ==================== INICIALIZAÇÃO ====================

  React.useEffect(() => {
    // Define datas padrão (mês atual) quando o componente carrega
    const { dataInicial: di, dataFinal: df } = obterPrimeiroeUltimoDiaDoMes();
    setDataInicial(formatarDateParaInput(di));
    setDataFinal(formatarDateParaInput(df));
  }, []);

  // ==================== FUNÇÕES AUXILIARES ====================

  /**
   * Formata Date para string DD/MM/AAAA
   */
  function formatarDateParaInput(date: Date): string {
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  /**
   * Converte string DD/MM/AAAA para Date
   */
  function parseDataInput(dataStr: string): Date | null {
    const parts = dataStr.split('/');
    if (parts.length !== 3) return null;

    const dia = parseInt(parts[0], 10);
    const mes = parseInt(parts[1], 10) - 1;
    const ano = parseInt(parts[2], 10);

    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) return null;

    return new Date(ano, mes, dia);
  }

  /**
   * Valida datas
   */
  function validarDatas(): boolean {
    const df = parseDataInput(dataFinal);

    // Data final sempre obrigatória
    if (!df) {
      Alert.alert('Erro', 'Data final inválida. Use o formato DD/MM/AAAA');
      return false;
    }

    // Data inicial só obrigatória para "Por Publicação"
    if (abaAtiva === 'publicacao') {
      const di = parseDataInput(dataInicial);

      if (!di) {
        Alert.alert('Erro', 'Data inicial inválida. Use o formato DD/MM/AAAA');
        return false;
      }

      if (di > df) {
        Alert.alert('Erro', 'Data inicial não pode ser maior que data final');
        return false;
      }
    }

    return true;
  }

  // ==================== BUSCA ====================

  /**
   * Realiza a busca com os filtros atuais
   */
  const realizarBusca = async (pagina: number = 1) => {
    if (!validarDatas()) return;

    try {
      setLoading(true);

      const df = parseDataInput(dataFinal)!;

      // Data inicial só é usada em "Por Publicação"
      const di = abaAtiva === 'publicacao' ? parseDataInput(dataInicial)! : df;

      const params: ParamsBuscaContratacoes = {
        dataInicial: di,
        dataFinal: df,
        codigoModalidade: modalidadeSelecionada,
        uf: estadoSelecionado || undefined,
        pagina,
        tamanhoPagina: 10,
      };

      const response = await buscarContratacoes(abaAtiva, params);

      setResultados(response.data || []);
      setPaginaAtual(response.numeroPagina);
      setTotalPaginas(response.totalPaginas);
      setTotalRegistros(response.totalRegistros);

      if (response.data.length === 0) {
        Alert.alert('Aviso', 'Nenhum resultado encontrado para os filtros selecionados.');
      }
    } catch (error) {
      console.error('Erro ao buscar:', error);
      Alert.alert('Erro', 'Não foi possível buscar os dados. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Navega para próxima página
   */
  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      realizarBusca(paginaAtual + 1);
    }
  };

  /**
   * Navega para página anterior
   */
  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      realizarBusca(paginaAtual - 1);
    }
  };

  // ==================== OPÇÕES DOS PICKERS ====================

  const opcoesEstado: PickerOption[] = ESTADOS_BRASIL.map(e => ({
    label: e.nome,
    value: e.sigla,
  }));

  const opcoesModalidade: PickerOption[] = [
    { label: 'Pregão Eletrônico', value: MODALIDADES.PREGAO_ELETRONICO },
    { label: 'Pregão Presencial', value: MODALIDADES.PREGAO_PRESENCIAL },
    { label: 'Dispensa', value: MODALIDADES.DISPENSA },
    { label: 'Inexigibilidade', value: MODALIDADES.INEXIGIBILIDADE },
    { label: 'Concorrência Eletrônica', value: MODALIDADES.CONCORRENCIA_ELETRONICA },
    { label: 'Concorrência Presencial', value: MODALIDADES.CONCORRENCIA_PRESENCIAL },
    { label: 'Leilão Eletrônico', value: MODALIDADES.LEILAO_ELETRONICO },
    { label: 'Leilão Presencial', value: MODALIDADES.LEILAO_PRESENCIAL },
    { label: 'Concurso', value: MODALIDADES.CONCURSO },
    { label: 'Diálogo Competitivo', value: MODALIDADES.DIALOGO_COMPETITIVO },
    { label: 'Credenciamento', value: MODALIDADES.CREDENCIAMENTO },
    { label: 'Pré-qualificação', value: MODALIDADES.PRE_QUALIFICACAO },
    { label: 'Manifestação de Interesse', value: MODALIDADES.MANIFESTACAO_INTERESSE },
    { label: 'Chamada Pública', value: MODALIDADES.CHAMADA_PUBLICA },
    { label: 'Inaplicabilidade', value: MODALIDADES.INAPLICABILIDADE },
  ];

  // ==================== RENDERIZAÇÃO ====================

  /**
   * Renderiza um item da lista
   */
  const renderItem = ({ item }: { item: Contratacao }) => (
    <ItemCard
      titulo={`${item.modalidadeNome || 'N/A'} ${item.numeroCompra || ''}`}
      itens={[
        { label: 'Órgão', value: item.orgaoEntidade?.razaoSocial || 'N/A' },
        { label: 'Objeto', value: item.objetoCompra || 'N/A' },
        { label: 'Valor Estimado', value: formatarValor(item.valorTotalEstimado) },
        { label: 'Data Publicação', value: formatarData(item.dataPublicacaoPncp) },
        { label: 'UF', value: item.unidadeOrgao?.ufSigla || 'N/A' },
        { label: 'Município', value: item.unidadeOrgao?.municipioNome || 'N/A' },
        { label: 'Situação', value: item.situacaoCompraNome || 'N/A' },
      ]}
    />
  );

  /**
   * Renderiza o cabeçalho (abas + filtros)
   */
  const renderHeader = () => (
    <View>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Consulta PNCP</Text>
        <Text style={styles.subtitle}>Portal Nacional de Contratações Públicas</Text>
      </View>

      {/* Abas */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, abaAtiva === 'publicacao' && styles.tabActive]}
          onPress={() => setAbaAtiva('publicacao')}
        >
          <Text style={[styles.tabText, abaAtiva === 'publicacao' && styles.tabTextActive]}>
            Por Publicação
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, abaAtiva === 'proposta' && styles.tabActive]}
          onPress={() => setAbaAtiva('proposta')}
        >
          <Text style={[styles.tabText, abaAtiva === 'proposta' && styles.tabTextActive]}>
            Por Proposta
          </Text>
        </TouchableOpacity>
      </View>

      {/* Filtros */}
      <View style={styles.filtersContainer}>
        <CustomPicker
          label="Estado"
          value={estadoSelecionado}
          onValueChange={(value) => setEstadoSelecionado(String(value))}
          options={opcoesEstado}
        />

        <CustomPicker
          label="Modalidade"
          value={modalidadeSelecionada}
          onValueChange={(value) => setModalidadeSelecionada(Number(value))}
          options={opcoesModalidade}
        />

        {/* Data Inicial só aparece em "Por Publicação" */}
        {abaAtiva === 'publicacao' && (
          <DateInput
            label="Data Inicial"
            value={dataInicial}
            onChangeText={setDataInicial}
          />
        )}

        <DateInput
          label="Data Final"
          value={dataFinal}
          onChangeText={setDataFinal}
        />

        <ConsultaButton
          titulo="Buscar"
          onPress={() => realizarBusca(1)}
          loading={loading}
          cor="#1E40AF"
        />

        {/* Info de resultados */}
        {totalRegistros > 0 && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              {totalRegistros} registro(s) encontrado(s)
            </Text>
            <Text style={styles.infoText}>
              Página {paginaAtual} de {totalPaginas}
            </Text>
          </View>
        )}
      </View>
    </View>
  );

  /**
   * Renderiza os botões de paginação no rodapé
   */
  const renderFooter = () => {
    if (resultados.length === 0) return null;

    return (
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          style={[styles.pageButton, paginaAtual === 1 && styles.pageButtonDisabled]}
          onPress={paginaAnterior}
          disabled={paginaAtual === 1 || loading}
        >
          <Text style={styles.pageButtonText}>← Anterior</Text>
        </TouchableOpacity>

        <Text style={styles.pageInfo}>
          {paginaAtual} / {totalPaginas}
        </Text>

        <TouchableOpacity
          style={[styles.pageButton, paginaAtual === totalPaginas && styles.pageButtonDisabled]}
          onPress={proximaPagina}
          disabled={paginaAtual === totalPaginas || loading}
        >
          <Text style={styles.pageButtonText}>Próxima →</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // ==================== RENDERIZAÇÃO PRINCIPAL ====================

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={resultados}
        keyExtractor={(item, index) => `${item.numeroControlePNCP || index}`}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          !loading && resultados.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {totalRegistros === 0 && paginaAtual > 0
                  ? 'Nenhum resultado encontrado'
                  : 'Use os filtros acima e clique em "Buscar"'}
              </Text>
            </View>
          ) : null
        }
      />
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#1E40AF" />
        </View>
      )}
    </SafeAreaView>
  );
}

// ==================== ESTILOS ====================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  header: {
    backgroundColor: '#1E40AF',
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#E0E7FF',
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: '#1E40AF',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
  },
  tabTextActive: {
    color: '#1E40AF',
  },
  filtersContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  infoContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#EFF6FF',
    borderRadius: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#1E40AF',
    textAlign: 'center',
    marginBottom: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  pageButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#1E40AF',
    borderRadius: 8,
  },
  pageButtonDisabled: {
    backgroundColor: '#D1D5DB',
  },
  pageButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  pageInfo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
