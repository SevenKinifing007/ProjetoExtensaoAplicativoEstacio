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

Este guia contém TODOS os passos necessários para instalar, configurar e executar o aplicativo, incluindo soluções para problemas comuns.

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

#### ⚠️ Solução de Problemas:

**Erro: "node não é reconhecido como comando"**

**Solução 1:** Reiniciar o PowerShell/Terminal
- Feche a janela e abra novamente
- Tente executar `node --version` novamente

**Solução 2:** Reiniciar o computador
- Reinicie completamente o computador
- Abra o PowerShell/Terminal novamente
- Tente executar `node --version`

**Solução 3:** Adicionar ao PATH manualmente (Windows)
1. Pressione `Win + Pause` para abrir Propriedades do Sistema
2. Clique em **"Configurações avançadas do sistema"**
3. Clique em **"Variáveis de Ambiente"**
4. Em "Variáveis do sistema", selecione **"Path"** e clique em **"Editar"**
5. Clique em **"Novo"** e adicione: `C:\Program Files\nodejs\`
6. Clique em **"OK"** em todas as janelas
7. Reinicie o PowerShell

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

#### ⚠️ Solução de Problemas:

**Erro: "git não é reconhecido como comando"**

**Solução 1:** Reiniciar o PowerShell/Terminal
- Feche a janela e abra novamente
- Tente executar `git --version` novamente

**Solução 2:** Reiniciar o computador
- Reinicie completamente o computador
- Abra o PowerShell/Terminal novamente
- Tente executar `git --version`

**Solução 3:** Reinstalar o Git
- Desinstale o Git pelo Painel de Controle
- Baixe novamente de https://git-scm.com/
- Reinstale marcando a opção **"Add Git to PATH"**

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

#### Verificar Instalação:

- Se o Visual Studio Code abriu, a instalação foi bem-sucedida! ✅

#### ⚠️ Solução de Problemas:

**VS Code não abre:**

**Solução 1:** Abrir manualmente
- Windows: Pressione `Win`, digite `Visual Studio Code` e pressione Enter
- Mac: Abra o Spotlight (`Cmd + Espaço`), digite `Visual Studio Code` e pressione Enter

**Solução 2:** Reinstalar
- Desinstale pelo Painel de Controle (Windows) ou pasta Aplicativos (Mac)
- Baixe novamente de https://code.visualstudio.com/
- Reinstale seguindo os passos acima

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

#### Verificar Instalação:

1. No VS Code, clique no ícone de **Extensões** (`Ctrl + Shift + X`)

2. No topo da barra lateral, você verá uma lista das extensões instaladas

3. Verifique se todas as 4 extensões aparecem na lista

#### ⚠️ Solução de Problemas:

**Extensão não instala:**

**Solução 1:** Verificar conexão com internet
- Certifique-se de estar conectado à internet
- Tente recarregar a lista de extensões (ícone de reload no topo)

**Solução 2:** Instalar manualmente
- Acesse https://marketplace.visualstudio.com/vscode
- Busque pela extensão
- Clique em "Download Extension"
- Arraste o arquivo `.vsix` para o VS Code

**Solução 3:** Atualizar o VS Code
- Menu: **Help → Check for Updates**
- Instale a atualização disponível
- Tente instalar as extensões novamente

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
   ```bash
   code .
   ```

   O VS Code abrirá novamente com a pasta do projeto carregada.

#### Verificar:

- Na barra lateral esquerda do VS Code, você deve ver a estrutura de pastas:
  ```
  ProjetoExtensaoAplicativoEstacio
  ├── src
  ├── assets
  ├── App.tsx
  ├── package.json
  └── ...
  ```

#### ⚠️ Solução de Problemas:

**Erro: "fatal: could not create work tree"**

**Solução:** Verificar permissões da pasta
- Certifique-se de que você tem permissões de escrita na pasta
- Tente criar a pasta em outro local (ex: Desktop)
- Execute o PowerShell/Terminal como Administrador

**Erro: "Repository not found"**

**Solução:** Verificar URL
- Verifique se copiou a URL corretamente:
  ```
  https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio.git
  ```
- Certifique-se de estar conectado à internet

**Erro: "cd: no such file or directory"**

**Solução:** Criar a pasta primeiro
- Crie a pasta manualmente pelo Explorador de Arquivos
- Ou use o comando `mkdir`:
  ```bash
  mkdir C:\Projetos\EstacioApp
  cd C:\Projetos\EstacioApp
  ```

---

### PASSO 6: Instalar Dependências do Projeto

**O que é:** Dependências são as bibliotecas e pacotes que o projeto precisa para funcionar. Similar ao NuGet Restore em projetos C#.

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
     npm WARN deprecated ...
     added 727 packages, and audited 728 packages in 3m

     60 packages are looking for funding
       run `npm fund` for details

     found 0 vulnerabilities
     ```

