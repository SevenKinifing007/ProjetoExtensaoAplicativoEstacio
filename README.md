# 📱 Consulta PNCP - Aplicativo Mobile

Aplicativo mobile desenvolvido para consulta de dados de **Licitações**, **Dispensas** e **Contratos** junto ao **Portal Nacional de Contratações Públicas (PNCP)**.

> **Projeto de Extensão - Universidade Estácio**
> Desenvolvimento de aplicativo para dispositivos móveis Android

---

## 🚀 COMEÇANDO AGORA?

**Se você é iniciante e nunca programou, comece por aqui:**

### 📖 Guias Disponíveis:

1. **[TUTORIAL COMPLETO](./TUTORIAL-COMPLETO.md)** 👈 **COMECE AQUI!**
   - Guia ultra detalhado do zero ao aplicativo rodando
   - Para quem nunca programou antes
   - Passo a passo com explicações simples
   - Tempo estimado: 30-45 minutos

2. **[GUIA RÁPIDO](./GUIA-RAPIDO.md)** 👈 **Para Consulta Rápida**
   - Checklist e referência rápida
   - Comandos importantes
   - Solução de problemas
   - Imprima e tenha sempre à mão!

3. **[README Completo](./README.md)** 👈 **Documentação Técnica**
   - Você está aqui!
   - Informações técnicas detalhadas
   - Para consulta avançada

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Executar](#-como-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API do PNCP](#-api-do-pncp)
- [Guia para Iniciantes](#-guia-para-iniciantes)
- [Build para Android](#-build-para-android)
- [Contribuindo](#-contribuindo)
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

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

### Obrigatórios

1. **Node.js** (versão 18 ou superior)
   - Download: https://nodejs.org/
   - Verificar instalação: `node --version`

2. **NPM** (vem com o Node.js)
   - Verificar instalação: `npm --version`

3. **Git**
   - Download: https://git-scm.com/
   - Verificar instalação: `git --version`

### Recomendados

4. **Visual Studio Code** (IDE recomendada)
   - Download: https://code.visualstudio.com/
   - Extensões recomendadas:
     - React Native Tools
     - ESLint
     - Prettier
     - TypeScript and JavaScript Language Features

5. **Expo Go** (para testar no celular)
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent
   - iOS: https://apps.apple.com/app/expo-go/id982107779

---

## 🚀 Instalação

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio.git
cd ProjetoExtensaoAplicativoEstacio
```

### Passo 2: Instalar Dependências

```bash
npm install
```

Este comando irá baixar todas as bibliotecas necessárias listadas no arquivo `package.json`.

---

## ▶️ Como Executar

### Iniciar o Servidor de Desenvolvimento

```bash
npm start
```

Este comando irá:
1. Iniciar o Metro Bundler (servidor de desenvolvimento)
2. Abrir uma interface no navegador com um QR Code

### Opções de Execução

#### 1. Executar no Emulador Android

```bash
npm run android
```

**Requisitos:**
- Android Studio instalado
- Emulador Android configurado
- SDK do Android configurado

#### 2. Executar no Dispositivo Físico (Recomendado para Iniciantes)

1. Instale o **Expo Go** no seu celular Android
2. Execute `npm start` no computador
3. Abra o Expo Go no celular
4. Escaneie o QR Code exibido no terminal ou navegador

#### 3. Executar no Navegador Web

```bash
npm run web
```

**Nota:** Algumas funcionalidades podem não funcionar perfeitamente na web.

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
| `App.tsx` | Ponto de entrada da aplicação (como Program.cs em C#) |
| `app.json` | Configurações do aplicativo (nome, ícone, permissões) |
| `package.json` | Lista de dependências e scripts de execução |
| `tsconfig.json` | Configurações do compilador TypeScript |

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
  .then(data => console.log(data));
```

### Documentação Oficial

- Portal PNCP: https://pncp.gov.br/
- Documentação da API: https://pncp.gov.br/api/swagger-ui.html

---

## 📚 Guia para Iniciantes

### Conceitos Básicos

#### 1. Componentes

Em React Native, tudo é um **componente**. Pense em componentes como blocos de construção reutilizáveis.

```typescript
// Componente simples
function MeuComponente() {
  return <Text>Olá Mundo!</Text>;
}
```

#### 2. Props (Propriedades)

Props são como **parâmetros** que você passa para um componente.

```typescript
// Similar a passar parâmetros para um método em C#
function Saudacao({ nome }: { nome: string }) {
  return <Text>Olá, {nome}!</Text>;
}

// Uso
<Saudacao nome="João" />
```

#### 3. State (Estado)

State é como uma **variável que causa re-renderização** quando muda.

```typescript
const [contador, setContador] = useState(0);

// Similar a:
// private int contador = 0;
// com notificação de mudança automática
```

#### 4. Async/Await

Para operações assíncronas (como chamadas de API):

```typescript
async function buscarDados() {
  const resposta = await fetch(url);
  const dados = await resposta.json();
  return dados;
}
```

### Comparação com C#

| React Native / TypeScript | C# / .NET |
|---------------------------|-----------|
| `interface` | `interface` |
| `type` | `type alias` |
| `const`, `let` | `var`, `const` |
| `async/await` | `async/await` |
| `=>` (arrow function) | `=>` (lambda) |
| `useState` | `INotifyPropertyChanged` |
| `.tsx` (JSX) | `.xaml` (XAML) |

---

## 📱 Build para Android

### Build de Desenvolvimento

```bash
# Build local (requer Android Studio)
npm run android
```

### Build de Produção (APK)

```bash
# Instalar EAS CLI
npm install -g eas-cli

# Login no Expo
eas login

# Configurar build
eas build:configure

# Criar build APK
eas build -p android --profile preview
```

O APK será gerado e disponibilizado para download na plataforma Expo.

### Publicar na Google Play Store

```bash
# Build para produção
eas build -p android --profile production

# Submeter para a Play Store
eas submit -p android
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📝 Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS (requer macOS)
npm run ios

# Executar no navegador
npm run web

# Limpar cache
npm start -- --clear

# Instalar nova dependência
npm install nome-da-biblioteca

# Verificar erros TypeScript
npx tsc --noEmit
```

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
- **Email**: [Seu email acadêmico]

---

## 🔗 Links Úteis

- [Documentação React Native](https://reactnative.dev/)
- [Documentação Expo](https://docs.expo.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Portal PNCP](https://pncp.gov.br/)
- [API PNCP - Swagger](https://pncp.gov.br/api/swagger-ui.html)

---

**Desenvolvido com ❤️ para a Universidade Estácio**

---

### 📅 Histórico de Versões

| Versão | Data | Descrição |
|--------|------|-----------|
| 1.0.0 | 2024 | Versão inicial do projeto |

---

## 🎓 Aprendizados

Este projeto proporciona aprendizado em:

- ✅ Desenvolvimento mobile com React Native
- ✅ Consumo de APIs REST públicas
- ✅ TypeScript e tipagem estática
- ✅ Componentização e reutilização de código
- ✅ Gerenciamento de estado em React
- ✅ Async/Await e Promises
- ✅ Estilização com StyleSheet
- ✅ Publicação de aplicativos móveis

---

**Última atualização:** Novembro 2024
