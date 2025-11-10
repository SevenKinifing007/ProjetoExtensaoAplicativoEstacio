# 📱 Consulta PNCP - Aplicativo Mobile

Aplicativo mobile desenvolvido para consulta de dados de **Licitações**, **Dispensas** e **Contratos** junto ao **Portal Nacional de Contratações Públicas (PNCP)**.

> **Projeto de Extensão - Universidade Estácio**
>
> Desenvolvimento de aplicativo para dispositivos móveis Android

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Guia Completo de Instalação e Execução](#-guia-completo-de-instalação-e-execução)
  - [Passo 1: Instalar Node.js](#passo-1-instalar-nodejs)
  - [Passo 2: Instalar Git](#passo-2-instalar-git)
  - [Passo 3: Instalar Visual Studio Code](#passo-3-instalar-visual-studio-code)
  - [Passo 4: Instalar Extensões no VS Code](#passo-4-instalar-extensões-no-vs-code)
  - [Passo 5: Clonar o Repositório](#passo-5-clonar-o-repositório)
  - [Passo 6: Instalar Dependências do Projeto](#passo-6-instalar-dependências-do-projeto)
  - [Passo 7: Executar o Aplicativo](#passo-7-executar-o-aplicativo)
  - [Passo 8: Desenvolver com Hot Reload](#passo-8-desenvolver-com-hot-reload)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API do PNCP](#-api-do-pncp)
- [Desenvolvimento e Debug](#-desenvolvimento-e-debug)
- [Build para Android](#-build-para-android)
- [Publicar na Google Play Store](#-publicar-na-google-play-store)
- [Comparação: React Native vs Xamarin](#-comparação-react-native-vs-xamarin)
- [Histórico de Versões](#-histórico-de-versões)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **Consulta PNCP** é um aplicativo mobile desenvolvido em **React Native** que permite aos usuários consultar informações públicas sobre contratações governamentais diretamente de seus dispositivos móveis.

O aplicativo consome a **API pública do PNCP** (Portal Nacional de Contratações Públicas) e apresenta os dados de forma organizada e acessível.

### Objetivos

- ✅ Facilitar o acesso a dados de licitações públicas
- ✅ Promover a transparência nas contratações governamentais
- ✅ Fornecer uma interface intuitiva para dispositivos móveis
- ✅ Aplicar conceitos de desenvolvimento mobile com React Native

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React Native** | 0.81.5 | Framework para desenvolvimento mobile |
| **Expo** | ~54.0.23 | Plataforma para desenvolvimento React Native |
| **TypeScript** | ~5.9.2 | Linguagem de programação (superset do JavaScript) |
| **Node.js** | 22.x | Ambiente de execução JavaScript |
| **NPM** | 10.x | Gerenciador de pacotes |

### Por que React Native?

React Native permite desenvolver aplicativos nativos para Android e iOS usando JavaScript/TypeScript, compartilhando a maior parte do código entre as plataformas.

### Por que TypeScript?

TypeScript é uma linguagem fortemente tipada, similar ao C#, que oferece:
- ✅ Verificação de tipos em tempo de desenvolvimento
- ✅ Intellisense e autocomplete
- ✅ Melhor refatoração de código
- ✅ Menos erros em tempo de execução

---

## 🎨 Funcionalidades

### 1. Consulta de Licitações
- Busca licitações de órgãos públicos
- Exibe informações como:
  - Número da compra
  - Órgão responsável
  - Objeto da licitação
  - Valor estimado
  - Data de publicação
  - Modalidade
  - Situação

### 2. Consulta de Contratos
- Busca contratos públicos
- Exibe informações como:
  - Número do contrato
  - Fornecedor
  - Objeto do contrato
  - Valor inicial
  - Data de assinatura
  - Período de vigência
  - Situação

### 3. Consulta de Dispensas
- Busca dispensas de licitação
- Exibe informações como:
  - Número da compra
  - Órgão responsável
  - Objeto da dispensa
  - Valor estimado
  - Data de publicação
  - Fundamentação legal
  - Situação

---

## 🚀 Guia Completo de Instalação e Execução

Este guia contém todos os passos necessários para instalar, configurar e executar o aplicativo.

---

### PASSO 1: Instalar Node.js

**O que é:** Node.js é o ambiente de execução JavaScript necessário para o React Native funcionar.

#### Instalação:

1. Acesse: **https://nodejs.org/**

2. Você verá duas opções de download:
   - **LTS** (Long Term Support) - versão estável e recomendada
   - **Current** - versão mais recente com recursos experimentais

3. **Clique no botão "LTS"** (recomendado)
   - Exemplo: v22.x.x LTS

4. O arquivo será baixado (geralmente vai para a pasta "Downloads")
   - Nome do arquivo: `node-v22.x.x-x64.msi` (Windows)

5. Localize o arquivo baixado e execute-o com **duplo clique**

6. Na janela de instalação:
   - Clique em **"Next"** para avançar
   - **IMPORTANTE:** Marque a opção **"Automatically install the necessary tools"**
   - Continue clicando em **"Next"** até o botão **"Install"**
   - Clique em **"Install"**
   - Se solicitar permissão de administrador, clique em **"Sim"**

7. Aguarde a instalação concluir (pode demorar 2-5 minutos)

8. Clique em **"Finish"** para concluir

#### Verificar Instalação:

1. Abra o **PowerShell** (Windows) ou **Terminal** (Mac/Linux):
   - Windows: Pressione `Win + R`, digite `powershell` e pressione Enter
   - Mac: Pressione `Cmd + Espaço`, digite `terminal` e pressione Enter

2. Digite o seguinte comando e pressione Enter:
   ```bash
   node --version
   ```
   **Resultado esperado:** `v22.x.x` (ou superior)

3. Digite o seguinte comando e pressione Enter:
   ```bash
   npm --version
   ```
   **Resultado esperado:** `10.x.x` (ou superior)

---

### PASSO 2: Instalar Git

**O que é:** Git é o sistema de controle de versão usado para baixar e gerenciar o código do projeto.

#### Instalação:

1. Acesse: **https://git-scm.com/download/win** (Windows)
   - Para Mac: https://git-scm.com/download/mac
   - Para Linux: https://git-scm.com/download/linux

2. O download deve iniciar automaticamente
   - Se não iniciar, clique em **"Click here to download manually"**
   - Nome do arquivo: `Git-2.x.x-64-bit.exe` (Windows)

3. Localize o arquivo baixado e execute-o com **duplo clique**

4. Na janela de instalação:
   - Clique em **"Next"** para avançar
   - **Deixe todas as opções padrão** (não precisa mudar nada)
   - Na tela "Choosing the default editor", você pode escolher:
     - **"Use Visual Studio Code as Git's default editor"** (se já tiver o VS Code instalado)
     - Ou deixar "Use Vim" (padrão)
   - Continue clicando em **"Next"** até o botão **"Install"**
   - Clique em **"Install"**

5. Aguarde a instalação concluir (1-3 minutos)

6. Clique em **"Finish"** para concluir

#### Verificar Instalação:

1. Abra o **PowerShell** (Windows) ou **Terminal** (Mac/Linux)

2. Digite o seguinte comando e pressione Enter:
   ```bash
   git --version
   ```
   **Resultado esperado:** `git version 2.x.x`

---

### PASSO 3: Instalar Visual Studio Code

**O que é:** Visual Studio Code (VS Code) é o editor de código onde você irá visualizar e editar o código do aplicativo.

#### Instalação:

1. Acesse: **https://code.visualstudio.com/**

2. Clique no botão grande azul **"Download for Windows"**
   - Para Mac: "Download for Mac"
   - Para Linux: "Download for Linux"
   - Nome do arquivo: `VSCodeUserSetup-x64-1.x.x.exe` (Windows)

3. Localize o arquivo baixado e execute-o com **duplo clique**

4. Na janela de instalação:
   - Clique em **"I accept the agreement"** (Aceito o acordo)
   - Clique em **"Next"**
   - **IMPORTANTE:** Na tela de opções adicionais, marque TODAS estas opções:
     - ✅ **Add "Open with Code" action to Windows Explorer file context menu**
     - ✅ **Add "Open with Code" action to Windows Explorer directory context menu**
     - ✅ **Register Code as an editor for supported file types**
     - ✅ **Add to PATH** (importante!)
   - Clique em **"Next"**
   - Clique em **"Install"**

5. Aguarde a instalação concluir (2-5 minutos)

6. Marque a opção **"Launch Visual Studio Code"** (Iniciar Visual Studio Code)

7. Clique em **"Finish"** para concluir

8. O VS Code será aberto automaticamente

---

### PASSO 4: Instalar Extensões no VS Code

**O que são:** Extensões são ferramentas adicionais que melhoram a experiência de desenvolvimento no VS Code.

#### Extensões Necessárias:

1. **React Native Tools** (Microsoft)
   - Suporte completo para React Native
   - Debugging integrado
   - Intellisense para React Native

2. **ESLint**
   - Análise estática de código
   - Detecção de erros e problemas
   - Sugestões de melhorias

3. **Prettier - Code formatter**
   - Formatação automática de código
   - Mantém código consistente
   - Formatação ao salvar

4. **TypeScript and JavaScript Language Features**
   - Intellisense avançado para TypeScript/JavaScript
   - Verificação de tipos
   - Autocomplete inteligente

#### Como Instalar as Extensões:

**Método 1: Pela Interface Gráfica**

1. Abra o Visual Studio Code

2. Clique no ícone de **Extensões** na barra lateral esquerda
   - Ou pressione `Ctrl + Shift + X` (Windows/Linux)
   - Ou pressione `Cmd + Shift + X` (Mac)

3. Na barra de pesquisa que aparece, digite: **"React Native Tools"**

4. Localize a extensão **"React Native Tools"** da **Microsoft**

5. Clique no botão **"Install"** (Instalar)

6. Aguarde a instalação (alguns segundos)

7. Repita os passos 3-6 para cada extensão:
   - **ESLint**
   - **Prettier - Code formatter**
   - **TypeScript and JavaScript Language Features**

**Método 2: Pelo Terminal Integrado**

1. Abra o Visual Studio Code

2. Abra o Terminal Integrado:
   - Menu: **Terminal → New Terminal**
   - Ou pressione: `Ctrl + '` (aspas simples)

3. Execute os seguintes comandos, um de cada vez:
   ```bash
   code --install-extension msjsdiag.vscode-react-native
   code --install-extension dbaeumer.vscode-eslint
   code --install-extension esbenp.prettier-vscode
   code --install-extension ms-vscode.vscode-typescript-next
   ```

---

### PASSO 5: Clonar o Repositório

**O que é:** Clonar significa baixar todo o código do projeto do GitHub para o seu computador.

#### Preparação:

1. **Escolha um local para o projeto** (exemplos):
   - `C:\Projetos\EstacioApp`
   - `C:\Users\SeuNome\Documents\Projetos`
   - `D:\Desenvolvimento\EstacioApp`
   - Qualquer pasta de sua preferência

2. **Crie a pasta** se ela não existir:
   - Abra o Explorador de Arquivos (`Win + E`)
   - Navegue até o local escolhido
   - Clique com botão direito → **Novo** → **Pasta**
   - Dê um nome (exemplo: `EstacioApp`)

#### Clonar pelo Visual Studio Code:

1. **Abra o Visual Studio Code**

2. **Abra o Terminal Integrado:**
   - Menu: **Terminal → New Terminal**
   - Ou pressione: `Ctrl + '` (aspas simples)
   - Uma janela de terminal aparecerá na parte inferior

3. **Navegue até a pasta escolhida:**
   ```bash
   cd C:\Projetos\EstacioApp
   ```
   ⚠️ **Substitua pelo caminho da SUA pasta!**

4. **Clone o repositório:**
   ```bash
   git clone https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio.git
   ```

   Você verá mensagens como:
   ```
   Cloning into 'ProjetoExtensaoAplicativoEstacio'...
   remote: Enumerating objects: ...
   remote: Counting objects: 100% (x/x), done.
   Receiving objects: 100% (x/x), done.
   ```

5. **Entre na pasta do projeto:**
   ```bash
   cd ProjetoExtensaoAplicativoEstacio
   ```

6. **Abra a pasta no VS Code:**
   - No VS Code: **File → Open Folder** (Arquivo → Abrir Pasta)
   - Navegue até a pasta `ProjetoExtensaoAplicativoEstacio`
   - Clique em **"Selecionar Pasta"**

---

### PASSO 6: Instalar Dependências do Projeto

**O que é:** Dependências são as bibliotecas e pacotes que o projeto precisa para funcionar.

#### Instalação:

1. **Certifique-se de estar na pasta do projeto:**
   - No Terminal Integrado do VS Code, você deve ver o caminho terminando em `ProjetoExtensaoAplicativoEstacio`
   - Exemplo: `PS C:\Projetos\EstacioApp\ProjetoExtensaoAplicativoEstacio>`

2. **Execute o comando de instalação:**
   ```bash
   npm install
   ```

3. **Aguarde a instalação:**
   - O processo pode demorar de **2 a 10 minutos** dependendo da sua internet
   - Você verá várias mensagens passando na tela:
     ```
     npm WARN deprecated ...
     added 727 packages, and audited 728 packages in 3m

     60 packages are looking for funding
       run `npm fund` for details

     found 0 vulnerabilities
     ```

4. **Instalação concluída:**
   - Quando terminar, você verá a mensagem: `added XXX packages`
   - E o prompt do terminal voltará

---

### PASSO 7: Executar o Aplicativo

Agora vamos rodar o aplicativo! Existem duas formas principais:
- **Opção A:** No celular físico com Expo Go (Recomendado - mais fácil)
- **Opção B:** No emulador Android (Requer Android Studio)

---

#### OPÇÃO A: Executar no Celular Físico (Recomendado)

**Pré-requisitos:**
- Celular Android
- Aplicativo **Expo Go** instalado
- Celular e computador na **mesma rede Wi-Fi**

##### Instalar Expo Go no Celular:

1. Pegue seu celular Android

2. Abra a **Google Play Store**

3. Na barra de pesquisa, digite: **"Expo Go"**

4. Localize o aplicativo **Expo Go** (ícone roxo)

5. Toque em **"Instalar"**

6. Aguarde a instalação

##### Executar o Projeto:

1. **No VS Code, no Terminal Integrado, execute:**
   ```bash
   npm start
   ```

2. **Aguarde o servidor iniciar** (30-60 segundos)
   - Você verá mensagens como:
     ```
     Starting Metro Bundler...
     Metro waiting on exp://192.168.x.x:8081

     › Press a │ open Android
     › Press w │ open web
     ```

3. **Um QR Code aparecerá no terminal**
   - Também abrirá uma página no navegador com um QR Code maior

4. **No celular:**
   - Abra o aplicativo **Expo Go**
   - Toque em **"Scan QR code"**
   - Se pedir permissão para câmera, toque em **"Permitir"**
   - Aponte a câmera para o QR Code na tela do computador

5. **Aguarde o download e compilação:**
   - No celular, aparecerá:
     ```
     Building JavaScript bundle: 100%
     Downloading JavaScript bundle: 100%
     ```
   - Pode demorar **1-3 minutos na primeira vez**

6. **O aplicativo abrirá automaticamente!** 🎉
   - Você verá a tela principal com os 3 botões:
     - CONSULTAR LICITAÇÕES
     - CONSULTAR CONTRATOS
     - CONSULTAR DISPENSAS

---

#### OPÇÃO B: Executar no Emulador Android

**Pré-requisitos:**
- **Android Studio** instalado
- **Emulador Android** configurado

##### Instalar Android Studio:

1. Acesse: **https://developer.android.com/studio**

2. Baixe o **Android Studio**

3. Execute o instalador e siga as instruções

4. Na primeira execução:
   - Escolha **"Standard Installation"**
   - Aguarde o download do Android SDK

5. Configure um emulador:
   - Abra o **AVD Manager** (Android Virtual Device Manager)
   - Clique em **"Create Virtual Device"**
   - Escolha um dispositivo (ex: Pixel 5)
   - Escolha uma imagem do sistema (ex: Android 13 - API 33)
   - Clique em **"Finish"**

##### Executar o Projeto no Emulador:

1. **Inicie o emulador Android:**
   - Abra o Android Studio
   - Clique em **"AVD Manager"** (ícone de celular)
   - Clique no botão **"Play"** (▶) do emulador
   - Aguarde o emulador iniciar (pode demorar 1-3 minutos)

2. **No VS Code, no Terminal Integrado:**
   ```bash
   npm run android
   ```

3. **O que acontecerá:**
   - O Metro Bundler iniciará
   - O app será compilado
   - O app será instalado no emulador
   - O app abrirá automaticamente no emulador
   - Pode demorar **3-5 minutos na primeira vez**

---

### PASSO 8: Desenvolver com Hot Reload

**O que é Hot Reload:** Quando você salva uma alteração no código, o aplicativo atualiza automaticamente no celular/emulador sem precisar recompilar tudo.

#### Como Usar:

1. **Com o aplicativo rodando** (celular ou emulador)

2. **No VS Code, abra um arquivo** (exemplo):
   - Navegue: `src → screens → HomeScreen.tsx`

3. **Faça uma alteração simples** (exemplo):
   - Localize a linha com o texto: `"Consulta PNCP"`
   - Mude para: `"Consulta PNCP - Teste"`

4. **Salve o arquivo:**
   - Pressione `Ctrl + S` (Windows/Linux)
   - Ou `Cmd + S` (Mac)

5. **Olhe para o celular/emulador:**
   - O app recarregará automaticamente
   - Você verá a mudança em alguns segundos! ✨

#### Recarregar Manualmente:

**No Expo Go (celular):**
- Agite o dispositivo
- Aparecerá um menu
- Toque em **"Reload"**

**No Emulador:**
- Pressione `R` duas vezes no terminal do VS Code
- Ou pressione `Ctrl + M` no emulador e selecione "Reload"

---

## 📁 Estrutura do Projeto

```
ProjetoExtensaoAplicativoEstacio/
│
├── src/                        # Código fonte principal
│   ├── components/             # Componentes reutilizáveis
│   │   ├── ConsultaButton.tsx  # Botão de consulta estilizado
│   │   └── ItemCard.tsx        # Card para exibir itens
│   │
│   ├── screens/                # Telas do aplicativo
│   │   └── HomeScreen.tsx      # Tela principal
│   │
│   ├── services/               # Serviços e lógica de negócio
│   │   └── pncpService.ts      # Serviço de integração com API PNCP
│   │
│   ├── types/                  # Definições de tipos TypeScript
│   │   └── pncp.ts             # Tipos dos dados do PNCP
│   │
│   └── constants/              # Constantes do aplicativo
│       └── api.ts              # URLs e configurações da API
│
├── assets/                     # Recursos estáticos (imagens, ícones)
│   ├── icon.png                # Ícone do app (1024x1024px)
│   ├── splash-icon.png         # Splash screen
│   └── adaptive-icon.png       # Ícone adaptativo Android
│
├── App.tsx                     # Componente raiz da aplicação (ponto de entrada)
├── app.json                    # Configurações do Expo (nome, ícone, versão)
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configurações do TypeScript
├── .gitignore                  # Arquivos ignorados pelo Git
└── README.md                   # Este arquivo
```

### Descrição dos Arquivos Principais:

| Arquivo | Descrição |
|---------|-----------|
| **App.tsx** | Ponto de entrada da aplicação (como `Program.cs` em C#) |
| **app.json** | Configurações do app (nome, ícone, permissões, versão) |
| **package.json** | Lista de dependências (como `.csproj` em C#) |
| **tsconfig.json** | Configurações do compilador TypeScript |
| **src/screens/HomeScreen.tsx** | Tela principal com toda a lógica e interface |
| **src/services/pncpService.ts** | Funções para chamadas de API (como `HttpClient` em C#) |
| **src/types/pncp.ts** | Interfaces TypeScript (como `interface` em C#) |
| **src/constants/api.ts** | URLs e constantes da API |
| **src/components/** | Componentes reutilizáveis (botões, cards, etc.) |

---

## 🌐 API do PNCP

### Base URL

```
https://pncp.gov.br/api/consulta/v1
```

### Endpoints Utilizados

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/orgaos/{cnpj}/licitacoes` | GET | Lista licitações de um órgão |
| `/orgaos/{cnpj}/contratos` | GET | Lista contratos de um órgão |
| `/orgaos/{cnpj}/dispensas` | GET | Lista dispensas de um órgão |
| `/orgaos` | GET | Lista órgãos cadastrados |

### Exemplo de Requisição

```typescript
// Buscar licitações do Ministério da Economia
const cnpj = '00394460005887';
const url = `https://pncp.gov.br/api/consulta/v1/orgaos/${cnpj}/licitacoes`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
```

### Exemplo de Resposta

```json
[
  {
    "numeroCompra": "00001/2025",
    "anoCompra": 2025,
    "objetoCompra": "Aquisição de equipamentos de informática",
    "valorTotalEstimado": 150000.00,
    "dataPublicacaoPncp": "2025-01-15T10:00:00",
    "modalidadeNome": "Pregão Eletrônico",
    "situacaoCompra": "Em Andamento",
    "orgaoEntidade": {
      "cnpj": "00394460005887",
      "razaoSocial": "Ministério da Economia"
    }
  }
]
```

### Documentação Oficial

- **Portal PNCP:** https://pncp.gov.br/
- **Documentação da API:** https://pncp.gov.br/api/swagger-ui.html
- **Dados Abertos:** Acesso público sem necessidade de autenticação

---

## 🔧 Desenvolvimento e Debug

### Comandos Úteis no Terminal do VS Code

```bash
# Iniciar servidor de desenvolvimento
npm start

# Iniciar e limpar cache
npm start -- --clear

# Executar no Android (emulador)
npm run android

# Executar no iOS (requer macOS e Xcode)
npm run ios

# Executar no navegador web
npm run web

# Verificar erros TypeScript sem executar
npx tsc --noEmit

# Formatar código com Prettier
npx prettier --write .

# Analisar código com ESLint
npx eslint .

# Matar processo na porta 8081
npx kill-port 8081
```

### Debug no VS Code

#### Configurar Debug:

1. Abra a aba **Run and Debug** (Ctrl + Shift + D)

2. Clique em **"create a launch.json file"**

3. Escolha **"React Native"**

4. Um arquivo `.vscode/launch.json` será criado com configurações

#### Usar Breakpoints:

1. Abra um arquivo TypeScript (ex: `src/screens/HomeScreen.tsx`)

2. Clique na margem esquerda do editor (ao lado do número da linha)
   - Um ponto vermelho aparecerá (breakpoint)

3. Pressione **F5** para iniciar o debug

4. Execute a ação no app que chama aquele código

5. A execução pausará no breakpoint
   - Você pode inspecionar variáveis
   - Passar linha por linha (F10)
   - Entrar em funções (F11)

### Hot Reload e Fast Refresh

**Hot Reload:**
- Recarrega o componente preservando o estado
- Ativado automaticamente
- Funciona para mudanças na interface (JSX)

**Fast Refresh:**
- Preserva o estado do componente durante atualizações
- Melhor que Hot Reload (mais inteligente)
- Ativado por padrão no React Native 0.61+

**Recarregar Manualmente:**
- **No Expo Go:** Agite o celular → "Reload"
- **No Emulador:** Pressione `R` duas vezes no terminal
- **No Terminal:** Pressione `r`

---

## 📱 Build para Android

### Build de Desenvolvimento (APK Local)

**Pré-requisitos:**
- Android Studio instalado
- SDK do Android configurado

```bash
# Gerar APK de desenvolvimento
npx expo export:android
```

---

### Build de Produção (APK com EAS)

**EAS (Expo Application Services)** é o serviço oficial da Expo para build de produção.

#### 1. Instalar EAS CLI:

```bash
npm install -g eas-cli
```

#### 2. Login no Expo:

```bash
eas login
```

Se não tiver conta:
- Acesse: https://expo.dev/
- Clique em "Sign up"
- Crie sua conta gratuita

#### 3. Configurar Build:

```bash
eas build:configure
```

#### 4. Criar Build APK (para testes):

```bash
eas build -p android --profile preview
```

#### 5. Criar Build AAB (para Play Store):

```bash
eas build -p android --profile production
```

---

## 📤 Publicar na Google Play Store

### Passo 1: Criar Conta de Desenvolvedor

1. **Acesse:** https://play.google.com/console

2. **Faça login** com sua conta Google

3. **Pague a taxa de registro:**
   - Taxa única de **US$ 25**
   - Pagamento via cartão de crédito

4. **Preencha informações:**
   - Nome do desenvolvedor
   - Endereço
   - Telefone
   - Email de contato

5. **Aceite os termos e políticas**

### Passo 2: Criar um Novo Aplicativo

1. **No Google Play Console, clique em "Criar app"**

2. **Preencha as informações básicas:**
   - **Nome do app:** Consulta PNCP
   - **Idioma padrão:** Português (Brasil)
   - **Tipo de app:** Aplicativo
   - **Gratuito ou pago:** Gratuito

3. **Clique em "Criar app"**

### Passo 3: Configurar a Ficha da Loja

1. **Descrição do App:**
   - Nome: Consulta PNCP
   - Descrição breve (80 caracteres)
   - Descrição completa (até 4000 caracteres)

2. **Recursos Gráficos:**
   - Ícone: 512 x 512 pixels (PNG)
   - Capturas de tela: mínimo 2 imagens
   - Banner promocional: 1024 x 500 pixels

3. **Categorização:**
   - Categoria: Negócios
   - Tags: licitação, governo, transparência

### Passo 4: Classificação de Conteúdo

1. **Responda ao questionário:**
   - Violência: Não
   - Sexo: Não
   - Linguagem imprópria: Não
   - Drogas: Não

2. **Receberá classificação automática** (geralmente "Livre")

### Passo 5: Fazer Upload do AAB

1. **Gere o build:**
   ```bash
   eas build -p android --profile production
   ```

2. **Baixe o arquivo `.aab`**

3. **No Play Console: "Produção → Criar novo lançamento"**

4. **Faça upload do arquivo `.aab`**

5. **Preencha as notas da versão**

6. **Clique em "Enviar para revisão"**

### Passo 6: Aguardar Aprovação

- Geralmente leva **3 a 7 dias**
- Você receberá email com atualizações

---

## 🆚 Comparação: React Native vs Xamarin

### React Native (Escolha Atual do Projeto)

**Tecnologia:** JavaScript/TypeScript + React

**Vantagens:**
- ✅ Grande comunidade e suporte
- ✅ Hot Reload excelente
- ✅ Performance próxima ao nativo
- ✅ Expo simplifica desenvolvimento
- ✅ Muitas vagas de emprego
- ✅ Milhares de bibliotecas disponíveis
- ✅ Cross-platform (Android e iOS)

**Desvantagens:**
- ❌ Não usa C# (usa JavaScript/TypeScript)
- ❌ Curva de aprendizado para quem vem de C#

---

### Xamarin / .NET MAUI (Alternativa C#)

**Tecnologia:** C# + XAML

**O que é:**
- **Xamarin:** Descontinuado em maio 2024
- **Substituto:** .NET MAUI (Multi-platform App UI)

**Vantagens:**
- ✅ Usa C# puro
- ✅ Usa Visual Studio 2022
- ✅ Compartilhamento de código com backend .NET
- ✅ Suporte oficial Microsoft

**Desvantagens:**
- ❌ Comunidade menor
- ❌ Menos bibliotecas disponíveis
- ❌ Configuração mais complexa
- ❌ Não tem equivalente ao Expo
- ❌ Hot Reload limitado

---

### Comparação Técnica

| Característica | React Native | Xamarin / .NET MAUI |
|----------------|--------------|---------------------|
| **Linguagem** | JavaScript/TypeScript | C# |
| **IDE Principal** | VS Code | Visual Studio 2022 |
| **Hot Reload** | ✅ Excelente | ⚠️ Limitado |
| **Comunidade** | 🔥 Muito grande | ⚠️ Média |
| **Performance** | ⚡ 95% nativa | ⚡ 100% nativa |
| **Deploy** | 🔥 Expo facilita | ⚠️ Manual |
| **Bibliotecas** | 🔥 Milhões (npm) | ⚠️ Menos opções |
| **Vagas de emprego** | 🔥 Muitas | ⚠️ Menos |

---

### Por que escolhemos React Native?

1. **Facilidade de desenvolvimento:** Expo simplifica muito
2. **Mercado de trabalho:** Mais vagas disponíveis
3. **Comunidade:** Mais recursos e tutoriais
4. **Aprendizado:** TypeScript similar ao C#
5. **Performance:** Adequado para o projeto

---

## 📅 Histórico de Versões

| Versão | Data | Descrição |
|--------|------|-----------|
| 1.0.0 | Janeiro 2025 | Versão inicial do projeto |

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do Projeto de Extensão da Universidade Estácio.

**Licença:** MIT

---

## 👥 Autores

**Projeto de Extensão - Universidade Estácio**

Desenvolvido por estudantes do curso de Dispositivos Móveis

---

## 🙏 Agradecimentos

- Universidade Estácio
- Portal Nacional de Contratações Públicas (PNCP)
- Comunidade React Native
- Expo Team

---

## 📞 Suporte

Para dúvidas ou suporte:

- **GitHub Issues:** [Abrir Issue](https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio/issues)

---

## 🔗 Links Úteis

### React Native e Expo
- [Documentação React Native](https://reactnative.dev/)
- [Documentação Expo](https://docs.expo.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### PNCP
- [Portal PNCP](https://pncp.gov.br/)
- [API PNCP - Swagger](https://pncp.gov.br/api/swagger-ui.html)

### Alternativas
- [.NET MAUI (alternativa C#)](https://dotnet.microsoft.com/apps/maui)

### Ferramentas
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Android Studio](https://developer.android.com/studio)

---

**Desenvolvido com ❤️ para a Universidade Estácio**

**Última atualização:** Janeiro 2025