4. **Instalação concluída:**
   - Quando terminar, você verá a mensagem: `added XXX packages`
   - E o prompt do terminal voltará: `PS C:\...\ProjetoExtensaoAplicativoEstacio>`

#### Verificar:

- Uma pasta chamada **`node_modules`** foi criada no projeto
- Esta pasta contém todas as bibliotecas instaladas
- Você pode ver no explorador de arquivos do VS Code (barra lateral esquerda)

#### ⚠️ Solução de Problemas:

**Erro: "npm ERR! code ENOTFOUND"**

**Solução:** Problema de internet
- Verifique sua conexão com a internet
- Desative VPN se estiver usando
- Tente novamente: `npm install`

**Erro: "npm ERR! EACCES: permission denied"**

**Solução:** Problema de permissão
- Feche o VS Code
- Abra o PowerShell/Terminal como Administrador:
  - Windows: Clique com botão direito no PowerShell → "Executar como Administrador"
- Navegue até a pasta do projeto
- Execute `npm install` novamente

**Erro: "npm ERR! Maximum call stack size exceeded"**

**Solução:** Limpar cache do npm
```bash
npm cache clean --force
npm install
```

**Instalação travou/muito lenta:**

**Solução 1:** Usar mirror alternativo (apenas se muito lento)
```bash
npm config set registry https://registry.npmjs.org/
npm install
```

**Solução 2:** Instalar com verbose para ver progresso
```bash
npm install --verbose
```

**Erro: "gyp ERR! build error"**

**Solução:** Geralmente pode ignorar
- Esses erros são sobre módulos nativos opcionais
- Se a instalação concluiu com `added XXX packages`, está OK
- O app vai funcionar normalmente

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

7. **NÃO precisa abrir agora**, só instalar

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

3. **Um QR Code aparecerá no terminal** (quadrado de caracteres)
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

##### Testar:

- Toque em qualquer botão
- Aguarde o loading (carregando)
- Os dados da API do PNCP aparecerão na tela

##### ⚠️ Solução de Problemas - Opção A:

**QR Code não aparece:**

**Solução:**
```bash
# Pare o servidor (Ctrl + C)
# Limpe o cache e inicie novamente
npm start -- --clear
```

**Celular não conecta (Expo Go não abre o app):**

**Solução 1:** Verificar rede Wi-Fi
- Celular e computador DEVEM estar na mesma rede Wi-Fi
- Não use dados móveis no celular
- Desconecte e reconecte ambos ao Wi-Fi

**Solução 2:** Usar modo Tunnel
1. No navegador onde o QR Code apareceu
2. Procure por **"Connection: lan"**
3. Clique e mude para **"Connection: tunnel"**
4. Aguarde gerar novo QR Code
5. Escaneie o novo QR Code

**Solução 3:** Desativar firewall temporariamente
- Windows: Configurações → Windows Defender Firewall → Desativar
- **Lembre de reativar depois!**

**App carrega mas fica em tela branca:**

**Solução:**
- No celular, agite o dispositivo
- Aparecerá um menu
- Toque em **"Reload"**

**Erro: "Network response timed out"**

**Solução:**
```bash
# No terminal do VS Code, pare o servidor (Ctrl + C)
# Execute com tunnel mode
npx expo start --tunnel
```

