document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio automático

  // Pega os campos
  const nome = document.getElementById("nomesobrenome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const nomeOng = document.getElementById("nomeong").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const integrantes = document.getElementById("integrantes").value;
  const bairro = document.getElementById("bairro").value.trim();

  // Verifica se todos estão preenchidos
  if (
    nome &&
    email &&
    telefone &&
    nomeOng &&
    mensagem &&
    integrantes &&
    bairro
  ) {
    // Tudo certo, redireciona
    window.location.href = "criado.html";
  }
});


