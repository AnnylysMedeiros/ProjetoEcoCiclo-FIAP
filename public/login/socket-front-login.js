import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados) {
  socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJwt) => {
  definirCookie("tokenJwt", tokenJwt);

  alert("Usuário autenticado com sucesso!");
  window.location.href = "/telaPrincipal/index.html";
});

// const socket = io();

// function emitirAutenticarUsuario(dados) {
//   socket.emit("autenticar_usuario", dados);
// }

// socket.on("autenticacao_sucesso", (tokenJwt) => {
//   definirCookie("tokenJwt", tokenJwt);

//   console.log("Usuário autenticado com sucesso!");
//   window.location.href = "/";
// });

socket.on("autenticacao_erro", () => alert("Erro na autenticação."));
socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado."));

// socket.on("autenticacao_sucesso", (tokenJwt) => {
//   definirCookie("tokenJwt", tokenJwt);

//   console.log("Usuário autenticado com sucesso!");
//   window.location.href = "/";
// });
// socket.on("autenticacao_erro", () => alert("Erro na autenticação."));
// socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado."));

export { emitirAutenticarUsuario };

//npm run dev
//incluir ip no mongo db
