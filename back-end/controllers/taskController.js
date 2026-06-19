import taskModel from "../models/taskModel.js";

function createTask(req, res) {
  const { titulo, descricao } = req.body;

  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({
      erro: "Título é obrigatório",
    });
  }

  if (titulo.length > 100) {
    return res.status(400).json({
      erro: "Título muito grande",
    });
  }

  const dataCriacao = new Date().toISOString();

  taskModel.create(titulo, descricao, dataCriacao);

  res.status(201).json({
    mensagem: "Tarefa criada com sucesso",
  });
}

function listTasks(req, res) {
  taskModel.findAll((err, tasks) => {
    if (err) {
      return res.status(500).json({
        erro: err.message,
      });
    }
    res.json(tasks);
  });
}

function searchById(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      erro: "ID inválido",
    });
  }

  taskModel.findById(id, (err, task) => {
    if (err) {
      return res.status(500).json({
        erro: err.message,
      });
    }

    if (!task) {
      return res.status(404).json({
        mensagem: "Tarefa não encontrada",
      });
    }
    res.json(task);
  });
}

function deleteTask(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      erro: "ID inválido",
    });
  }

  taskModel.deleteById(id, (err, changes) => {
    if (err) {
      return res.status(500).json({
        erro: err.message,
      });
    }

    if (changes === 0) {
      return res.status(404).json({
        mensagem: "Tarefa não encontrada",
      });
    }

    res.json({
      mensagem: "Tarefa removida com sucesso",
    });
  });
}

function updateTask(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      erro: "ID inválido",
    });
  }

  const { titulo, descricao, concluida } = req.body;
  const dataConclusao = concluida ? new Date().toISOString() : null;

  taskModel.update(
    id,
    titulo,
    descricao,
    concluida,
    dataConclusao,
    (err, changes) => {
      if (err) {
        return res.status(500).json({
          erro: err.message,
        });
      }

      if (changes === 0) {
        return res.status(404).json({
          mensagem: "Tarefa não encontrada",
        });
      }

      res.json({
        mensagem: "Tarefa atualizada com sucesso",
      });
    },
  );
}

export {
  createTask,
  listTasks,
  searchById,
  deleteTask,
  updateTask,
};
