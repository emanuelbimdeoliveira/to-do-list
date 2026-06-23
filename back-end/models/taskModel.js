import db from "../database/database.js";

const create = (
  titulo,
  descricao,
  dataCriacao,
  callback
) => {
  db.run(
    `
    INSERT INTO tarefas (
      titulo,
      descricao,
      concluida,
      data_criacao
    )
    VALUES (?, ?, ?, ?)
    `,
    [titulo, descricao, false, dataCriacao],

    function(err) {
      if (err) {
        return callback(err, null);
      }
      callback(null, this.lastID);
    }
  );
};

const findAll = (callback) => {
  db.all("SELECT * FROM tarefas", [], (err, rows) => {
    if (err) {
      return callback(err, null);
    }

    callback(null, rows);
  });
}

const findById = (id, callback) => {
  db.get("SELECT * FROM tarefas WHERE id = ?", [id], (err, row) => {
    if (err) {
      return callback(err, null);
    }

    callback(null, row);
  });
}

function deleteById(id, callback) {
  db.run("DELETE FROM tarefas WHERE id = ?", [id], function (err) {
    if (err) {
      return callback(err);
    }

    callback(null, this.changes);
  });
}

function update(id, titulo, descricao, concluida, dataConclusao, callback) {
  db.run(
    `
        UPDATE tarefas
        SET
            titulo = ?,
            descricao = ?,
            concluida = ?,
            data_conclusao = ?
        WHERE id = ?
        `,
    [titulo, descricao, concluida, dataConclusao, id],
    function (err) {
      if (err) {
        return callback(err);
      }

      callback(null, this.changes);
    },
  );
}
export default {
  create,
  findAll,
  findById,
  deleteById,
  update,
};
