# 📱 Click Fácil PNCP

**Consulta de dados de Licitações, Dispensas e Contratos junto ao PNCP**

Aplicativo React Native desenvolvido com Expo para consulta de informações no Portal Nacional de Contratações Públicas (PNCP).

> **Projeto de Extensão - Universidade Estácio**
>
> Desenvolvimento de aplicativo para dispositivos móveis Android

---

## 🎯 Sobre o Projeto

O **Click Fácil PNCP** é um aplicativo mobile que facilita o acesso a dados públicos de contratações governamentais. Desenvolvido em **React Native** com **Expo**, oferece uma interface intuitiva e moderna para consulta de licitações, dispensas e contratos.

---

## ✨ Funcionalidades

### Menu Principal
- 📋 **Planejamento de Entregas PNCP - 2025** - Link para planejamento via Canva
- 📢 **Comunicados PNCP** - Acesso direto aos comunicados oficiais
- 🔍 **Consultas Públicas PNCP** - Sistema completo de consultas

### Sistema de Consultas
- **Por Publicação**: Consulta baseada na data de publicação dos dados
  - Filtro por Estado (UF)
  - Filtro por Modalidade (Pregão Eletrônico, Concorrência, etc.)
  - Filtro por Data Inicial e Data Final

- **Por Proposta**: Consulta baseada na data das propostas
  - Filtro por Estado (UF)
  - Filtro por Modalidade
  - Filtro por Data Final (apenas)

### Recursos
- ✅ Paginação com 10 registros por página
- ✅ Navegação com botão voltar do Android
- ✅ Layout adaptado para notch/câmera do celular
- ✅ Limpeza automática de resultados ao trocar de aba
- ✅ Visualização de links externos via WebView
- ✅ Tema visual Flamengo (Preto e Vermelho)

---

## 🎨 Identidade Visual

