# Ignite-API-Rest-NodeJs-SOLID
💻 Creating a GymPass REST API with typescript and Nodejs using SOLID

## RFs

- [x] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel se autenticar;
- [ ] Deve ser possivel obter o perfil de um usuário logado;
- [ ] Deve ser possivel obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possivel o usuário obter seu histórico de check-ins;
- [ ] Deve ser possivel o usuário buscar academias próximas;
- [ ] Deve ser possivel o usuário buscar academias pelo nome;
- [ ] Deve ser possivel o usuário realizar check-in em uma academia;
- [ ] Deve ser possivel validar o check-in de um usuário;
- [ ] Deve ser possivel cadastrar uma academia.

## RN

- [x] O usuário não deve poder se cadastrar com um email duplicado
- [ ] O usuário não pode fazer dois check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradosres;
  

## RNFs

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam esar persistidos em um banco PostgreSQL
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página
- [ ] O usuário deve ser identificado por um JWT (Jason Web Token)
