/**
 * Menu Principal do Aplicativo PNCP
 *
 * Tela com 3 opções de navegação:
 * 1. Planejamento de Entregas PNCP - 2025 (Link Canva)
 * 2. Comunicados PNCP (Link gov.br)
 * 3. Consultas Públicas PNCP (Tela de consultas)
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

interface MenuScreenProps {
  onNavigate: (screen: string, url?: string) => void;
}

export default function MenuScreen({ onNavigate }: MenuScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>Click Fácil PNCP</Text>
          <Text style={styles.subtitle}>Consulta de dados de Licitações, Dispensas e Contratos junto ao PNCP</Text>
        </View>

        {/* Botões do Menu */}
        <View style={styles.menuContainer}>
          {/* Botão 1: Planejamento de Entregas */}
          <TouchableOpacity
            style={[styles.menuButton, styles.button1]}
            onPress={() =>
              onNavigate(
                'webview',
                'https://www.canva.com/design/DAGhWQpYvxQ/W5jxkp8x1CgMNPHu9sbXnQ/view?utm_content=DAGhWQpYvxQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8761e497b5'
              )
            }
          >
            <Text style={styles.buttonIcon}>📋</Text>
            <Text style={styles.buttonText}>Planejamento de Entregas PNCP - 2025</Text>
          </TouchableOpacity>

          {/* Botão 2: Comunicados PNCP */}
          <TouchableOpacity
            style={[styles.menuButton, styles.button2]}
            onPress={() =>
              onNavigate(
                'webview',
                'https://www.gov.br/compras/pt-br/acesso-a-informacao/comunicados'
              )
            }
          >
            <Text style={styles.buttonIcon}>📢</Text>
            <Text style={styles.buttonText}>Comunicados PNCP</Text>
          </TouchableOpacity>

          {/* Botão 3: Consultas Públicas */}
          <TouchableOpacity
            style={[styles.menuButton, styles.button3]}
            onPress={() => onNavigate('consultas')}
          >
            <Text style={styles.buttonIcon}>🔍</Text>
            <Text style={styles.buttonText}>Consultas Públicas PNCP</Text>
          </TouchableOpacity>
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Versão 1.0.0</Text>
          <Text style={styles.footerText}>Desenvolvido para consulta de dados públicos</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#000000', // Preto Flamengo
    paddingVertical: 48,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    gap: 20,
  },
  menuButton: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 6,
  },
  button1: {
    borderLeftColor: '#E31937', // Vermelho Flamengo
  },
  button2: {
    borderLeftColor: '#000000', // Preto Flamengo
  },
  button3: {
    borderLeftColor: '#E31937', // Vermelho Flamengo
  },
  buttonIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  footer: {
    padding: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 4,
  },
});
