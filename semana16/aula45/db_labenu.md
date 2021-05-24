### Exercício 1

a) 
    
    PRIMARY KEY = Chave primaria que registra um valor unico no banco de dados.
    VARCHAR = Strings de no máximo n caracteres.
    NOT NULL = Obrigatoriedade de possuir um valor no campo.
    DATE = Representa uma data (YYYY-MM-DD).

b) 

    SHOW DATABASES mostra o banco de dados utilizado.
    SHOW TABLES mostra uma lista contendo uma linha chamada Actor.
    
c) 

    DESCRIBE Actor mostra a tabela Actor, contendo os campos id, name, salary, birth_date e gender.
    
### Exercício 2

a) A query é:
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
    );
    ```
    
b) 

    Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'.
    O ID já está em uso e não pode conter outro com o mesmo valor.
    
c) 

    Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha.
    O erro ocorre por estar faltando algumas propriedades de colunas, com mais valores do que colunas na tabela, se resolve colocando também as colunas birth_date e gender.
    
A query é:
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES (
    	"003",
        "Fernanda Montenegro",
        300000,
        "1929-10-19",
        "female"
    );
    ```
    
d) 

    Código de erro: 1364. O campo 'nome' não tem um valor padrão.
    O erro ocorre por não haver a coluna nome definida e não ter o valor adicionado, se resolve colocando a coluna e criando um valor.
    
A query é:
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES (
    	"004",
        "Antonio Fagundes",
        400000,
        "1945-04-18",
        "male"
    );
    ```

e) 

    Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
    O erro ocorre pelo valor de birth_date ser declarado como number e não como uma string, se resolve colocando o valor entre aspas, transformando em string.

A query é:
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES (
      "005", 
      "Juliana Paes",
      719333.33,
      "1979-03-26", 
      "female"
    );
    ```
    
f) A query é:
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES (
	"006",
    "Selton Melo",
    250000,
    "1972-12-30",
    "male"
    );
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES (
	"007",
    "Débora Falabella",
    300000,
    "1979-02-22",
    "female"
    );
    ```

### Exercício 3

a) A Query é: 
    ```
    SELECT id, name, salary, birth_date from Actor WHERE gender = "female";
    ```

b) A query é:
    ```
    SELECT name, salary from Actor WHERE name = "Tony Ramos";
    ```
    
c) Aparece a tabela vazia, não há nenhuma pessoa com o nome invalid.

A query é:
    ```
    SELECT id, name, salary, birth_date from Actor WHERE gender = "invalid";
    ```
    
d) A query é: 
    ```
    SELECT id, name, salary from Actor WHERE salary <= 500000;
    ```
    
e) 

    Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'.
    O erro ocorre por ter escrito de forma errada a coluna, ocerto seria "name".
    
A query é:
    ```
    SELECT id, name from Actor WHERE id = "002"
    ```
    
### Exercício 4
    
a)
    

b) A query é:
    ```
    
    ```
    
    
    
    
    
    
    
    
    