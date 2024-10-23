const socket = io();

function emitirAutenticarUsuario(dados) {
  socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", () => {
  alert("Usuário Autenticado com sucesso!");
  window.location.href = "/";
});
socket.on("autenticacao_erro", () => alert("Erro na Autenticação!"));
socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado!"));

export { emitirAutenticarUsuario };
