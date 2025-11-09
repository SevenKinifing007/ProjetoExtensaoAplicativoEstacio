# 🚀 GUIA RÁPIDO - CHECKLIST

> Imprima ou salve este guia para consulta rápida!

---

## 📦 PRIMEIRA VEZ (Instalar tudo)

### ☑️ Checklist de Instalação:

```
[ ] 1. Instalar Node.js
       https://nodejs.org/ → Baixar versão LTS

[ ] 2. Instalar Git
       https://git-scm.com/download/win

[ ] 3. Instalar VS Code
       https://code.visualstudio.com/

[ ] 4. Instalar Expo Go no celular
       Google Play → Buscar "Expo Go"

[ ] 5. Reiniciar o computador
```

### ☑️ Verificar Instalação:

Abra o PowerShell e digite cada comando:

```bash
node --version     # Deve mostrar v20.x.x ou superior
npm --version      # Deve mostrar 10.x.x ou superior
git --version      # Deve mostrar git version 2.x.x
```

---

## 📥 BAIXAR O PROJETO (Só uma vez)

### Passo a Passo:

**1. Criar pasta:**
```
C:\Users\CENTI\Desktop\Projeto ESTACIO - Disposito Moveis\Repositorio
```

**2. Abrir PowerShell nessa pasta:**
- Clicar na barra de endereço
- Digitar `powershell`
- Pressionar Enter

**3. Clonar o repositório:**
```bash
git clone https://github.com/SevenKinifing007/ProjetoExtensaoAplicativoEstacio.git
```

**4. Entrar na pasta:**
```bash
cd ProjetoExtensaoAplicativoEstacio
```

**5. Instalar dependências:**
```bash
npm install
```
⏰ Aguardar 2-5 minutos

---

## ▶️ RODAR O APLICATIVO (Toda vez)

### Comandos:

**1. Abrir PowerShell na pasta do projeto**

**2. Iniciar servidor:**
```bash
npm start
```
⏰ Aguardar 30-60 segundos

**3. No celular:**
- Abrir Expo Go
- Escanear QR Code
- Aguardar carregar

**4. Pronto! App rodando! 🎉**

---

## 📝 EDITAR O CÓDIGO

### Comandos:

**1. Abrir VS Code:**
```bash
code .
```

**2. Editar arquivos:**
- src/screens/HomeScreen.tsx (tela principal)
- src/components/ (componentes)
- src/services/pncpService.ts (chamadas API)

**3. Salvar:**
- Ctrl + S

**4. Ver mudanças no celular automaticamente!**

---

## 🔄 ATUALIZAR NO GITHUB

### Quando terminar mudanças:

```bash
# Ver o que mudou
git status

# Adicionar tudo
git add .

# Fazer commit
git commit -m "Descrição do que mudou"

# Enviar pro GitHub
git push
```

---

## ⚠️ PROBLEMAS COMUNS

| Problema | Solução Rápida |
|----------|----------------|
| "npm não reconhecido" | Reiniciar PowerShell ou PC |
| "git não reconhecido" | Reiniciar PowerShell ou PC |
| Celular não conecta | Verificar se estão na mesma rede Wi-Fi |
| App não carrega | `npm start -- --clear` |
| Porta 8081 em uso | `npx kill-port 8081` depois `npm start` |

---

## 🎯 FLUXO DIÁRIO

```
1. Abrir PowerShell na pasta do projeto
   ↓
2. npm start
   ↓
3. Escanear QR Code no Expo Go
   ↓
4. code . (abrir VS Code)
   ↓
5. Editar código
   ↓
6. Salvar (Ctrl + S)
   ↓
7. Ver mudanças no celular
   ↓
8. Quando terminar: git add . && git commit -m "..." && git push
```

---

## 📂 CAMINHOS IMPORTANTES

**Pasta do projeto:**
```
C:\Users\CENTI\Desktop\Projeto ESTACIO - Disposito Moveis\Repositorio\ProjetoExtensaoAplicativoEstacio
```

**Arquivos principais:**
```
App.tsx                          # Arquivo principal
src/screens/HomeScreen.tsx       # Tela principal
src/components/ConsultaButton.tsx  # Botão
src/services/pncpService.ts      # API
app.json                         # Configurações
```

---

## 🆘 AJUDA EMERGENCIAL

**Se nada funcionar:**

1. Fechar tudo (PowerShell, VS Code, Expo Go)
2. Reiniciar o celular
3. Reiniciar o computador
4. Tentar de novo

**Se ainda não funcionar:**

```bash
# Limpar tudo e reinstalar
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

## 📞 COMANDOS ÚTEIS

```bash
# Navegar para pasta do projeto
cd "C:\Users\CENTI\Desktop\Projeto ESTACIO - Disposito Moveis\Repositorio\ProjetoExtensaoAplicativoEstacio"

# Rodar normalmente
npm start

# Rodar limpando cache
npm start -- --clear

# Matar processo na porta 8081
npx kill-port 8081

# Ver status do Git
git status

# Ver log de commits
git log --oneline

# Abrir VS Code
code .

# Reinstalar tudo
npm install
```

---

## ✅ CHECKLIST ANTES DE COMEÇAR

Toda vez, antes de `npm start`:

```
[ ] Estou na pasta certa?
[ ] PowerShell aberto?
[ ] Celular e PC na mesma rede Wi-Fi?
[ ] Expo Go instalado no celular?
[ ] Tem internet?
```

---

## 🎓 DICAS

- **💾 Salve sempre:** Ctrl + S no VS Code
- **🔄 Hot Reload:** Mudanças aparecem automaticamente no celular
- **📝 Comente:** Use `//` para comentários no código
- **🐛 Console.log:** Use `console.log()` para debug
- **📚 README:** Leia o README.md completo para detalhes

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ Rodar o app pela primeira vez
2. ✅ Fazer uma mudança simples (ex: cor de botão)
3. ✅ Estudar o arquivo HomeScreen.tsx
4. ✅ Entender como funciona a API
5. ✅ Adicionar novas funcionalidades

---

**Criado para:** Projeto de Extensão - Universidade Estácio

**Última atualização:** Novembro 2024