---

#### OPÇÃO B: Executar no Emulador Android

**Pré-requisitos:**
- **Android Studio** instalado
- **Emulador Android** configurado

##### Instalar Android Studio (se não tiver):

1. Acesse: **https://developer.android.com/studio**

2. Baixe o **Android Studio**

3. Execute o instalador e siga as instruções

4. Na primeira execução:
   - Escolha **"Standard Installation"**
   - Aguarde o download do Android SDK (pode demorar bastante)

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

4. **Aguarde a tela do app aparecer no emulador**

##### ⚠️ Solução de Problemas - Opção B:

**Erro: "ANDROID_HOME is not set"**

**Solução:** Configurar variáveis de ambiente

**Windows:**
1. Pressione `Win + Pause` → Configurações avançadas do sistema
2. Clique em **"Variáveis de Ambiente"**
3. Em "Variáveis do sistema", clique em **"Novo"**
4. Nome da variável: `ANDROID_HOME`
5. Valor: `C:\Users\SeuUsuario\AppData\Local\Android\Sdk`
6. Clique em **"OK"**
7. Reinicie o VS Code

**Mac/Linux:**
Adicione ao arquivo `~/.bashrc` ou `~/.zshrc`:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

**Erro: "No devices/emulators found"**

**Solução:**
- Certifique-se de que o emulador está rodando
- No terminal, execute: `adb devices`
- Deve aparecer o emulador na lista
- Se não aparecer, reinicie o emulador

**Emulador muito lento:**

**Solução 1:** Habilitar virtualização na BIOS
- Reinicie o PC e entre na BIOS (geralmente F2 ou Del)
- Procure por "Intel VT-x" ou "AMD-V"
- Habilite e salve

**Solução 2:** Usar Expo Go (Opção A)
- É mais rápido e mais fácil
- Use o celular físico com Expo Go

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

#### Ver Logs e Erros:

- **No Terminal do VS Code:** Todos os logs aparecem automaticamente
- **Erros de código:** Aparecem em vermelho na tela do app
- **Use `console.log()`** para debug:
  ```typescript
  console.log('Teste:', minhaVariavel);
  ```

#### ⚠️ Solução de Problemas:

**Hot Reload não funciona:**

**Solução:**
```bash
# Pare o servidor (Ctrl + C)
# Limpe o cache
npm start -- --clear
```

**App não atualiza após salvar:**

**Solução:**
- Recarregue manualmente (agite o celular ou pressione R+R)
- Verifique se salvou o arquivo (Ctrl + S)
- Verifique se não há erros de sintaxe no código

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

#### Ver Logs:

- **Console do VS Code:** Todos os `console.log()` aparecem aqui
- **Terminal Integrado:** Logs do Metro Bundler
- **Expo Go:** Agite o celular → Dev Menu → Show Performance Monitor

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
- Variável `ANDROID_HOME` configurada

**Gerar APK:**

