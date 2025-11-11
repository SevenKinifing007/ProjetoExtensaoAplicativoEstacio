/**
 * Componente de Picker/Dropdown customizado
 *
 * Seletor genérico para escolher entre opções
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export interface PickerOption {
  label: string;
  value: string | number;
}

interface CustomPickerProps {
  label: string;
  value: string | number;
  onValueChange: (value: string | number) => void;
  options: PickerOption[];
  enabled?: boolean;
}

export default function CustomPicker({
  label,
  value,
  onValueChange,
  options,
  enabled = true,
}: CustomPickerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={value}
          onValueChange={onValueChange}
          style={styles.picker}
          enabled={enabled}
        >
          {options.map((option) => (
            <Picker.Item
              key={String(option.value)}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
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
  pickerContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
});