- **Cores principais**: Preto (#000000) e Vermelho Flamengo (#E31937)
- **Nome do app**: Click Fácil PNCP
- **Package ID**: com.estacio.clickfacilpncp
- **Versão**: 1.0.0

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Git** (opcional, para clonar o repositório)

---

## 🚀 Instalação

### 1. Clone o repositório (ou baixe o código):

```bash
git clone https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio.git
cd ProjetoExtensaoAplicativoEstacio
```

### 2. Instale as dependências:

```bash
npm install
```

---

## 📱 Como Executar o Aplicativo

Existem **4 formas** de rodar o aplicativo. Escolha a que melhor se adequa à sua necessidade:

---

## 🎯 Método 1: Celular com Expo Go (Recomendado)

**✅ Vantagens:** Mais rápido e simples, sem necessidade de configuração
**⏱️ Tempo:** 2 minutos
**📱 Ideal para:** Testes rápidos durante desenvolvimento

### Passo a passo:

#### No computador:

1. Abra o terminal na pasta do projeto

2. Execute o comando:
```bash
npm start
```

3. Um QR Code aparecerá no terminal e no navegador

#### No celular Android:

1. Instale o app **"Expo Go"** da Play Store:
   - Link: https://play.google.com/store/apps/details?id=host.exp.exponent

2. Abra o Expo Go

3. Toque em **"Scan QR Code"**

4. Aponte a câmera para o QR Code no terminal

5. O app será carregado automaticamente! 🎉

**⚠️ Importante:**
- Celular e computador devem estar na **mesma rede Wi-Fi**
- Primeira vez pode demorar 1-3 minutos para compilar

---

## 🌐 Método 2: Navegador Web

**✅ Vantagens:** Rápido para visualizar interface
**⚠️ Limitações:** Algumas funcionalidades mobile podem não funcionar 100%
**⏱️ Tempo:** 1 minuto

### Passo a passo:

1. **Instale as dependências web** (apenas primeira vez):
```bash
npx expo install react-dom react-native-web
```

2. **Execute o comando**:
```bash
npm run web
```

3. O navegador abrirá automaticamente em `http://localhost:8081`

**Ou**:
```bash
npm start
```
E pressione `w` no terminal para abrir no navegador.

---

## 🤖 Método 3: Emulador Android

**✅ Vantagens:** Testa exatamente como no celular real
**⚠️ Requer:** Android Studio instalado e configurado
**⏱️ Tempo:** 30-60 minutos (primeira configuração)
**📱 Ideal para:** Testes avançados sem celular físico

### Passo a passo:

#### 1. Instale o Android Studio:

1. Baixe em: https://developer.android.com/studio

2. Execute o instalador e siga as instruções

3. Na primeira execução:
   - Escolha **"Standard Installation"**
   - Aguarde o download do Android SDK (pode demorar)
   - Marque as opções:
     - ✅ Android SDK
     - ✅ Android SDK Platform
     - ✅ Android Virtual Device

#### 2. Configure as variáveis de ambiente:

**Windows:**

1. Pressione `Win + Pause` → **"Configurações avançadas do sistema"**

2. Clique em **"Variáveis de Ambiente"**

3. Em **"Variáveis do sistema"**, clique em **"Novo"**:

```
Nome: ANDROID_HOME
Valor: C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk
```

4. Edite a variável **`Path`** e adicione:
```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
```

5. **Reinicie o terminal** após configurar

**macOS/Linux:**

Adicione ao arquivo `~/.bashrc` ou `~/.zshrc`:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Execute: `source ~/.bashrc` (ou `source ~/.zshrc`)

#### 3. Crie um emulador Android:

1. Abra o Android Studio

2. Vá em **"Device Manager"** (ícone de celular na barra lateral direita)

3. Clique em **"Create Virtual Device"**

4. Escolha um modelo:
   - **Recomendado:** Pixel 5
   - Clique em **"Next"**

5. Baixe uma versão do Android:
   - **Recomendado:** Android 13 (API 33)
   - Clique no botão de download ao lado da versão
   - Aguarde o download (pode demorar 10-15 minutos)
   - Clique em **"Next"**

6. Clique em **"Finish"**

#### 4. Execute o app no emulador:

1. **Inicie o emulador:**
   - No Android Studio, no Device Manager
   - Clique no botão **▶️ (Play)** do emulador criado
   - Aguarde o emulador iniciar (1-3 minutos na primeira vez)

2. **Com o emulador rodando, execute:**
```bash
npm run android
```

3. **O que acontecerá:**
   - Metro Bundler iniciará
   - App será compilado
   - App será instalado no emulador automaticamente
   - App abrirá no emulador
   - **Primeira vez pode demorar 3-5 minutos**

#### ⚠️ Problemas Comuns:

**Erro: "adb não é reconhecido"**
- **Solução:** Reinicie o terminal após configurar as variáveis de ambiente
- **Solução 2:** Verifique se o caminho `ANDROID_HOME` está correto

**Emulador muito lento**
- **Solução:** Habilite virtualização (VT-x/AMD-V) na BIOS
- **Solução 2:** Use um celular físico com Expo Go (Método 1)

---

## 📦 Método 4: Gerar APK para Instalar

**✅ Vantagens:** App completo, instalável sem Expo Go
**🎯 Ideal para:** Distribuir para outras pessoas
**⏱️ Tempo:** 10-15 minutos (build na nuvem)
**☁️ Requer:** Conta gratuita no Expo

### Passo a passo:

#### 1. Instale o EAS CLI:

```bash
npm install -g eas-cli
```

#### 2. Crie uma conta no Expo (se não tiver):

- Acesse: https://expo.dev/signup
- Crie sua conta **(é gratuito)**
- Confirme o email

#### 3. Faça login no terminal:

```bash
eas login
```

Digite seu **email** e **senha** do Expo.

#### 4. Configure o projeto (primeira vez apenas):

```bash
eas build:configure
```

Pressione **Enter** para aceitar as configurações padrão.

#### 5. Gere o APK:

```bash
eas build --platform android --profile preview
```

**O que acontece:**
1. Código é enviado para a nuvem Expo
2. Build é feito nos servidores (100% gratuito)
3. Demora cerca de **10-15 minutos**
4. Você receberá um **link para download do APK**

#### 6. Baixe e instale o APK:

1. Acesse o link fornecido no terminal

2. Baixe o arquivo `.apk` no celular (ou computador e transfira via USB)

3. No Android:
   - **Configurações** → **Segurança**
   - Ative: **"Instalar apps de fontes desconhecidas"**
   - Ou permita apenas para o navegador/Chrome

4. Toque no arquivo APK baixado

5. Toque em **"Instalar"**

6. Aguarde a instalação

7. **Pronto!** O app está instalado! 🎉

**📝 Dica:** Você pode compartilhar o link do APK com outras pessoas para instalarem o app.

---

## 📁 Estrutura do Projeto

```
ProjetoExtensaoAplicativoEstacio/
├── App.tsx                       # Arquivo principal - Navegação entre telas
├── app.json                      # Configurações do Expo (nome, ícone, cores)
├── eas.json                      # Configurações para build de APK
├── package.json                  # Dependências do projeto
├── tsconfig.json                 # Configurações do TypeScript
│
├── src/
│   ├── api/
│   │   └── pncpService.ts       # Integração com API PNCP
│   │
│   ├── components/
│   │   ├── ConsultaButton.tsx   # Botão de busca customizado
│   │   ├── CustomPicker.tsx     # Dropdown genérico (Estados, Modalidades)
│   │   ├── DateInput.tsx        # Input de data (DD/MM/AAAA)
│   │   └── ItemCard.tsx         # Card de resultado com borda vermelha
│   │
│   ├── config/
│   │   └── api.ts               # URLs da API e constantes (Estados, Modalidades)
│   │
│   ├── models/
│   │   └── pncp.ts              # Interfaces TypeScript (tipos de dados)
│   │
│   ├── screens/
│   │   ├── MenuScreen.tsx       # Tela do menu principal (3 botões)
│   │   ├── HomeScreen.tsx       # Tela de consultas (abas e filtros)
│   │   └── WebViewScreen.tsx    # Tela de links externos (Canva, gov.br)
│   │
│   └── utils/
│       └── formatters.ts        # Funções de formatação (data, valor)
│
└── assets/                       # Imagens e ícones do app
    ├── icon.png
    ├── splash-icon.png
    └── adaptive-icon.png
```

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React Native** | 0.81.5 | Framework mobile cross-platform |
| **Expo** | ~54.0.23 | Plataforma de desenvolvimento |
| **TypeScript** | ~5.9.2 | Linguagem tipada (superset JavaScript) |
| **@react-native-picker/picker** | ^2.11.4 | Componente de dropdown |
| **react-native-webview** | ^13.16.0 | Visualização de páginas web |
| **Node.js** | 18+ | Ambiente de execução JavaScript |

---

## 🌐 API do PNCP

### Base URL
```
https://pncp.gov.br/api/consulta/v1
```

### Endpoints Utilizados

| Endpoint | Descrição |
|----------|-----------|
| `/contratacoes/publicacao` | Lista contratações por data de publicação |
| `/contratacoes/proposta` | Lista contratações por data de proposta |

### Parâmetros

- `dataInicial`: Data inicial (AAAAMMDD) - **Apenas para publicação**
- `dataFinal`: Data final (AAAAMMDD)
- `codigoModalidadeContratacao`: Código da modalidade (1, 8, etc.)
- `uf`: Sigla do estado (AC, SP, RJ, etc.)
- `pagina`: Número da página
- `tamanhoPagina`: Registros por página (máximo 10)

### Exemplo de Requisição

```typescript
const params = new URLSearchParams({
  dataInicial: '20250101',
  dataFinal: '20250131',
  codigoModalidadeContratacao: '8',
  uf: 'SP',
  pagina: '1',
  tamanhoPagina: '10'
});

const url = `https://pncp.gov.br/api/consulta/v1/contratacoes/publicacao?${params}`;
```

### Documentação Oficial

- **Portal PNCP:** https://pncp.gov.br/
- **Swagger API:** https://pncp.gov.br/api/swagger-ui.html

---

## 🔧 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia servidor de desenvolvimento |
| `npm run web` | Abre no navegador |
| `npm run android` | Roda no emulador Android |
| `npm install` | Instala dependências |
| `npx expo install <pacote>` | Instala pacote compatível com Expo |
| `eas login` | Login no Expo |
| `eas build --platform android --profile preview` | Gera APK |
| `eas whoami` | Verifica usuário logado |

---

## ⚠️ Problemas Comuns e Soluções

### ❌ Erro: "adb não é reconhecido"

**Causa:** Android SDK não configurado
**Solução:**
1. Siga os passos do **Método 3** acima
2. Configure as variáveis de ambiente `ANDROID_HOME`
3. Reinicie o terminal

### ❌ Erro: "Packages should be updated"

**Aviso sobre versões dos pacotes**

**Solução (opcional):**
```bash
npx expo install @react-native-picker/picker@2.11.1
npx expo install react-native-webview@13.15.0
```

**Nota:** Não é obrigatório - o app funciona com as versões atuais.

### ❌ Erro no `npm start`: "Access denied"

**Causa:** Problema de rede/firewall

**Soluções:**
1. Tente usar Git Bash em vez do PowerShell
2. Desative temporariamente o antivírus
3. Use modo túnel: `npm start -- --tunnel`

### ❌ QR Code não funciona no Expo Go

**Causa:** Celular e computador em redes Wi-Fi diferentes

**Soluções:**
1. Certifique-se de estar na mesma rede Wi-Fi
2. Desative VPN temporariamente
3. Use modo túnel: `npm start -- --tunnel`
4. Use o método do APK (Método 4)

### ❌ Build do APK falhou

**Soluções:**
1. Verifique se está logado: `eas whoami`
2. Tente novamente com cache limpo:
   ```bash
   eas build --platform android --profile preview --clear-cache
   ```
3. Veja os logs de erro no link fornecido

### ❌ Expo Go não carrega o app

**Solução:**
1. Limpe o cache:
   ```bash
   npm start -- --clear
   ```
2. Recarregue o app no Expo Go (agite o celular → "Reload")

### ❌ Emulador Android muito lento

**Soluções:**
1. Habilite virtualização (VT-x/AMD-V) na BIOS do computador
2. Use um celular físico com Expo Go (muito mais rápido)
3. Aumente a RAM do emulador no Android Studio

---

## 🔄 Hot Reload

**O que é:** Quando você salva uma alteração no código, o app atualiza automaticamente no celular/emulador sem recompilar tudo.

**Como usar:**
1. Com o app rodando (celular ou emulador)
2. Edite um arquivo TypeScript (ex: `src/screens/HomeScreen.tsx`)
3. Salve o arquivo (`Ctrl + S`)
4. O app recarrega automaticamente em segundos! ✨

**Recarregar manualmente:**
- **Expo Go (celular):** Agite o dispositivo → "Reload"
- **Emulador:** Pressione `R` duas vezes no terminal
- **Terminal:** Pressione `r`

---

## 📝 Desenvolvimento

### Ferramentas Recomendadas

- **VS Code** - Editor de código principal
- **Extensões VS Code:**
  - React Native Tools
  - ESLint
  - Prettier - Code formatter
  - TypeScript and JavaScript Language Features

### Boas Práticas

- ✅ Use TypeScript para tipagem forte
- ✅ Siga as convenções de nomenclatura (PascalCase para componentes)
- ✅ Comente código complexo
- ✅ Teste no celular físico antes de gerar APK
- ✅ Limpe o cache se encontrar problemas: `npm start -- --clear`

---

## 📤 Publicar na Google Play Store

### Resumo dos Passos:

1. **Criar conta de desenvolvedor**
   - Acesse: https://play.google.com/console
   - Pague taxa única de US$ 25

2. **Gerar build de produção (AAB)**
   ```bash
   eas build --platform android --profile production
   ```

3. **Criar ficha da loja**
   - Nome, descrição, capturas de tela
   - Ícone 512x512px
   - Banner 1024x500px

4. **Upload do AAB**
   - Produção → Criar novo lançamento
   - Upload do arquivo `.aab`
   - Notas da versão

5. **Enviar para revisão**
   - Aprovação leva 3-7 dias

---

## 👥 Informações do Projeto

**Desenvolvido por:**
Projeto de Extensão - Universidade Estácio

**Nome do App:** Click Fácil PNCP
**Package ID:** com.estacio.clickfacilpncp
**Versão:** 1.0.0
**Plataforma:** Android (iOS compatível)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do Projeto de Extensão da Universidade Estácio.

**Licença:** MIT

---

## 🔗 Links Úteis

### Documentação
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)

### PNCP
- [Portal PNCP](https://pncp.gov.br/)
- [API PNCP - Swagger](https://pncp.gov.br/api/swagger-ui.html)

### Ferramentas
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Android Studio](https://developer.android.com/studio)
- [Expo](https://expo.dev/)

---

## 📞 Suporte

Para dúvidas ou suporte:

- **GitHub Issues:** [Abrir Issue](https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio/issues)
- **Repositório:** https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio

---

**✨ Desenvolvido com ❤️ para facilitar o acesso a informações públicas de contratações.**

**Última atualização:** Janeiro 2025
