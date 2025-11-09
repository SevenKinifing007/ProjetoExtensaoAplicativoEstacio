/**
 * Componente Card para exibir um item da lista
 *
 * Card é um componente visual que agrupa informações
 * Similar a um Panel com borda e sombra em Windows Forms
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Interface para as propriedades do Card
 */
interface ItemCardProps {
  titulo: string;
  itens: Array<{
    label: string;
    value: string;
  }>;
}

/**
 * Componente que renderiza um card com informações
 */
export default function ItemCard({ titulo, itens }: ItemCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>

      {itens.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.label}>{item.label}:</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#1E40AF',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  itemContainer: {
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 2,
  },
  value: {
    fontSize: 14,
    color: '#1F2937',
  },
});
