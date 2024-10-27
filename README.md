## Continuação do projeto de Live Chat com autenticação.

### - Refatoração na arquitetura

- Helper functions, emit's e on's(backend e frontend) em arquivos separados, recebendo funções de classes terceiras.

### - Tratamento de erros

- CORS (multiplos acessos à uma URL)

### - Criptografia de senhas

- Jwt (JSON Web Token) para código específico de cada usuário cadastrado.
- Quando o usuário é autenticado no servidor, é enviado de volta o token JWT para o cliente. É guardado através dos cookies do navegador para caso ele precisar enrtar em alguma página restrita, pode-ser resgatado o token armazenado no navegador e enviá-lo para o servidor.

### Namespaces

- Uso de namespaces para autenticação de usuários utilizando o token jwt vindo do frontend. Permite que conexões possam ser agrupadas separadamente, possuindo cada um seus eventos, salas e middlewares diferentes. Assim tendo funcionalidades distintas, por exemplo o caso do namespace /usuarios, que passarão pelo middleware de autorização.

### Middlewares

- Adicionado um intermediador entre o cliente e o servidor para permitir/negar a tentativa de conexão. Estes são executados sequencialmente.
- const nspUsuarios = io.of("/usuarios");
- nspUsuarios.use(autorizaUsuario);

### Status de usuários conectados

- Atualização em tempo real com local storage
- Remover a conexão via nome do documento/nome do usuário ou ID do socket.

