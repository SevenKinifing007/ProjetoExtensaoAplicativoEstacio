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
  ScrollView,
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
  buscarContratos,
  buscarDispensas,
} from '../api/pncpService';
import type { Licitacao, Contrato, Dispensa } from '../models/pncp';

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
  const [contratos, setContratos] = useState<Contrato[]>([]);
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
      setContratos([]);
      setDispensas([]);
    } catch (error) {
      console.error('Erro ao buscar licitações:', error);
      Alert.alert('Erro', 'Não foi possível buscar as licitações. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Função para consultar contratos
   */
  const consultarContratos = async () => {
    try {
      setLoading(true);
      setTipoConsulta('contratos');

      console.log('Buscando contratos...');
      const dados = await buscarContratos();

      if (dados.length === 0) {
        Alert.alert('Aviso', 'Nenhum contrato encontrado.');
      }

      setContratos(dados);
      setLicitacoes([]);
      setDispensas([]);
    } catch (error) {
      console.error('Erro ao buscar contratos:', error);
      Alert.alert('Erro', 'Não foi possível buscar os contratos. Verifique sua conexão.');
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
      setContratos([]);
    } catch (error) {
      console.error('Erro ao buscar dispensas:', error);
      Alert.alert('Erro', 'Não foi possível buscar as dispensas. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Renderiza a lista de resultados baseado no tipo de consulta
   */
  const renderResultados = () => {
    if (tipoConsulta === 'licitacoes' && licitacoes.length > 0) {
      return (
        <FlatList
          data={licitacoes}
          keyExtractor={(item, index) => `licitacao-${index}`}
          renderItem={({ item }) => (
            <ItemCard
              titulo={`Licitação ${item.numeroCompra || 'N/A'}`}
              itens={[
                { label: 'Órgão', value: item.orgaoEntidade?.razaoSocial || 'N/A' },
                { label: 'Objeto', value: item.objetoCompra || 'N/A' },
                {
                  label: 'Valor Estimado',
                  value: formatarValor(item.valorTotalEstimado),
                },
                {
                  label: 'Data Publicação',
                  value: formatarData(item.dataPublicacaoPncp),
                },
                { label: 'Modalidade', value: item.modalidadeNome || 'N/A' },
                { label: 'Situação', value: item.situacaoCompra || 'N/A' },
              ]}
            />
          )}
        />
      );
    }

    if (tipoConsulta === 'contratos' && contratos.length > 0) {
      return (
        <FlatList
          data={contratos}
          keyExtractor={(item, index) => `contrato-${index}`}
          renderItem={({ item }) => (
            <ItemCard
              titulo={`Contrato ${item.numeroContrato || 'N/A'}`}
              itens={[
                { label: 'Fornecedor', value: item.razaoSocialFornecedor || 'N/A' },
                { label: 'Objeto', value: item.objeto || 'N/A' },
                { label: 'Valor Inicial', value: formatarValor(item.valorInicial) },
                {
                  label: 'Data Assinatura',
                  value: formatarData(item.dataAssinatura),
                },
                {
                  label: 'Vigência',
                  value: `${formatarData(item.dataVigenciaInicio)} até ${formatarData(
                    item.dataVigenciaFim
                  )}`,
                },
                { label: 'Situação', value: item.situacaoContrato || 'N/A' },
              ]}
            />
          )}
        />
      );
    }

    if (tipoConsulta === 'dispensas' && dispensas.length > 0) {
      return (
        <FlatList
          data={dispensas}
          keyExtractor={(item, index) => `dispensa-${index}`}
          renderItem={({ item }) => (
            <ItemCard
              titulo={`Dispensa ${item.numeroCompra || 'N/A'}`}
              itens={[
                { label: 'Órgão', value: item.orgaoEntidade?.razaoSocial || 'N/A' },
                { label: 'Objeto', value: item.objetoCompra || 'N/A' },
                {
                  label: 'Valor Estimado',
                  value: formatarValor(item.valorTotalEstimado),
                },
                {
                  label: 'Data Publicação',
                  value: formatarData(item.dataPublicacaoPncp),
                },
                {
                  label: 'Fundamentação Legal',
                  value: item.fundamentacaoLegal?.descricao || 'N/A',
                },
                { label: 'Situação', value: item.situacaoCompra || 'N/A' },
              ]}
            />
          )}
        />
      );
    }

    return null;
  };

  /**
   * Renderização da interface (JSX - similar a XAML em WPF)
   */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
            titulo="Consultar Contratos"
            onPress={consultarContratos}
            loading={loading && tipoConsulta === 'contratos'}
            cor="#059669"
          />

          <ConsultaButton
            titulo="Consultar Dispensas"
            onPress={consultarDispensas}
            loading={loading && tipoConsulta === 'dispensas'}
            cor="#DC2626"
          />
        </View>

        {/* Resultados */}
        <View style={styles.resultsContainer}>{renderResultados()}</View>
      </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
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
  },
  resultsContainer: {
    flex: 1,
    marginTop: 16,
    paddingBottom: 24,
  },
});
