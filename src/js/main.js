function mostrarBusca() {
  const input = [...document.querySelectorAll(".searchInput")].find(
    (el) => el.offsetParent !== null
  );

  const resultado = document.getElementById("resultadoBusca");

  if (input && input.value.trim() !== "") {
    resultado.textContent = `Você buscou por: '${input.value}'`;
  } else {
    resultado.textContent = "Por favor, digite algo para buscar.";
  }

  setTimeout(() => {
    resultado.textContent = "";
  }, 2000);
}
