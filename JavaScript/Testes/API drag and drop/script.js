function drag(evento) {
  evento.dataTransfer.setData("text", evento.target.id);
}

function permitirSoltar(evento) {
  evento.preventDefault();
}

function soltar(evento) {
  evento.preventDefault();
  const idDado = evento.dataTransfer.getData("text");
  const elemento = document.getElementById(idDado);
  evento.target.appendChild(elemento);
}