```bash
# Gerar APK de desenvolvimento
npx expo export:android

# APK será gerado em:
# android/app/build/outputs/apk/release/app-release.apk
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

Isso criará o arquivo `eas.json` com as configurações de build.

#### 4. Criar Build APK (para testes):

```bash
eas build -p android --profile preview
```

- O build será feito nos servidores da Expo
- Você receberá um link para baixar o APK
- Pode demorar 10-20 minutos

#### 5. Criar Build AAB (para Play Store):

```bash
eas build -p android --profile production
```

- Gera arquivo `.aab` (Android App Bundle)
- Formato exigido pela Google Play Store
- Otimizado e menor que APK

#### Arquivo eas.json (Configuração):

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

---

## 📤 Publicar na Google Play Store

### Passo 1: Criar Conta de Desenvolvedor

1. **Acesse:** https://play.google.com/console

2. **Clique em "Começar" ou "Sign in"**

3. **Faça login** com sua conta Google

4. **Pague a taxa de registro:**
   - Taxa única de **US$ 25**
   - Pagamento via cartão de crédito
   - Não há taxa anual

5. **Preencha informações:**
   - Nome do desenvolvedor
   - Endereço
   - Telefone
   - Email de contato

6. **Aceite os termos:**
   - Acordo de Distribuição do Desenvolvedor
   - Políticas do Google Play

7. **Aguarde confirmação** (geralmente instantâneo)

### Passo 2: Criar um Novo Aplicativo

1. **No Google Play Console, clique em "Criar app"**

2. **Preencha as informações básicas:**
   - **Nome do app:** Consulta PNCP
   - **Idioma padrão:** Português (Brasil)
   - **Tipo de app:** Aplicativo
   - **Gratuito ou pago:** Gratuito

3. **Declare que o app segue as políticas:**
   - Marque todas as declarações obrigatórias

4. **Clique em "Criar app"**

### Passo 3: Configurar a Ficha da Loja

#### 3.1. Descrição do App

1. **No menu lateral, vá em: "Configuração → Ficha da loja principal"**

2. **Preencha:**
   - **Nome do app:** Consulta PNCP
   - **Descrição breve:** (80 caracteres)
     ```
     Consulte licitações, contratos e dispensas do Portal Nacional de Contratações Públicas
     ```

   - **Descrição completa:** (4000 caracteres)
     ```
     O Consulta PNCP é um aplicativo mobile que facilita o acesso a dados públicos
     sobre contratações governamentais. Com ele, você pode:

     • Consultar licitações de órgãos públicos
     • Visualizar contratos vigentes
     • Acompanhar dispensas de licitação
     • Filtrar por órgão, valor e data
     • Acessar informações detalhadas de cada processo

     Todos os dados são obtidos em tempo real da API pública do Portal Nacional
     de Contratações Públicas (PNCP), garantindo transparência e confiabilidade.

     Características:
     - Interface intuitiva e fácil de usar
     - Dados atualizados em tempo real
     - Sem necessidade de cadastro ou login
     - Gratuito e sem anúncios

     Ideal para:
     - Jornalistas investigativos
     - Auditores e fiscais
     - Empresários interessados em licitações
     - Estudantes de administração pública
     - Cidadãos interessados em transparência pública
     ```

#### 3.2. Recursos Gráficos

**Ícone do app:**
- Tamanho: **512 x 512 pixels**
- Formato: PNG (32 bits)
- Use a imagem: `assets/icon.png` (redimensione se necessário)

**Imagem de recurso:**
- Tamanho: **1024 x 500 pixels**
- Formato: PNG ou JPEG
- Banner promocional do app

**Capturas de tela (mínimo 2):**
- **Telefone:** 16:9 ou 9:16
- Tamanho mínimo: 320px
- Tamanho máximo: 3840px
- Formatos: PNG ou JPEG

**Como tirar capturas de tela:**
1. Execute o app no emulador ou Expo Go
2. Use a função de screenshot do dispositivo
3. No emulador: botão de câmera na barra lateral
4. No celular: botão Power + Volume Down

**Capturas recomendadas:**
1. Tela inicial com os 3 botões
2. Lista de licitações
3. Lista de contratos
4. Detalhes de uma licitação

#### 3.3. Categorização

- **Categoria:** Negócios
- **Tags:** licitação, contratações públicas, governo, transparência

#### 3.4. Detalhes de Contato

- **Site:** (opcional, pode deixar em branco)
- **Email:** seu-email@exemplo.com
- **Telefone:** (opcional)
- **Política de privacidade:** (obrigatório - ver abaixo)

### Passo 4: Criar Política de Privacidade

**Você PRECISA de uma URL de política de privacidade.**

**Opção 1: Gerar automaticamente**
- Acesse: https://www.privacypolicygenerator.info/
- Preencha as informações sobre o app
- Gere o HTML
- Hospede no GitHub Pages (gratuito)

**Opção 2: Template básico**

```markdown
# Política de Privacidade - Consulta PNCP

**Última atualização: Janeiro 2025**

## 1. Informações que coletamos

O aplicativo Consulta PNCP NÃO coleta, armazena ou compartilha informações
pessoais dos usuários.

