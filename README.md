# ProofERP — Registro Imutável de Documentos com Blockchain

## Visão Geral

O **ProofERP** é uma aplicação Web3 desenvolvida para realizar o registro imutável de documentos utilizando blockchain Ethereum.

A solução permite:
- registrar hashes SHA-256 de documentos;
- armazenar metadados na blockchain;
- consultar registros públicos;
- validar integridade documental;
- garantir prova de existência digital.

O projeto foi desenvolvido para o desafio **ProofChain — Blockchain** do HackWeb Web3.

---

# Demonstração em Vídeo

## Pitch Deck

Slides da apresentação:

https://github.com/comercial978/ProofERP/blob/main/slides/ProofERP_Hackathon_LGVG_v3.pdf

Caso o preview do GitHub não carregue corretamente em alguns navegadores, utilize o download direto do PDF:

https://raw.githubusercontent.com/comercial978/ProofERP/main/slides/ProofERP_Hackathon_LGVG_v3.pdf


---

🎥 **Vídeo oficial do projeto:**  
https://youtu.be/FACL5BhZqmY?si=oW9UeyokjTsu0p99

---

# Aplicação Online

🌐 **Deploy Vercel:**  
https://proof-erp.vercel.app/

---

# Repositório GitHub

💻 **Código-fonte completo:**  
https://github.com/comercial978/ProofERP

---

# Smart Contract (Sepolia)

🔗 **Contrato deployado na rede Sepolia:**  
https://sepolia.etherscan.io/address/0x0356d853CE5c60a3478c9B71A0983A82A25e1855

## Endereço do contrato

```solidity
0x0356d853CE5c60a3478c9B71A0983A82A25e1855
```

---

# Problema Resolvido

Empresas, ERPs e usuários frequentemente precisam comprovar:
- autenticidade documental;
- integridade de arquivos;
- data de existência;
- autoria de registros.

Soluções tradicionais dependem de bancos de dados centralizados e podem sofrer:
- alterações;
- exclusões;
- manipulação de registros;
- falhas de auditoria.

O ProofERP utiliza blockchain para criar uma camada pública e imutável de verificação.

---

# Solução

A aplicação:
1. gera hash SHA-256 do documento;
2. conecta com MetaMask;
3. envia transação para blockchain Ethereum;
4. grava:
   - hash;
   - nome;
   - tipo;
   - autor;
   - timestamp;
5. permite consulta pública do registro.

---

# Arquitetura do Projeto

```text
Usuário
   ↓
Frontend React + Vite
   ↓
ethers.js
   ↓
MetaMask
   ↓
Smart Contract Solidity
   ↓
Blockchain Ethereum (Sepolia)
```

---

# Fluxo da Aplicação

## Registro de Documento

1. Usuário seleciona arquivo
2. Sistema gera SHA-256
3. MetaMask solicita assinatura
4. Smart contract registra os dados
5. Blockchain confirma transação

---

## Consulta de Documento

1. Usuário informa hash
2. Aplicação consulta blockchain
3. Dados são retornados:
   - existência;
   - autor;
   - data;
   - tipo;
   - nome do documento

---

# Tecnologias Utilizadas

## Blockchain
- Solidity
- Ethereum
- Sepolia Testnet
- MetaMask

## Frontend
- React
- Vite
- JavaScript

## Integração Web3
- ethers.js

## Criptografia
- SHA-256

## Deploy
- Vercel

---

# Estrutura do Projeto

```bash
ProofERP/
│
├── contracts/
│   └── ProofERP.sol
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── scripts/
├── ignition/
├── test/
└── README.md
```

---

# Funcionalidades

## Registro Imutável
Armazena registros permanentemente na blockchain.

## Verificação Pública
Qualquer pessoa pode validar documentos.

## Integridade Criptográfica
Uso de SHA-256 para garantir autenticidade.

## Integração Web3
Conexão via MetaMask.

## Auditoria Blockchain
Transações públicas e verificáveis.

---

# Diferenciais do Projeto

- Aplicação prática para ERP
- Uso real de blockchain
- Registro descentralizado
- Validação pública
- Smart contract funcional
- Integração MetaMask
- Deploy online
- Código aberto
- Arquitetura Web3
- Compatível com auditoria e compliance

---

# Possíveis Aplicações

- Contratos digitais
- Compliance empresarial
- Auditoria documental
- Registro acadêmico
- Certificação digital
- Registro jurídico
- ERPs corporativos
- Cadeia de custódia documental

---

# Exemplo de Registro

## Hash registrado

```text
21f5f8309ff5d8930b1aa4c45cad11820a1941a4afacfd73b1c9455af180fd8
```

## Dados armazenados

- Nome: proposta ras
- Tipo: pdf
- Autor: carteira MetaMask
- Timestamp: blockchain Ethereum

---

# Prints do Projeto

## Interface Principal

```text
Adicione aqui o print principal da aplicação
```

## Consulta Blockchain

```text
Adicione aqui o print da consulta blockchain
```

---

# Como Executar Localmente

## Clonar projeto

```bash
git clone https://github.com/comercial978/ProofERP.git
```

---

## Entrar na pasta

```bash
cd ProofERP
```

---

## Instalar dependências

```bash
cd frontend
npm install
```

---

## Executar frontend

```bash
npm run dev
```

---

# Requisitos

- Node.js
- MetaMask
- Navegador compatível Web3

---

# Sobre o Desenvolvimento

Projeto desenvolvido individualmente para o HackWeb Web3.

---

# Autor

## Luiz Gustavo Vieira Guimarães

Turma 4 — HackWeb Web3

📸 Instagram:  
https://instagram.com/lgustavovguimaraes

🏢 Empresa:  
https://uaisoftware.com.br

---

# Licença

Projeto desenvolvido para fins educacionais e demonstração tecnológica no HackWeb Web3.