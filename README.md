# 🚀 Processo Seletivo GAC - BrasilCard

## 📋 Sobre o Projeto

Este repositório contém os testes automatizados desenvolvidos para o processo seletivo do Grupo Adriano Cobuccio (Empresa BrasilCard). O projeto inclui testes de API com Postman/Newman e testes E2E com Cypress para a plataforma Bolt.

## 🧪 Projeto 1: Testes de API (Postman/Newman)

### 📋 Descrição
Coleção de testes automatizados para a API "Adquira sua Bolt" com validações de autenticação, funcionalidade e performance.

### 🔗 Endpoints Testados

| Método | Endpoint | Descrição | Status | Autenticação |
|--------|----------|-----------|--------|--------------|
| `GET` | `/combos` | Catálogo de maquininhas e planos | ✅ 200 | ✅ Obrigatória |
| `POST` | `/lead` | Cadastro de lead | ✅ 200 | ✅ Obrigatória |
| `POST` | `/metrics/update` | Métricas de visualização | ✅ 200 | ✅ Obrigatória |

### 🛠️ Passo a passo para executar os testes

**Passo 1: Importar a Collection `adquira_sua_bolt`**

**Passo 2: Importar o Environment `producao`**

**Passo 3: Configurar o Environment**
1. Selecione o environment **"producao"**
2. Verifique se as variáveis estão configuradas:
   - `baseUrl`: URL base da API

**Passo 4: Executar os Testes**
1. Coloque o mouse sobre a collection `adquira_sua_bolt`
2. Clique no botão "View more options"
2. Clique em **"Run"**
3. Selecione os testes desejados
4. Clique em **"Run adquira_sua_bolt"**

### 🎯 Funcionalidades dos Testes
- ✅ **Autenticação**: Validação de cookies
- ✅ **Validação de Schema**: Estrutura de resposta JSON
- ✅ **Dados Dinâmicos**: Seleção aleatória de combos e planos
- ✅ **Performance**: Tempo de resposta da API
- ✅ **Validação de Dados**: Campos obrigatórios e formatos

## 📈 Relatórios e Resultados

### 📊 Relatório Newman
- Arquivo: `bolt-api/Reporte-Newman-Testes-de-API.html`
- Contém resultados detalhados dos testes de API
- Inclui métricas de performance e cobertura

---

## 🎭 Projeto 2: Testes E2E (Cypress)

### 📋 Descrição
Testes automatizados para validação da funcionalidade do rodapé do site Bolt, incluindo links internos, externos e documentos PDF.

### 🧪 Casos de Teste Implementados

#### **Links Internos (Same-Origin)**
- **CT001**: Redirecionamento para "Sobre a Bolt"
- **CT004**: Redirecionamento para "Fale conosco" via "Ouvidoria"
- **CT006**: Redirecionamento para "Fale conosco" via "Contato"
- **CT007**: Redirecionamento para "Política de Segurança Cibernética"
- **CT009**: Redirecionamento para "Política e Normas Internas de PLD"

#### **Links Externos (Cross-Origin)**
- **CT002**: Redirecionamento para "Grupo Adriano Cobuccio"
- **CT003**: Verificação do atendimento online Bolt

#### **Documentos PDF**
- **CT008**: Validação do PDF "Política de Segurança Cibernética"
- **CT010**: Validação do PDF "Política e Normas Internas de PLD"

#### **Funcionalidades Especiais**
- **CT005**: Verificação dos meios de contato na página "Fale conosco"

### 🛠️ Como Executar os Testes Cypress

#### **Pré-requisitos**
- Node.js (versão 14 ou superior)
- npm

#### **Passo 1: Instalar Dependências**
```bash
cd bolt-cypress
npm install
```

#### **Passo 2: Executar Testes (Modo Headless)**
```bash
npm run test
```

#### **Passo 3: Executar Testes (Modo Interativo)**
```bash
npm run test:open
```

### ⚙️ Configuração do Cypress

O projeto está configurado com:
- **Base URL**: `https://bolt.com.br`

## 🛠️ Tecnologias Utilizadas

<div align='center'>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" width="50" height="50"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" width="50" height="50"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50" height="50">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50" height="50"/>
</div>

## 👩‍💻 Autor

<p align="center">Desenvolvido por <strong>Mariana Soares</strong></p>

<div align="center">
   <br>
   <a href = "mailto:marianasoares.ti@gmail.com">
      <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank">
   </a>
   <a href="https://www.linkedin.com/in/mariana-galindo-soares/" target="_blank">
      <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank">
   </a> 
   <br>
</div>