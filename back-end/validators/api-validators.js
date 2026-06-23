const titleValidation = (title) => {
  if (!title || title.trim() === "") {
    return res.status(400).json({
      erro: "Título é obrigatório",
    });
  }

  if (title.length > 100) {
    return res.status(400).json({
      erro: "Título muito grande",
    });
  }
};

const idValidation = (id) => {
  if (isNaN(id)) {
    return res.status(400).json({
      erro: "ID inválido",
    });
  }
};

export { titleValidation, idValidation };
