import "dotenv/config";

import registroEventosInicio from "./registroEventos/inicio.js";
import registroEventosDocumento from "./registroEventos/documento.js";
import registroEventosCadastro from "./registroEventos/cadastro.js";
import registroEventosLogin from "./registroEventos/login.js";

import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

// io.of("/usuarios").use(autorizarUsuario);

// io.of("/").on("connection", (socket) => {
//   registroEventosInicio(socket, io);
//   registroEventosDocumento(socket, io);
//   registroEventosCadastro(socket, io);
//   registroEventosLogin(socket, io);
// });

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
  registroEventosInicio(socket, nspUsuarios);
  registroEventosDocumento(socket, nspUsuarios);
});

io.of("/").on("connection", (socket) => {
  registroEventosCadastro(socket, io);
  registroEventosLogin(socket, io);
});
