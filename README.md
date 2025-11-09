# 📱 Consulta PNCP - Aplicativo Mobile

Aplicativo mobile desenvolvido para consulta de dados de **Licitações**, **Dispensas** e **Contratos** junto ao **Portal Nacional de Contratações Públicas (PNCP)**.

> **Projeto de Extensão - Universidade Estácio**
> Desenvolvimento de aplicativo para dispositivos móveis Android

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Guia de Instalação e Execução](#-guia-de-instalação-e-execução)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API do PNCP](#-api-do-pncp)
- [Desenvolvimento e Debug](#-desenvolvimento-e-debug)
- [Build para Android](#-build-para-android)
- [Comparação: React Native vs Xamarin](#-comparação-react-native-vs-xamarin)
- [Contribuindo](#-contribuindo)
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

## 🚀 Guia de Instalação e Execução

### Pré-requisitos

Antes de começar, você precisa ter instalado:

1. **Node.js** (versão 18 ou superior)
2. **Visual Studio Code**
3. **Git**
4. **Expo Go** (aplicativo no celular Android)

---

### PASSO 1: Instalar Node.js

1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (Long Term Support)
3. Execute o instalador
4. Durante a instalação, marque a opção **"Automatically install the necessary tools"**
5. Siga as instruções e conclua a instalação

**Verificar instalação:**

Abra o PowerShell (Windows) ou Terminal (Mac/Linux) e execute:

```bash
node --version
# Deve mostrar: v22.x.x ou superior

npm --version
# Deve mostrar: 10.x.x ou superior
```

---

### PASSO 2: Instalar Git

1. Acesse: https://git-scm.com/download/win
2. Baixe o instalador para seu sistema operacional
3. Execute o instalador com as opções padrão
4. Conclua a instalação

**Verificar instalação:**

```bash
git --version
# Deve mostrar: git version 2.x.x
```

---

### PASSO 3: Instalar Visual Studio Code

1. Acesse: https://code.visualstudio.com/
2. Baixe o instalador para Windows
3. Durante a instalação, marque as opções:
   - ✅ Add "Open with Code" action to Windows Explorer file context menu
   - ✅ Add "Open with Code" action to Windows Explorer directory context menu
   - ✅ Register Code as an editor for supported file types
   - ✅ Add to PATH
4. Conclua a instalação

---

### PASSO 4: Instalar Extensões no VS Code

Abra o Visual Studio Code e instale as seguintes extensões:

1. **React Native Tools** (Microsoft)
   - Suporte completo para React Native
   - Debugging integrado

2. **ESLint**
   - Análise de código e detecção de erros

3. **Prettier - Code formatter**
   - Formatação automática de código

4. **TypeScript and JavaScript Language Features**
   - Intellisense para TypeScript/JavaScript

**Como instalar extensões:**
- Clique no ícone de extensões na barra lateral esquerda (Ctrl + Shift + X)
- Busque pelo nome da extensão
- Clique em "Install"

---

### PASSO 5: Clonar o Repositório

1. **Crie uma pasta para o projeto** (exemplo):
   ```
   C:\Projetos\EstacioApp
   ```
   ou em qualquer local de sua preferência

2. **Abra o Visual Studio Code**

3. **Abra o Terminal Integrado:**
   - Menu: `Terminal → New Terminal`
   - Ou pressione: `Ctrl + '` (aspas simples)

4. **Navegue até a pasta criada:**
   ```bash
   cd C:\Projetos\EstacioApp
   ```
   (Substitua pelo caminho da sua pasta)

5. **Clone o repositório:**
   ```bash
   git clone https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio.git
   ```

6. **Entre na pasta do projeto:**
   ```bash
   cd ProjetoExtensaoAplicativoEstacio
   ```

7. **Abra a pasta no VS Code:**
   ```bash
   code .
   ```

---

### PASSO 6: Instalar Dependências do Projeto

No Terminal integrado do VS Code, execute:

```bash
npm install
```

Aguarde a instalação (pode demorar 2-5 minutos).

---

### PASSO 7: Executar o Aplicativo

#### Opção A: Testar no Dispositivo Físico (Recomendado)

**No celular Android:**

1. Instale o **Expo Go** da Google Play Store:
   - https://play.google.com/store/apps/details?id=host.exp.exponent

**No VS Code:**

1. No Terminal integrado, execute:
   ```bash
   npm start
   ```

2. Aguarde o QR Code aparecer no terminal

3. No celular, abra o **Expo Go**

4. Toque em **"Scan QR code"**

5. Aponte a câmera para o QR Code

6. Aguarde o aplicativo carregar (pode demorar 1-3 minutos na primeira vez)

**⚠️ Importante:** Celular e computador devem estar na **mesma rede Wi-Fi**

---

#### Opção B: Testar no Emulador Android

**Pré-requisitos:**
- Android Studio instalado
- Emulador Android configurado

**No VS Code:**

1. Inicie o emulador Android pelo Android Studio

2. No Terminal integrado do VS Code, execute:
   ```bash
   npm run android
   ```

3. O aplicativo será instalado e aberto automaticamente no emulador

---

### PASSO 8: Desenvolver com Hot Reload

Com o aplicativo rodando (no celular ou emulador):

1. **Abra qualquer arquivo** no VS Code (exemplo: `src/screens/HomeScreen.tsx`)

2. **Faça uma alteração** (exemplo: mude o texto de um botão)

3. **Salve o arquivo** (Ctrl + S)

4. **O aplicativo atualiza automaticamente!** ✨ (Hot Reload)

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
│   ├── icon.png                # Ícone do app
│   ├── splash-icon.png         # Splash screen
│   └── adaptive-icon.png       # Ícone adaptativo Android
│
├── App.tsx                     # Componente raiz da aplicação
├── app.json                    # Configurações do Expo
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configurações do TypeScript
└── README.md                   # Este arquivo
```

### Descrição dos Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `App.tsx` | Ponto de entrada da aplicação |
| `app.json` | Configurações do aplicativo (nome, ícone, permissões) |
| `package.json` | Lista de dependências e scripts de execução |
| `tsconfig.json` | Configurações do compilador TypeScript |
| `src/screens/HomeScreen.tsx` | Tela principal com toda a lógica |
| `src/services/pncpService.ts` | Funções para chamadas de API |
| `src/types/pncp.ts` | Interfaces TypeScript (tipos de dados) |

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
// Buscar licitações
const cnpj = '00394460005887';
const url = `https://pncp.gov.br/api/consulta/v1/orgaos/${cnpj}/licitacoes`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
```

### Documentação Oficial

- Portal PNCP: https://pncp.gov.br/
- Documentação da API: https://pncp.gov.br/api/swagger-ui.html

---

## 🔧 Desenvolvimento e Debug

### Comandos Úteis no Terminal do VS Code

```bash
# Iniciar servidor de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS (requer macOS)
npm run ios

# Executar no navegador web
npm run web

# Limpar cache
npm start -- --clear

# Verificar erros TypeScript
npx tsc --noEmit
```

---

### Debug no VS Code

**Configurar Debug:**

1. Abra a aba **Run and Debug** (Ctrl + Shift + D)

2. Clique em **"create a launch.json file"**

3. Escolha **"React Native"**

4. Configure os breakpoints nos arquivos `.tsx` ou `.ts`

5. Inicie o debug pressionando **F5**

**Ver Logs:**

- Console do VS Code mostra logs do Metro Bundler
- Use `console.log()` para debug no código
- Logs aparecem automaticamente no terminal

---

### Hot Reload e Fast Refresh

O aplicativo atualiza automaticamente quando você salva alterações:

- **Hot Reload:** Recarrega componentes sem perder o estado
- **Fast Refresh:** Preserva o estado do componente durante atualizações

Para recarregar manualmente:
- No Expo Go: Agite o celular e selecione "Reload"
- No emulador: Pressione `R` duas vezes

---

## 📱 Build para Android

### Build de Desenvolvimento (APK Local)

**Pré-requisitos:**
- Android Studio instalado
- SDK do Android configurado

```bash
# Gerar APK local
npx expo export:android
```

O APK será gerado na pasta `android/app/build/outputs/apk/`

---

### Build de Produção (APK com EAS)

**1. Instalar EAS CLI:**

```bash
npm install -g eas-cli
```

**2. Login no Expo:**

```bash
eas login
```

**3. Configurar build:**

```bash
eas build:configure
```

**4. Criar build APK:**

```bash
eas build -p android --profile preview
```

O APK será gerado e disponibilizado para download na plataforma Expo.

**5. Build para produção (AAB para Play Store):**

```bash
eas build -p android --profile production
```

---

### Publicar na Google Play Store

**1. Criar conta de desenvolvedor:**
- Acesse: https://play.google.com/console
- Pague a taxa única de US$ 25
- Complete o registro

**2. Criar um novo aplicativo:**
- No console, clique em "Criar app"
- Preencha as informações necessárias
- Configure a ficha da loja (descrição, capturas de tela, etc.)

**3. Gerar build de produção:**

```bash
eas build -p android --profile production
```

**4. Fazer upload do AAB:**

Opção A - Manualmente:
- Baixe o arquivo `.aab` gerado pelo EAS
- No console do Google Play, vá em "Produção"
- Faça upload do arquivo `.aab`

Opção B - Via EAS CLI:
```bash
eas submit -p android
```

**5. Preencher requisitos:**
- Classificação de conteúdo
- Política de privacidade
- Capturas de tela (pelo menos 2)
- Ícone de alta resolução (512x512px)
- Descrição completa

**6. Enviar para revisão:**
- Revise todas as informações
- Clique em "Enviar para revisão"
- Aguarde aprovação (pode levar de 3 a 7 dias)

---

## 🆚 Comparação: React Native vs Xamarin

### React Native (Escolha Atual)

**Tecnologia:** JavaScript/TypeScript + React

**Vantagens:**
- ✅ Grande comunidade e suporte
- ✅ Hot Reload para desenvolvimento rápido
- ✅ Performance próxima ao nativo
- ✅ Expo simplifica desenvolvimento e deploy
- ✅ Amplamente usado no mercado
- ✅ Fácil integração com bibliotecas JavaScript
- ✅ Documentação extensa

**Desvantagens:**
- ❌ Não usa C# (usa JavaScript/TypeScript)
- ❌ Curva de aprendizado para quem vem de C#

---

### Xamarin / .NET MAUI (Alternativa C#)

**Tecnologia:** C# + XAML

**O que é:**
- **Xamarin:** Framework anterior da Microsoft para desenvolvimento mobile
- **Status:** Descontinuado em maio de 2024
- **Substituto:** .NET MAUI (Multi-platform App UI)

**Vantagens:**
- ✅ Usa C# puro (familiar para desenvolvedores .NET)
- ✅ Usa Visual Studio (não VS Code)
- ✅ Compartilhamento de código com back-end .NET
- ✅ Suporte oficial Microsoft
- ✅ XAML para interfaces (similar a WPF)

**Desvantagens:**
- ❌ Comunidade menor que React Native
- ❌ Menos bibliotecas de terceiros
- ❌ Configuração mais complexa
- ❌ Não tem equivalente ao Expo
- ❌ Hot Reload limitado comparado ao React Native

---

### Comparação Técnica

| Característica | React Native | Xamarin / .NET MAUI |
|----------------|--------------|---------------------|
| **Linguagem** | JavaScript/TypeScript | C# |
| **IDE Principal** | VS Code | Visual Studio |
| **Hot Reload** | ✅ Excelente | ⚠️ Limitado |
| **Comunidade** | 🔥 Muito grande | ⚠️ Média |
| **Curva de Aprendizado** | Média | Baixa (se souber C#) |
| **Performance** | ⚡ Próxima ao nativo | ⚡ Nativa |
| **Tamanho do App** | ~20-30 MB | ~15-20 MB |
| **Deploy** | Expo facilita | Manual |
| **Bibliotecas** | 🔥 Milhares | ⚠️ Menos opções |
| **Custo** | ✅ Gratuito | ✅ Gratuito |
| **Suporte iOS** | ✅ Sim | ✅ Sim |

---

### Por que escolhemos React Native?

Para este projeto acadêmico, React Native foi escolhido por:

1. **Mercado de trabalho:** Mais vagas e demanda
2. **Facilidade de desenvolvimento:** Expo simplifica muito
3. **Comunidade:** Mais recursos e tutoriais disponíveis
4. **Performance:** Excelente para este tipo de aplicação
5. **Hot Reload:** Acelera muito o desenvolvimento

**Nota:** Se você tem experiência com C# e prefere usar Visual Studio, .NET MAUI é uma excelente alternativa. O código precisaria ser totalmente reescrito, mas a lógica de negócio seria similar.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 🐛 Solução de Problemas

### Erro: "Unable to resolve module"

```bash
# Limpar cache do Metro Bundler
npm start -- --clear

# Ou deletar node_modules e reinstalar
rm -rf node_modules
npm install
```

### Erro: "Port 8081 already in use"

```bash
# Matar processo na porta 8081
npx kill-port 8081

# Ou executar em outra porta
npm start -- --port 8082
```

### Erro de conexão com a API

- Verifique sua conexão com a internet
- Verifique se a API do PNCP está disponível
- Tente acessar https://pncp.gov.br/api/consulta/v1/orgaos no navegador

### Celular não conecta ao Expo Go

- Verifique se celular e PC estão na mesma rede Wi-Fi
- Tente usar "Tunnel" mode no Expo
- Desative temporariamente o firewall

---

## 📅 Histórico de Versões

| Versão | Data | Descrição |
|--------|------|-----------|
| 1.0.0 | Janeiro 2025 | Versão inicial do projeto |

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do Projeto de Extensão da Universidade Estácio.

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

- **GitHub Issues**: [Abrir Issue](https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio/issues)
- **Documentação Completa**: [TUTORIAL-COMPLETO.md](./TUTORIAL-COMPLETO.md)

---

## 🔗 Links Úteis

- [Documentação React Native](https://reactnative.dev/)
- [Documentação Expo](https://docs.expo.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Portal PNCP](https://pncp.gov.br/)
- [API PNCP - Swagger](https://pncp.gov.br/api/swagger-ui.html)
- [.NET MAUI (alternativa C#)](https://dotnet.microsoft.com/apps/maui)

---

**Desenvolvido com ❤️ para a Universidade Estácio**

**Última atualização:** Janeiro 2025
