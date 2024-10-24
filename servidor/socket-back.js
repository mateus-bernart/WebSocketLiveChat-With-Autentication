import "dotenv/config";

import registrarEventosCadastro from "./registrarEventos/Cadastro.js";
import registrarEventosDocumento from "./registrarEventos/Documento.js";
import registrarEventosInicio from "./registrarEventos/Inicio.js";
import registrarEventosLogin from "./registrarEventos/Login.js";
import autorizaUsuario from "./middlewares/autorizarUsuario.js";

import io from "./servidor.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizaUsuario);

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarEventosDocumento(socket, nspUsuarios);
});

io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
