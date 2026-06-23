import taskModel from "../models/taskModel.js";
import { idValidation, titleValidation } from "../validators/api-validators.js";

const createTask = (req, res) => {
  const { titulo, descricao } = req.body;
  titleValidation(titulo);

  const dataCriacao = new Date().toISOString();

  taskModel.create(titulo, descricao, dataCriacao, (err, id) => {
    if (err) {
      return res.status(500).json({
        erro: err.message,
      });
    }

    res.status(201).json({
      mensagem: "Tarefa criada com sucesso", id
    });
  });
};

const listTasks = (req, res) => {
  taskModel.findAll((err, tasks) => {
    if (err) {
      return res.status(500).json({
        erro: err.message,
      });
    }
    res.json(tasks);
  });
};

const getTaskById = (req, res) => {
  const id = Number(req.params.id);
  idValidation(id);

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
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  idValidation(id);

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
};

const updateTask = (req, res) => {
  const id = Number(req.params.id);
  idValidation(id);

  const { titulo, descricao, concluida } = req.body;
  titleValidation(titulo);

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
};

export { createTask, listTasks, getTaskById, deleteTask, updateTask };
