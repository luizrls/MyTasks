const atividades = [
  {
    titulo: "Tarefa 1",
    tipo: "TIR",
    id: "123456",
    status: "Doing",
    tarefas: [
      { nome: "Tarefa 1", status: "Done" },
      { nome: "Tarefa 2", status: "Done" },
      { nome: "Tarefa 3", status: "Done" },
    ],
  },
  {
    titulo: "Tarefa 2",
    tipo: "TIR",
    id: "0000034",
    status: "Done",
    tarefas: [
      { nome: "Tarefa 1", status: "Done" },
      { nome: "Tarefa 2", status: "Done" },
      { nome: "Tarefa 3", status: "Done" },
    ],
  },
  {
    titulo: "Tarefa 3",
    tipo: "TIR",
    id: "1244243233",
    status: "Waiting",
    tarefas: [
      { nome: "Tarefa 1", status: "Done" },
      { nome: "Tarefa 2", status: "Done" },
      { nome: "Tarefa 3", status: "Done" },
    ],
  },
];

export const getAllTasks = (status, titulo) => {
  console.log("Status" + status);
  console.log("Titulo" + titulo);
  console.log(atividades);
  var resultado = atividades;
  if (status && status !== "") {
    resultado = resultado.filter((x) => x.status == status);
  }
  console.log(resultado);
  if (titulo && titulo !== "") {
    resultado = resultado.filter((x) => x.titulo.includes(titulo));
  }
  return resultado;
};

export const getByStatus = (valor) => {
  return atividades.filter((x) => x.status == valor);
};

export const getByTitulo = (valor) => {
  return atividades.filter((x) => x.titulo == valor);
};