## 2. Dados de API

Todos os dados exibidos são públicos e obtidos da API do Portal Nacional de
Contratações Públicas (PNCP).

## 3. Permissões

O app requer apenas acesso à internet para consultar a API pública do PNCP.

## 4. Cookies

O app não utiliza cookies ou tecnologias de rastreamento.

## 5. Contato

Para dúvidas sobre esta política, entre em contato: seu-email@exemplo.com
```

Hospede este arquivo e use a URL na ficha da loja.

### Passo 5: Classificação de Conteúdo

1. **No menu lateral, vá em: "Configuração → Classificação de conteúdo"**

2. **Clique em "Iniciar questionário"**

3. **Responda as perguntas:**
   - Violência: Não
   - Sexo: Não
   - Linguagem imprópria: Não
   - Drogas: Não
   - etc.

4. **Clique em "Enviar"**

5. **Receberá classificação automática:** (geralmente "Livre")

### Passo 6: Fazer Upload do AAB

1. **Gere o build de produção:**
   ```bash
   eas build -p android --profile production
   ```

2. **Aguarde o build completar** (10-20 minutos)

3. **Baixe o arquivo `.aab`** do link fornecido

**Opção A - Upload Manual:**

4. **No Google Play Console, vá em: "Produção → Lançamentos"**

5. **Clique em "Criar novo lançamento"**

6. **Faça upload do arquivo `.aab`**

7. **Preencha:**
   - **Nome do lançamento:** v1.0.0
   - **Notas da versão:**
     ```
     Versão inicial:
     - Consulta de licitações
     - Consulta de contratos
     - Consulta de dispensas
     ```

8. **Clique em "Salvar" e depois "Revisar lançamento"**

**Opção B - Via EAS CLI:**

```bash
eas submit -p android
```

Isso fará upload automaticamente para o Google Play Console.

### Passo 7: Revisar e Enviar

1. **Verifique todos os itens:**
   - ✅ Ficha da loja preenchida
   - ✅ Capturas de tela adicionadas
   - ✅ Ícone configurado
   - ✅ Classificação de conteúdo
   - ✅ Política de privacidade
   - ✅ AAB enviado

2. **Vá em: "Resumo do lançamento"**

3. **Clique em "Enviar para revisão"**

4. **Aguarde a análise:**
   - Geralmente leva **3 a 7 dias**
   - Você receberá email com atualizações
   - O app pode ser aprovado ou precisar de ajustes

### Passo 8: Após Aprovação

Quando aprovado:
- App ficará disponível na Play Store
- Link será: `https://play.google.com/store/apps/details?id=com.estacio.consultapncp`
- Você pode compartilhar o link
- Usuários poderão instalar normalmente

### Atualizações Futuras

Para enviar atualizações:

1. **Aumente a versão em `app.json`:**
   ```json
   {
     "expo": {
       "version": "1.0.1",
       "android": {
         "versionCode": 2
       }
     }
   }
   ```

2. **Gere novo build:**
   ```bash
   eas build -p android --profile production
   ```

3. **No Play Console: "Produção → Criar novo lançamento"**

4. **Faça upload do novo AAB**

5. **Preencha as notas da versão**

6. **Envie para revisão**

---

## 🆚 Comparação: React Native vs Xamarin

### React Native (Escolha Atual do Projeto)

**Tecnologia:** JavaScript/TypeScript + React

**O que é:**
- Framework desenvolvido pelo Facebook (Meta)
- Permite criar apps nativos usando JavaScript/TypeScript
- Usa componentes React para construir a interface
- Compila para código nativo (Android e iOS)

**Vantagens:**
- ✅ **Grande comunidade:** Milhões de desenvolvedores
- ✅ **Hot Reload:** Veja mudanças instantaneamente
- ✅ **Performance:** Próxima ao nativo (usa componentes nativos)
- ✅ **Expo:** Simplifica MUITO o desenvolvimento
- ✅ **Mercado de trabalho:** Muitas vagas disponíveis
- ✅ **Bibliotecas:** Milhares de bibliotecas disponíveis (npm)
- ✅ **Documentação:** Extensa e bem organizada
- ✅ **Cross-platform:** Um código para Android e iOS
- ✅ **Custo:** Completamente gratuito

