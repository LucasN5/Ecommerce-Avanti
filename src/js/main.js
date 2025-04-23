function mostrarBusca() {
  const input = document.getElementById("searchInput").value;
  const resultado = document.getElementById("resultadoBusca");

  if (input.trim() !== "") {
    resultado.textContent = `Você buscou por: '${input}'`;
  } else {
    resultado.textContent = "Por favor, digite algo para buscar.";
  }
}
