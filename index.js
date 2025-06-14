document.getElementById("formContribuicao").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o recarregamento da página

  // Pega o valor selecionado no <select>
  const selecao = document.querySelector("select").value;

  // Verifica qual opção foi escolhida e redireciona
  if (selecao === "Quero participar de uma ONG") {
    window.location.href = "participar.html"; // substitua pelo nome da sua página
  } else if (selecao === "Quero criar uma ONG") {
    window.location.href = "criar.html"; // substitua pelo nome da sua página
  } else {
    alert("Por favor, selecione uma opção válida.");
  }
});
