# 📱 TUTORIAL COMPLETO - DO ZERO AO APLICATIVO RODANDO

> **Para iniciantes absolutos em programação**
>
> Este guia foi feito para que QUALQUER pessoa consiga rodar o aplicativo, mesmo sem saber programar!

---

## 📋 O QUE VAMOS FAZER?

Vamos instalar programas no seu computador e depois rodar o aplicativo no seu celular.

**Tempo estimado:** 30-45 minutos (na primeira vez)

**O que você precisa:**
- ✅ Computador com Windows
- ✅ Celular Android
- ✅ Internet (Wi-Fi)
- ✅ Paciência (você vai conseguir!)

---

## 🎯 ÍNDICE RÁPIDO

1. [PARTE 1: Instalar Programas](#parte-1-instalar-programas-no-computador)
2. [PARTE 2: Baixar o Código](#parte-2-baixar-o-código-do-github)
3. [PARTE 3: Preparar o Projeto](#parte-3-preparar-o-projeto)
4. [PARTE 4: Rodar no Celular](#parte-4-rodar-no-celular)
5. [PARTE 5: Ver o Código](#parte-5-ver-e-editar-o-código)
6. [PROBLEMAS E SOLUÇÕES](#problemas-comuns)

---

# PARTE 1: INSTALAR PROGRAMAS NO COMPUTADOR

Vamos instalar 3 programas importantes.

---

## 📥 PASSO 1.1: Instalar o Node.js

**O que é:** Node.js é como o "motor" que faz o React Native funcionar.

### Como instalar:

1. **Abra seu navegador** (Chrome, Edge, Firefox, etc.)

2. **Digite na barra de endereço:**
   ```
   https://nodejs.org/
   ```

3. **Você vai ver uma página com 2 botões verdes**
   - Um escrito algo como "20.x.x LTS" (recomendado)
   - Outro escrito "21.x.x Current"

4. **Clique no botão "LTS" (o primeiro)**
   - LTS significa "versão estável e recomendada"

5. **O arquivo vai baixar** (geralmente vai para a pasta "Downloads")
   - O arquivo tem um nome como: `node-v20.11.0-x64.msi`

6. **Quando terminar de baixar:**
   - Vá até a pasta "Downloads"
   - Dê **duplo clique** no arquivo que baixou

7. **Vai abrir uma janela de instalação:**
   - Clique em **"Next"** (Avançar)
   - **IMPORTANTE:** Marque a caixinha **"Automatically install the necessary tools"**
   - Continue clicando em **"Next"** até aparecer **"Install"**
   - Clique em **"Install"**
   - Pode pedir senha de administrador - digite se pedir

8. **Aguarde a instalação terminar** (2-5 minutos)

9. **Clique em "Finish"**

### ✅ Verificar se instalou corretamente:

1. **Abrir o PowerShell:**
   - Pressione a tecla **Windows** (aquela com o logo do Windows)
   - Digite: `powershell`
   - Pressione **Enter**

2. **Uma janela azul vai abrir** (isso é o PowerShell)

3. **Digite exatamente isso e pressione Enter:**
   ```
   node --version
   ```

4. **Deve aparecer algo como:**
   ```
   v20.11.0
   ```

5. **Agora digite isso e pressione Enter:**
   ```
   npm --version
   ```

6. **Deve aparecer algo como:**
   ```
   10.2.4
   ```

**✅ Se apareceu os números, DEU CERTO!**

**❌ Se apareceu "comando não reconhecido":**
- Feche o PowerShell
- **Reinicie o computador**
- Tente de novo

---

## 📥 PASSO 1.2: Instalar o Git

**O que é:** Git é o programa que baixa o código do GitHub para o seu computador.

### Como instalar:

1. **Abra seu navegador**

2. **Digite na barra de endereço:**
   ```
   https://git-scm.com/download/win
   ```

3. **O download deve começar automaticamente**
   - Se não começar, clique em "Click here to download manually"
   - O arquivo tem um nome como: `Git-2.43.0-64-bit.exe`

4. **Quando terminar de baixar:**
   - Vá até a pasta "Downloads"
   - Dê **duplo clique** no arquivo

5. **Vai abrir uma janela de instalação:**
   - Clique em **"Next"** várias vezes
   - **Deixe tudo como está** (não precisa mudar nada)
   - Quando chegar em "Choosing the default editor", pode deixar "Vim" mesmo
   - Continue clicando **"Next"** até aparecer **"Install"**
   - Clique em **"Install"**

6. **Aguarde a instalação terminar** (1-3 minutos)

7. **Clique em "Finish"**

### ✅ Verificar se instalou corretamente:

1. **Abrir o PowerShell** (como você fez antes)

2. **Digite e pressione Enter:**
   ```
   git --version
   ```

3. **Deve aparecer algo como:**
   ```
   git version 2.43.0.windows.1
   ```

**✅ Se apareceu, DEU CERTO!**

**❌ Se apareceu "comando não reconhecido":**
- Feche o PowerShell
- **Reinicie o computador**
- Tente de novo

---

## 📥 PASSO 1.3: Instalar o Visual Studio Code

**O que é:** VS Code é o programa onde você vai ver e editar o código do aplicativo.

### Como instalar:

1. **Abra seu navegador**

2. **Digite na barra de endereço:**
   ```
   https://code.visualstudio.com/
   ```

3. **Clique no botão azul grande "Download for Windows"**
   - O arquivo tem um nome como: `VSCodeUserSetup-x64-1.85.1.exe`

4. **Quando terminar de baixar:**
   - Vá até a pasta "Downloads"
   - Dê **duplo clique** no arquivo

5. **Vai abrir uma janela de instalação:**
   - Clique em **"I accept the agreement"** (aceito o acordo)
   - Clique em **"Next"**
   - **IMPORTANTE:** Marque TODAS essas caixinhas:
     - ✅ Add "Open with Code" action to Windows Explorer file context menu
     - ✅ Add "Open with Code" action to Windows Explorer directory context menu
     - ✅ Register Code as an editor for supported file types
     - ✅ Add to PATH
   - Clique em **"Next"**
   - Clique em **"Install"**

6. **Aguarde a instalação terminar** (2-5 minutos)

7. **Clique em "Finish"**

8. **O VS Code vai abrir automaticamente**
   - Pode fechar por enquanto

### ✅ Verificar se instalou corretamente:

**Se o VS Code abriu, DEU CERTO!** ✅

---

## 📱 PASSO 1.4: Instalar o Expo Go no Celular

**O que é:** Expo Go é o aplicativo que vai rodar o seu app no celular.

### Como instalar:

1. **Pegue seu celular Android**

2. **Abra a Google Play Store**
   - É o aplicativo com um triângulo colorido

3. **Na barra de pesquisa, digite:**
   ```
   Expo Go
   ```

4. **Toque no aplicativo "Expo Go"**
   - O ícone é roxo com um símbolo branco

5. **Toque em "Instalar"**

6. **Aguarde a instalação**

7. **Toque em "Abrir"**
   - Vai abrir o Expo Go
   - Pode fechar por enquanto

**✅ Se instalou, DEU CERTO!**

---

## 🎉 CHECKLIST - PARTE 1 COMPLETA

Antes de continuar, verifique:

- [ ] Node.js instalado (comando `node --version` funciona)
- [ ] NPM instalado (comando `npm --version` funciona)
- [ ] Git instalado (comando `git --version` funciona)
- [ ] Visual Studio Code instalado
- [ ] Expo Go instalado no celular

**✅ Se marcou tudo, pode continuar para a PARTE 2!**

---

# PARTE 2: BAIXAR O CÓDIGO DO GITHUB

Agora vamos baixar o código do aplicativo para o seu computador.

---

## 📁 PASSO 2.1: Criar a Pasta do Projeto

**Importante:** Vamos criar uma pasta específica onde o código vai ficar.

### Como fazer:

1. **Abra o "Explorador de Arquivos"**
   - Pressione as teclas **Windows + E** juntas
   - Ou clique no ícone da pasta amarela na barra de tarefas

2. **Navegue até:**
   ```
   C:\Users\CENTI\Desktop
   ```
   - Clique em "Este Computador" (ou "This PC")
   - Clique em "Disco Local (C:)"
   - Clique em "Users" (ou "Usuários")
   - Clique em "CENTI" (seu nome de usuário)
   - Clique em "Desktop" (ou "Área de Trabalho")

3. **Criar a primeira pasta:**
   - Clique com o botão direito em um espaço vazio
   - Escolha **"Novo" → "Pasta"**
   - Digite o nome: `Projeto ESTACIO - Disposito Moveis`
   - Pressione **Enter**

4. **Entrar na pasta que criou:**
   - Dê **duplo clique** na pasta `Projeto ESTACIO - Disposito Moveis`

5. **Criar a segunda pasta:**
   - Clique com o botão direito em um espaço vazio
   - Escolha **"Novo" → "Pasta"**
   - Digite o nome: `Repositorio`
   - Pressione **Enter**

6. **Entrar na pasta "Repositorio":**
   - Dê **duplo clique** na pasta `Repositorio`

**Agora você está dentro de:**
```
C:\Users\CENTI\Desktop\Projeto ESTACIO - Disposito Moveis\Repositorio
```

**✅ Pasta criada com sucesso!**

---

## 💻 PASSO 2.2: Abrir o PowerShell na Pasta

**O que vamos fazer:** Abrir o PowerShell exatamente nessa pasta.

### Como fazer:

1. **Você ainda está na pasta "Repositorio", certo?**
   - Se não, volte lá (seguindo o passo anterior)

2. **Olhe para a barra de endereço no topo da janela**
   - Lá está escrito algo como: `C:\Users\CENTI\Desktop\Projeto ESTACIO - Disposito Moveis\Repositorio`

3. **Clique UMA VEZ na barra de endereço**
   - O texto vai ficar azul (selecionado)

4. **Digite exatamente:**
   ```
   powershell
   ```

5. **Pressione Enter**

6. **Uma janela azul vai abrir** (PowerShell)
   - No topo da janela deve estar escrito algo como:
   ```
   Windows PowerShell
   ```
   - E a linha deve mostrar:
   ```
   PS C:\Users\CENTI\Desktop\Projeto ESTACIO - Disposito Moveis\Repositorio>
   ```

**✅ Se abriu a janela azul, DEU CERTO!**

---

## 📥 PASSO 2.3: Baixar o Código do GitHub

**O que vamos fazer:** Copiar todo o código do GitHub para o seu computador.

### Como fazer:

1. **Na janela azul do PowerShell que está aberta**

2. **Digite EXATAMENTE isso** (pode copiar e colar):
   ```
   git clone https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio.git
   ```

3. **Pressione Enter**

4. **Você vai ver várias mensagens aparecendo**, algo como:
   ```
   Cloning into 'ProjetoExtensaoAplicativoEstacio'...
   remote: Enumerating objects: ...
   remote: Counting objects: 100% (x/x), done.
   Receiving objects: 100% (x/x), done.
   ```

5. **Aguarde até aparecer a linha com `PS C:\...>` de novo**
   - Isso significa que terminou!

**✅ Código baixado com sucesso!**

---

## 📂 PASSO 2.4: Entrar na Pasta do Projeto

**O que vamos fazer:** Entrar na pasta onde o código foi baixado.

### Como fazer:

1. **Na janela do PowerShell, digite:**
   ```
   cd ProjetoExtensaoAplicativoEstacio
   ```

2. **Pressione Enter**

3. **A linha agora deve mostrar:**
   ```
   PS C:\Users\CENTI\Desktop\Projeto ESTACIO - Disposito Moveis\Repositorio\ProjetoExtensaoAplicativoEstacio>
   ```

**✅ Você está dentro da pasta do projeto!**

---

## 🎉 CHECKLIST - PARTE 2 COMPLETA

Antes de continuar, verifique:

- [ ] Pasta "Repositorio" criada
- [ ] PowerShell aberto na pasta certa
- [ ] Comando `git clone` executado sem erros
- [ ] Você está dentro da pasta "ProjetoExtensaoAplicativoEstacio"

**✅ Se marcou tudo, pode continuar para a PARTE 3!**

---

# PARTE 3: PREPARAR O PROJETO

Agora vamos "instalar as bibliotecas" que o projeto precisa.

---

## 📦 PASSO 3.1: Instalar as Dependências

**O que vamos fazer:** Baixar todas as bibliotecas que o aplicativo usa.

**Analogia:** É como baixar os DLLs que um programa C# precisa.

### Como fazer:

1. **Na janela do PowerShell que está aberta**

2. **Digite exatamente:**
   ```
   npm install
   ```

3. **Pressione Enter**

4. **AGUARDE!** Isso vai demorar alguns minutos (2-5 minutos)

5. **Você vai ver MUITAS mensagens passando na tela**, algo como:
   ```
   npm WARN deprecated ...
   added 727 packages, and audited 728 packages in 3m
   ```

6. **Quando terminar, vai aparecer a linha `PS C:\...>` de novo**

**✅ Se não apareceu erros em vermelho grande, DEU CERTO!**

**❌ Se apareceu erro:**
- Verifique se tem internet
- Tente novamente: `npm install`

---

## 🎉 CHECKLIST - PARTE 3 COMPLETA

Antes de continuar, verifique:

- [ ] Comando `npm install` executado
- [ ] Apareceu mensagem "added 727 packages" (ou número parecido)
- [ ] Não teve erros grandes em vermelho

**✅ Se marcou tudo, pode continuar para a PARTE 4!**

---

# PARTE 4: RODAR NO CELULAR

**Agora vem a parte mais legal!** Vamos rodar o aplicativo no celular!

---

## 🚀 PASSO 4.1: Iniciar o Servidor

**O que vamos fazer:** Ligar o "servidor" que vai enviar o app para o celular.

### Como fazer:

1. **Na janela do PowerShell, digite:**
   ```
   npm start
   ```

2. **Pressione Enter**

3. **AGUARDE!** Isso vai demorar uns 30-60 segundos

4. **Você vai ver mensagens aparecendo**, e no final algo como:
   ```
   Metro waiting on exp://192.168.x.x:8081
   › Press a │ open Android
   › Press w │ open web

   › Press r │ reload app
   › Press m │ toggle menu
   ```

5. **AUTOMATICAMENTE vai abrir uma página no seu navegador**
   - A página mostra um **QR Code grande** (quadrado preto e branco)

**✅ Se apareceu o QR Code, DEU CERTO!**

**⚠️ IMPORTANTE: NÃO FECHE A JANELA DO POWERSHELL!**
- Deixe ela aberta rodando
- Se fechar, o app para de funcionar

---

## 📱 PASSO 4.2: Conectar o Celular

**O que vamos fazer:** Fazer o celular e o computador "conversarem".

### Como fazer:

1. **Certifique-se que:**
   - ✅ Celular está conectado na **mesma rede Wi-Fi** que o computador
   - ✅ Expo Go está instalado no celular

2. **Pegue seu celular**

3. **Abra o aplicativo "Expo Go"** (o roxo que você instalou)

4. **Você vai ver uma tela com:**
   - Um botão "Scan QR code" (Escanear QR code)

5. **Toque em "Scan QR code"**

6. **Pode pedir permissão para usar a câmera:**
   - Toque em **"Permitir"** ou **"Allow"**

7. **Aponte a câmera do celular para o QR Code na tela do computador**
   - O QR Code está na página do navegador que abriu

8. **O Expo Go vai detectar automaticamente**

9. **Você vai ver mensagens no celular:**
   ```
   Building JavaScript bundle: 100%
   Downloading JavaScript bundle: 100%
   ```

10. **AGUARDE!** Na primeira vez, pode demorar 1-3 minutos

11. **O APLICATIVO VAI ABRIR!** 🎉

---

## 🎊 PASSO 4.3: VOCÊ CONSEGUIU!

**Se o aplicativo abriu no celular, PARABÉNS!** 🎉🎉🎉

**O que você deve ver:**
- Uma tela azul no topo escrita "Consulta PNCP"
- Três botões:
  - CONSULTAR LICITAÇÕES (azul)
  - CONSULTAR CONTRATOS (verde)
  - CONSULTAR DISPENSAS (vermelho)

**Pode testar:**
- Toque em um dos botões
- Vai aparecer um "loading" (carregando)
- Depois vai aparecer uma lista de dados

**🎉 FUNCIONOU!**

---

## 🎉 CHECKLIST - PARTE 4 COMPLETA

Verifique:

- [ ] Comando `npm start` executado
- [ ] QR Code apareceu no navegador
- [ ] Expo Go escaneou o QR Code
- [ ] Aplicativo abriu no celular
- [ ] Conseguiu tocar nos botões e ver os dados

**✅ Se marcou tudo, PARABÉNS! Você conseguiu rodar o app!**

---

# PARTE 5: VER E EDITAR O CÓDIGO

Agora vamos abrir o código no Visual Studio Code.

---

## 💻 PASSO 5.1: Abrir o Projeto no VS Code

### Como fazer:

1. **Na janela do PowerShell** (aquela que está rodando `npm start`)

2. **Pressione Ctrl + C**
   - Isso vai **parar** o servidor
   - É normal aparecer uma pergunta "Terminate batch job (Y/N)?"
   - Digite **Y** e pressione Enter

3. **Agora digite:**
   ```
   code .
   ```
   - Isso é: `code` + espaço + ponto

4. **Pressione Enter**

5. **O Visual Studio Code vai abrir!**

6. **Você vai ver:**
   - À esquerda: Lista de pastas e arquivos
   - No centro: Área para editar código
   - Embaixo: Terminal

**✅ VS Code aberto!**

---

## 📁 PASSO 5.2: Entender os Arquivos

**Arquivos importantes que você vai mexer:**

### 📂 **src/** - Pasta principal do código

- **src/screens/HomeScreen.tsx**
  - É a tela principal do app
  - Aqui estão os 3 botões e toda a lógica

- **src/components/ConsultaButton.tsx**
  - É o componente do botão estilizado

- **src/components/ItemCard.tsx**
  - É o "card" que mostra os dados

- **src/services/pncpService.ts**
  - Aqui estão as funções que chamam a API do PNCP

- **src/types/pncp.ts**
  - Aqui estão as definições de tipos (interfaces)

- **src/constants/api.ts**
  - Aqui estão as URLs da API

### 📂 Outros arquivos:

- **App.tsx**
  - Arquivo principal (ponto de entrada)

- **app.json**
  - Configurações do app (nome, ícone, etc.)

- **package.json**
  - Lista de bibliotecas que o app usa

---

## ✏️ PASSO 5.3: Fazer uma Mudança Simples

Vamos fazer uma mudança no código para você ver como funciona!

### Vamos mudar a cor de um botão:

1. **No VS Code, à esquerda, clique em:**
   ```
   src → components → ConsultaButton.tsx
   ```

2. **O arquivo vai abrir no centro**

3. **Procure a linha que tem:**
   ```typescript
   cor = '#1E40AF',
   ```
   - Deve estar mais ou menos na linha 20

4. **Mude para:**
   ```typescript
   cor = '#FF0000',
   ```
   - Isso vai deixar o botão vermelho

5. **Salve o arquivo:**
   - Pressione **Ctrl + S**
   - Ou clique em "File → Save"

---

## 🔄 PASSO 5.4: Ver a Mudança no Celular

**Agora vamos rodar de novo para ver a mudança!**

1. **No VS Code, vá até o Terminal (parte de baixo)**

2. **Se não tem terminal aberto:**
   - Clique em **"Terminal" → "New Terminal"** no menu do topo

3. **Digite:**
   ```
   npm start
   ```

4. **Pressione Enter**

5. **Aguarde o QR Code aparecer**

6. **No celular, abra o Expo Go de novo**

7. **Escaneie o QR Code**

8. **OLHE O BOTÃO!** Ele deve estar com uma cor diferente agora! 🎨

**✅ Viu? Suas mudanças aparecem no celular!**

---

## 🎉 PARABÉNS!

**Você aprendeu:**
- ✅ Instalar todas as ferramentas
- ✅ Baixar o código do GitHub
- ✅ Rodar o aplicativo no celular
- ✅ Abrir o código no VS Code
- ✅ Fazer mudanças e ver o resultado

---

# PROBLEMAS COMUNS

## ❌ Problema 1: "npm não é reconhecido"

**Solução:**
1. Reinicie o PowerShell
2. Se não funcionar, reinicie o computador
3. Tente novamente

---

## ❌ Problema 2: "git não é reconhecido"

**Solução:**
1. Reinicie o PowerShell
2. Se não funcionar, reinicie o computador
3. Tente novamente

---

## ❌ Problema 3: Celular não conecta (QR Code não funciona)

**Soluções:**

### Solução A: Verificar Wi-Fi
- ✅ Celular e computador estão na **MESMA rede Wi-Fi**?
- ✅ Não está usando dados móveis no celular?

### Solução B: Usar "Tunnel"
1. Na página do navegador onde está o QR Code
2. Procure por "Connection: lan"
3. Clique e mude para "Connection: tunnel"
4. Aguarde gerar um novo QR Code
5. Escaneie o novo QR Code

### Solução C: Desativar Firewall (temporariamente)
1. Vá em "Configurações do Windows"
2. Digite "Firewall"
3. Desative temporariamente
4. Tente conectar de novo
5. **Lembre de reativar depois!**

---

## ❌ Problema 4: Aplicativo não carrega (fica travado)

**Solução:**
1. No PowerShell, pressione **Ctrl + C**
2. Digite:
   ```
   npm start -- --clear
   ```
3. Pressione Enter
4. Escaneie o QR Code de novo

---

## ❌ Problema 5: Erro "Port 8081 already in use"

**Solução:**
1. Digite no PowerShell:
   ```
   npx kill-port 8081
   ```
2. Pressione Enter
3. Aguarde
4. Digite:
   ```
   npm start
   ```

---

## ❌ Problema 6: Erro ao instalar dependências

**Solução:**
1. Digite:
   ```
   rmdir /s /q node_modules
   ```
2. Confirme com **S** (Sim)
3. Digite:
   ```
   del package-lock.json
   ```
4. Digite:
   ```
   npm install
   ```
5. Aguarde a reinstalação

---

# 📚 COMANDOS IMPORTANTES (RESUMO)

```bash
# Ver versões instaladas
node --version
npm --version
git --version

# Navegar para a pasta do projeto
cd "C:\Users\CENTI\Desktop\Projeto ESTACIO - Disposito Moveis\Repositorio\ProjetoExtensaoAplicativoEstacio"

# Instalar dependências (só uma vez)
npm install

# Rodar o aplicativo
npm start

# Parar o servidor
Ctrl + C

# Limpar cache e rodar
npm start -- --clear

# Abrir VS Code
code .
```

---

# 🎯 FLUXO NORMAL DE TRABALHO

**Toda vez que você for trabalhar no projeto:**

1. Abra o PowerShell na pasta do projeto
2. Digite: `npm start`
3. Escaneie o QR Code no Expo Go
4. Abra o VS Code: `code .`
5. Faça suas mudanças
6. Salve (Ctrl + S)
7. **As mudanças aparecem automaticamente no celular!** (Hot Reload)

---

# 🆘 PRECISA DE AJUDA?

**Se algo não funcionou:**

1. Leia a seção de **PROBLEMAS COMUNS** acima
2. Tente reiniciar:
   - O PowerShell
   - O VS Code
   - O computador
   - O celular
3. Verifique se:
   - Tem internet
   - Celular e PC na mesma rede Wi-Fi
   - Todos os programas foram instalados corretamente

---

# 🎓 PRÓXIMOS PASSOS

**Agora que você sabe rodar o app, pode:**

1. **Estudar o código:**
   - Comece pelo arquivo `App.tsx`
   - Depois leia `src/screens/HomeScreen.tsx`
   - Leia os comentários (linhas que começam com `//`)

2. **Fazer pequenas mudanças:**
   - Mude cores
   - Mude textos
   - Mude tamanhos

3. **Ver as mudanças no celular automaticamente!**

---

**Última atualização:** Novembro 2024

**Criado para:** Projeto de Extensão - Universidade Estácio
