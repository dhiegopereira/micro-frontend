const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Função para gerar dinamicamente os apps a partir das variáveis de ambiente
function getAppsFromEnv() {
  const apps = [];
  const envKeys = Object.keys(process.env);

  // Itera sobre as variáveis de ambiente e busca URLs e Labels
  for (let i = 1; i <= 10; i++) {
    const labelKey = `LABEL_APP${i}`;
    const urlKey = `URL_APP${i}`;
    if (envKeys.includes(labelKey) && envKeys.includes(urlKey)) {
      apps.push({
        label: process.env[labelKey],
        url: process.env[urlKey],
      });
    }
  }
  return apps;
}

// Rota principal
app.get("/", (req, res) => {
  const apps = getAppsFromEnv();
  res.render("index", { apps });
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
