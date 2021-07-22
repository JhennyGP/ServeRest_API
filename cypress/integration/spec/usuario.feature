Feature: CRUD Usuário

Scenario: Requisitar todos os usuários cadastrados
   When fazer uma requisição dos /usuarios cadastrados
   Then deverá ser retornado o schema "get-usuario" com o status 200

  Scenario Outline: Cadastrar um novo usuário
      When fazer o cadastro do usuário do tipo "<type>"
      Then deverá ser retornado o schema "post-usuario" com o status <status>
        Examples:
        | type    | status |
        | valid   | 201    |
        | invalid | 400    |

  Scenario Outline: Editar usuário cadastrado
      When editar o usuário de id "<_id>" do tipo "<type>" 
      Then deverá ser retornado o schema "put-usuario" com o status <status>
        Examples:
        | type    | _id              | status |
        | valid   | eefr0Uh0El05GZrs | 200    |
        | invalid | 0000000000000000 | 400    |

    Scenario Outline: Deletar usuário cadastrado
      Given que o usuário não tenha um carrinho cadastrado
      When deletar o usuário de id "<_id>"
      Then deverá ser retornado o schema "delete-usuario" com o status <status>
      Examples:
          | _id              | status |
          | lhaM76xSBLJbBeXw | 200    |