**Desvantagens:**
- ❌ **Não usa C#:** Usa JavaScript/TypeScript
- ❌ **Curva de aprendizado:** Para quem vem de C#
- ❌ **Bridge:** Pequeno overhead de comunicação JS ↔ Nativo

**Empresas que usam:**
- Facebook
- Instagram
- Uber Eats
- Discord
- Shopify
- Microsoft (algumas apps)

---

### Xamarin / .NET MAUI (Alternativa C#)

**Tecnologia:** C# + XAML

**O que é:**
- **Xamarin:** Framework da Microsoft (descontinuado em maio 2024)
- **Status atual:** Não recebe mais atualizações
- **Substituto:** .NET MAUI (Multi-platform App UI)
- Permite criar apps usando C# puro
- Usa XAML para interfaces (como WPF)

**.NET MAUI (substituto do Xamarin):**
- Lançado em maio 2022
- Sucessor oficial do Xamarin
- Parte do .NET 6+ (.NET 8 atual)
- Mesma filosofia: C# para mobile

**Vantagens:**
- ✅ **Usa C# puro:** Familiar para desenvolvedores .NET
- ✅ **Visual Studio:** Usa VS 2022 (não VS Code)
- ✅ **Compartilhamento de código:** Backend e mobile em C#
- ✅ **Suporte Microsoft:** Oficial e de longo prazo
- ✅ **XAML:** Similar a WPF/UWP
- ✅ **Performance:** Totalmente nativa
- ✅ **Integração:** Boa integração com Azure

**Desvantagens:**
- ❌ **Comunidade menor:** Comparado ao React Native
- ❌ **Menos bibliotecas:** Ecossistema menor
- ❌ **Configuração complexa:** Mais difícil de configurar
- ❌ **Sem Expo:** Não tem ferramenta equivalente
- ❌ **Hot Reload limitado:** XAML Hot Reload existe, mas é limitado
- ❌ **Mercado:** Menos vagas que React Native

**Empresas que usam:**
- Alaska Airlines
- UPS
- BBC
- Olo
- The World Bank

---

### Comparação Técnica Detalhada

