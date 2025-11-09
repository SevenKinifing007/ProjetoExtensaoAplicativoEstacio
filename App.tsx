/**
 * App.tsx - Arquivo principal do aplicativo
 *
 * Este é o ponto de entrada do aplicativo React Native
 * Similar ao Program.cs ou Main() em C#
 */

import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';

/**
 * Componente principal que renderiza a aplicação
 */
export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="light" />
    </>
  );
}
