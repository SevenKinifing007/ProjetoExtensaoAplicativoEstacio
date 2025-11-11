/**
 * Tela Principal do Aplicativo
 *
 * Esta é a tela principal onde o usuário verá os botões
 * e os resultados das consultas ao PNCP
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  FlatList,
} from 'react-native';

// Importar componentes
import ConsultaButton from '../components/ConsultaButton';
import ItemCard from '../components/ItemCard';

// Importar serviços e tipos
import {
  buscarLicitacoes,
  buscarDispensas,
} from '../api/pncpService';
import type { Licitacao, Dispensa } from '../models/pncp';

// Importar funções utilitárias
import { formatarValor, formatarData } from '../utils/formatters';

/**
 * Componente principal da tela
 *
 * useState é um "hook" do React para gerenciar estado
 * Similar a propriedades privadas em C# que disparam eventos ao mudar
 */
export default function HomeScreen() {
  // Estados (similar a variáveis privadas em C#)
  const [loading, setLoading] = useState(false);
  const [tipoConsulta, setTipoConsulta] = useState<string>('');
  const [licitacoes, setLicitacoes] = useState<Licitacao[]>([]);
  const [dispensas, setDispensas] = useState<Dispensa[]>([]);

  /**
   * Função para consultar licitações
   * Similar a um método privado async em C#
   */
  const consultarLicitacoes = async () => {
    try {
      setLoading(true);
      setTipoConsulta('licitacoes');

      console.log('Buscando licitações...');
      const dados = await buscarLicitacoes();

      if (dados.length === 0) {
        Alert.alert('Aviso', 'Nenhuma licitação encontrada.');
      }

      setLicitacoes(dados);
      setDispensas([]);
    } catch (error) {
      console.error('Erro ao buscar licitações:', error);
      Alert.alert('Erro', 'Não foi possível buscar as licitações. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Função para consultar dispensas
   */
  const consultarDispensas = async () => {
    try {
      setLoading(true);
      setTipoConsulta('dispensas');

      console.log('Buscando dispensas...');
      const dados = await buscarDispensas();

      if (dados.length === 0) {
        Alert.alert('Aviso', 'Nenhuma dispensa encontrada.');
      }

      setDispensas(dados);
      setLicitacoes([]);
    } catch (error) {
      console.error('Erro ao buscar dispensas:', error);
      Alert.alert('Erro', 'Não foi possível buscar as dispensas. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Retorna os dados a serem exibidos baseado no tipo de consulta
   */
  const getDados = (): (Licitacao | Dispensa)[] => {
    if (tipoConsulta === 'licitacoes') {
      return licitacoes;
    } else if (tipoConsulta === 'dispensas') {
      return dispensas;
    }
    return [];
  };

  /**
   * Renderiza um item da lista
   */
  const renderItem = ({ item, index }: { item: Licitacao | Dispensa; index: number }) => {
    if (tipoConsulta === 'licitacoes') {
      const licitacao = item as Licitacao;
      return (
        <ItemCard
          titulo={`Licitação ${licitacao.numeroCompra || 'N/A'}`}
          itens={[
            { label: 'Órgão', value: licitacao.orgaoEntidade?.razaoSocial || 'N/A' },
            { label: 'Objeto', value: licitacao.objetoCompra || 'N/A' },
            {
              label: 'Valor Estimado',
              value: formatarValor(licitacao.valorTotalEstimado),
            },
            {
              label: 'Data Publicação',
              value: formatarData(licitacao.dataPublicacaoPncp),
            },
            { label: 'Modalidade', value: licitacao.modalidadeNome || 'N/A' },
            { label: 'Situação', value: licitacao.situacaoCompra || 'N/A' },
          ]}
        />
      );
    } else if (tipoConsulta === 'dispensas') {
      const dispensa = item as Dispensa;
      return (
        <ItemCard
          titulo={`Dispensa ${dispensa.numeroCompra || 'N/A'}`}
          itens={[
            { label: 'Órgão', value: dispensa.orgaoEntidade?.razaoSocial || 'N/A' },
            { label: 'Objeto', value: dispensa.objetoCompra || 'N/A' },
            {
              label: 'Valor Estimado',
              value: formatarValor(dispensa.valorTotalEstimado),
            },
            {
              label: 'Data Publicação',
              value: formatarData(dispensa.dataPublicacaoPncp),
            },
            {
              label: 'Fundamentação Legal',
              value: dispensa.fundamentacaoLegal?.descricao || 'N/A',
            },
            { label: 'Situação', value: dispensa.situacaoCompra || 'N/A' },
          ]}
        />
      );
    }
    return null;
  };

  /**
   * Renderiza o cabeçalho da lista (header + botões)
   */
  const renderHeader = () => (
    <>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Consulta PNCP</Text>
        <Text style={styles.subtitle}>
          Portal Nacional de Contratações Públicas
        </Text>
      </View>

      {/* Botões de Consulta */}
      <View style={styles.buttonsContainer}>
        <ConsultaButton
          titulo="Consultar Licitações"
          onPress={consultarLicitacoes}
          loading={loading && tipoConsulta === 'licitacoes'}
          cor="#1E40AF"
        />

        <ConsultaButton
          titulo="Consultar Dispensas"
          onPress={consultarDispensas}
          loading={loading && tipoConsulta === 'dispensas'}
          cor="#DC2626"
        />
      </View>
    </>
  );

  /**
   * Renderização da interface (JSX - similar a XAML em WPF)
   * Usa FlatList única para evitar erro de VirtualizedList aninhado
   */
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={getDados()}
        keyExtractor={(item, index) => `${tipoConsulta}-${index}`}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          tipoConsulta ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Nenhum resultado encontrado</Text>
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
}

/**
 * Estilos da tela
 */
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
  buttonsContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
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
});
