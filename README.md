# 🧩 Sidebar Dinâmica com EJS e Variáveis de Ambiente

Este projeto é uma aplicação simples desenvolvida em **Node.js** e **EJS** que cria uma **sidebar dinâmica** com base em variáveis de ambiente configuradas no arquivo `.env`. Ao clicar nos itens da sidebar, o conteúdo é carregado dinamicamente em um **iframe**.

---

## 🚀 Funcionalidades

1. **Leitura dinâmica de variáveis de ambiente**:  
   Os links e rótulos da sidebar são lidos diretamente do arquivo `.env`.

2. **Interface intuitiva**:  
   A sidebar permite navegar entre diferentes aplicações (ou URLs).

3. **Renderização dinâmica**:  
   O conteúdo dos links é exibido em um **iframe** central, sem recarregar a página inteira.

4. **Extensível**:  
   Para adicionar novos links, basta incluir no arquivo `.env` e reiniciar o servidor.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript no servidor.  
- **Express** - Framework leve e rápido para servidor HTTP.  
- **EJS** - Template engine para renderizar HTML dinâmico.  
- **dotenv** - Gerenciador de variáveis de ambiente.  

---

## 📦 Estrutura do Projeto

```plaintext
.
├── public/                 # Arquivos estáticos (CSS, JS, etc)
├── views/                  # Templates EJS
│   └── index.ejs           # Página principal
├── .env                    # Configurações de variáveis de ambiente
├── app.js                  # Servidor principal com Express
├── package.json            # Dependências do projeto
└── README.md               # Documentação do projeto
