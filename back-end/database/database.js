import sqlite from "sqlite3";

const sqlite3 = sqlite.verbose();

const db = new sqlite3.Database("./database/tasks.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err.message);
  } else {
    console.log("Banco conectado!");
  }
});

db.run(`
    CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        descricao TEXT,
        concluida BOOLEAN DEFAULT FALSE,
        data_criacao DATETIME,
        data_conclusao DATETIME
    )
`);

export default db;
