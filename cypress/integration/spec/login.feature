Feature: Login

Scenario Outline: Fazer login
   When fazer login com um usuario do tipo "<type>"
   Then deverá ser retornado o schema "post-login" com o status <status>
    Examples:
        | type    | status |
        | valid   | 200    |
        | invalid | 401    |
        | empty   | 400    |