| Característica | React Native | Xamarin / .NET MAUI |
|----------------|--------------|---------------------|
| **Linguagem** | JavaScript/TypeScript | C# |
| **IDE Principal** | VS Code, WebStorm | Visual Studio 2022 |
| **Status** | ✅ Ativo e crescendo | ⚠️ Xamarin descontinuado, MAUI é novo |
| **Hot Reload** | ✅ Excelente (Fast Refresh) | ⚠️ XAML Hot Reload (limitado) |
| **Comunidade** | 🔥 Muito grande (110k+ stars) | ⚠️ Média (20k+ stars MAUI) |
| **Curva de Aprendizado** | Média (JS/TS + React) | Baixa (se souber C#) |
| **Performance** | ⚡ 95% nativa | ⚡ 100% nativa |
| **Tamanho do App** | ~20-30 MB | ~15-20 MB |
| **Deploy/Testes** | 🔥 Expo facilita MUITO | ⚠️ Manual, mais complexo |
| **Bibliotecas** | 🔥 npm (milhões) | ⚠️ NuGet (menos opções mobile) |
| **Custo** | ✅ Gratuito | ✅ Gratuito |
| **Suporte iOS** | ✅ Sim (requer Mac) | ✅ Sim (requer Mac) |
| **Web** | ⚠️ React Native Web | ✅ Blazor Hybrid |
| **Desktop** | ❌ Não | ✅ Windows/Mac (MAUI) |
| **Documentação** | ✅ Excelente | ✅ Boa (melhorando) |
| **Vagas de emprego** | 🔥 Muitas | ⚠️ Menos |

---

### Exemplo de Código: Hello World

**React Native (TypeScript):**

```tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Você clicou {count} vezes</Text>
      <Button title="Clique aqui" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

**.NET MAUI (C#):**

```csharp
// MainPage.xaml.cs
public partial class MainPage : ContentPage
{
    private int count = 0;

    public MainPage()
    {
        InitializeComponent();
    }

    private void OnButtonClicked(object sender, EventArgs e)
    {
        count++;
        CounterLabel.Text = $"Você clicou {count} vezes";
    }
}
```

```xml
<!-- MainPage.xaml -->
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="HelloWorld.MainPage">
    <VerticalStackLayout>
        <Label Text="Hello World!" />
        <Label x:Name="CounterLabel" Text="Você clicou 0 vezes" />
        <Button Text="Clique aqui" Clicked="OnButtonClicked" />
    </VerticalStackLayout>
</ContentPage>
```

---

### Por que este projeto escolheu React Native?

Para este projeto acadêmico, React Native foi escolhido pelos seguintes motivos:

1. **Facilidade de desenvolvimento:**
   - Expo simplifica MUITO (sem precisar Android Studio configurado)
   - Hot Reload acelera o desenvolvimento
   - Testes rápidos no celular físico com Expo Go

2. **Mercado de trabalho:**
   - Mais vagas disponíveis
   - Habilidade mais valorizada
   - Maior demanda por desenvolvedores React Native

3. **Comunidade e recursos:**
   - Mais tutoriais e exemplos
   - Mais bibliotecas disponíveis
   - Mais fácil encontrar soluções para problemas

4. **Aprendizado:**
   - TypeScript é similar ao C# (fácil transição)
   - React é usado também em web (habilidade reutilizável)
   - Conceitos modernos de desenvolvimento

5. **Performance:**
   - Excelente para aplicativos de consulta de dados
   - Interface fluida e responsiva
   - Adequado para o escopo do projeto

---

### Quando escolher .NET MAUI?

**.NET MAUI é melhor quando:**

1. ✅ Você já domina C# e quer continuar usando
2. ✅ Seu backend é .NET (compartilhar código e modelos)
3. ✅ Precisa de app desktop além de mobile
4. ✅ Quer usar Visual Studio (não VS Code)
5. ✅ Seu time já é .NET (curva de aprendizado menor)
6. ✅ Integração forte com Azure

**.NET MAUI NÃO é ideal quando:**

1. ❌ Precisa de prototipagem rápida (Expo é mais rápido)
2. ❌ Equipe pequena (React Native tem mais recursos prontos)
3. ❌ Primeiro projeto mobile (React Native tem mais tutoriais)
4. ❌ Quer maior empregabilidade (React Native tem mais vagas)

---

### Links Úteis

**React Native:**
- Site oficial: https://reactnative.dev/
- Documentação: https://reactnative.dev/docs/getting-started
- Expo: https://expo.dev/

**.NET MAUI:**
- Site oficial: https://dotnet.microsoft.com/apps/maui
- Documentação: https://learn.microsoft.com/dotnet/maui/
- GitHub: https://github.com/dotnet/maui

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
- Contribuidores do projeto

---

## 📞 Suporte

Para dúvidas ou suporte:

- **GitHub Issues:** [Abrir Issue](https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio/issues)
- **Email:** [Seu email acadêmico]

---

## 🔗 Links Úteis

### React Native e Expo
- [Documentação React Native](https://reactnative.dev/)
- [Documentação Expo](https://docs.expo.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Native Community](https://github.com/react-native-community)

### PNCP
- [Portal PNCP](https://pncp.gov.br/)
- [API PNCP - Swagger](https://pncp.gov.br/api/swagger-ui.html)
- [Dados Abertos Governamentais](https://dados.gov.br/)

### Alternativas
- [.NET MAUI (alternativa C#)](https://dotnet.microsoft.com/apps/maui)
- [Flutter (alternativa Dart)](https://flutter.dev/)
- [Ionic (alternativa web)](https://ionicframework.com/)

### Ferramentas
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Android Studio](https://developer.android.com/studio)

---

**Desenvolvido com ❤️ para a Universidade Estácio**

**Última atualização:** Janeiro 2025
