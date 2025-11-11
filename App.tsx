/**
 * App.tsx - Arquivo principal do aplicativo
 *
 * Este é o ponto de entrada do aplicativo React Native
 * Gerencia a navegação entre telas:
 * - MenuScreen (tela inicial)
 * - HomeScreen (consultas PNCP)
 * - WebViewScreen (links externos)
 */

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { BackHandler } from 'react-native';
import MenuScreen from './src/screens/MenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import WebViewScreen from './src/screens/WebViewScreen';

type Screen = 'menu' | 'consultas' | 'webview';

/**
 * Componente principal que renderiza a aplicação
 */
export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu');
  const [webViewUrl, setWebViewUrl] = useState<string>('');

  /**
   * Gerencia o botão de voltar do Android
   */
  useEffect(() => {
    const backAction = () => {
      // Se não estiver no menu, volta para o menu
      if (currentScreen !== 'menu') {
        setCurrentScreen('menu');
        return true; // Indica que o evento foi tratado
      }
      // Se estiver no menu, permite sair do app
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [currentScreen]);

  /**
   * Navega para uma tela específica
   */
  const handleNavigate = (screen: string, url?: string) => {
    if (screen === 'webview' && url) {
      setWebViewUrl(url);
      setCurrentScreen('webview');
    } else if (screen === 'consultas') {
      setCurrentScreen('consultas');
    } else {
      setCurrentScreen('menu');
    }
  };

  /**
   * Volta para o menu principal
   */
  const handleBackToMenu = () => {
    setCurrentScreen('menu');
  };

  return (
    <>
      {currentScreen === 'menu' && <MenuScreen onNavigate={handleNavigate} />}
      {currentScreen === 'consultas' && <HomeScreen onBack={handleBackToMenu} />}
      {currentScreen === 'webview' && (
        <WebViewScreen url={webViewUrl} onBack={handleBackToMenu} />
      )}
      <StatusBar style="light" />
    </>
  );
}
