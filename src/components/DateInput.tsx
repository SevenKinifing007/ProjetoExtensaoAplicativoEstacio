/**
 * Componente de Input de Data
 *
 * Input simples de texto para entrada de datas no formato DD/MM/AAAA
 * Nota: React Native não tem DatePicker nativo multiplataforma
 */

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface DateInputProps {
  label: string;
  value: string; // Formato: DD/MM/AAAA
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function DateInput({
  label,
  value,
  onChangeText,
  placeholder = 'DD/MM/AAAA',
}: DateInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        keyboardType="numeric"
        maxLength={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#1F2937',
  },
});
