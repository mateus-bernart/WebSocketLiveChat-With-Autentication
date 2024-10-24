## Continuação do projeto de Live Chat com autenticação.

### - Refatoração na arquitetura

- Helper functions, emit's e on's(backend e frontend) em arquivos separados, recebendo funções de classes terceiras.

### - Tratamento de erros

- CORS (multiplos acessos à uma URL)

### - Criptografia de senhas

- Jwt (JSON Web Token) para código específico de cada usuário cadastrado.

### Namespaces

- Uso de namespaces para autenticação de usuários utilizando o token jwt vindo do frontend.
