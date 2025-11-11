/**
 * Componente de Botão de Consulta
 *
 * Em React Native:
 * - Componentes são como Classes/UserControls em C#
 * - Props são como propriedades públicas
 * - View = Container/Panel
 * - Text = Label
 * - TouchableOpacity = Button (com efeito de transparência ao tocar)
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

/**
 * Interface Props (propriedades do componente)
 * Similar a propriedades públicas em C#
 */
interface ConsultaButtonProps {
  titulo: string;
  onPress: () => void;
  loading?: boolean;
  cor?: string;
}

/**
 * Componente funcional (similar a um método que retorna UI)
 */
export default function ConsultaButton({
  titulo,
  onPress,
  loading = false,
  cor = '#E31937', // Vermelho Flamengo
}: ConsultaButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: cor }]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.buttonText}>{titulo}</Text>
      )}
    </TouchableOpacity>
  );
}

/**
 * StyleSheet é como CSS, mas em JavaScript
 * Similar a estilos inline em WPF/XAML
 */
const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
