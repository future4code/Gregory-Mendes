### Exercício 1
**a)** `round` é a maneira como a biblioteca *bcrypjs* chama os `costs`. Basicamente é o número de vezes que repetimos o processo de criptografia `hash` para aumentar o nível de segurança dos dados que queremos proteger. Cada vez que um `round` é iterado, ele adiciona uma `string` aleatória na senha antes de criar o `hash` final. Essa `string` aleatória é o que chamamos de `salt.` O valores do `round` dependem muito do quanto você quer proteger dados sensíveis, como senhas por exemplo. O valor que eu utilizei é o 12 porque dessa maneira consigo aumentar minha segurança sem comprometer a velocidade com que o algoritmo rodará.

### Exercício 2
**a)** Para realizar os testes, eu tenho que modificar o endpoint de cadastro primeiro, pois toda pessoa que for se cadastrar na aplicação deve ter a senha salva no banco de dados com a criptografia. Após isso, como já terei o usuário salvo no meu banco de dados, faço as validações de login pra quando ele efetuar a entrada na aplicação.

**d)** Não é necessário modificar o endpoint ``user/profile`` porque conseguimos pegar o id do usuário através do token gerado pelo próprio algoritmo dentro da função, sendo que esse token é passado no ``headers`` como autorização para exibir os dados do usuário logado no momento.

### Exercício 3
**a)** `ALTER TABLE to_do_list_users`
`ADD role ENUM ("NORMAL", "ADMIN") DEFAULT "NORMAL";`

**b)** 

### Exercício 7
**a)**
