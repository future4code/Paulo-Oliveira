### Exercício 1

a) 
    
    A query DROP COLUMN exclui uma coluna, no caso descrito, a coluna salary.

b) 

    A query irá mudar o nome da coluna "gender" para "sex" e irá receber no máximo 6 caracteres.
    
c) 

    A query irá manter o nome da coluna "gender" e irá receber no máximo 255 caracteres.
   
d)

    ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

    
### Exercício 2

a) A query é:
    ```
    UPDATE Actor
    SET name = "Claudia Raia",
	    birth_date = "1966-12-23"
    WHERE id = "003";
    ```
    
b) A query é:
    ```
    UPDATE Actor
    SET name = "JULIANA PAES"
    WHERE name = "Juliana Paes";
    ```
    ```
    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PAES";
    ```
    
c) A query é:
    ```
    UPDATE Actor
    SET name = "Fábio Assunção",
	    salary = 150000,
        birth_date = "1971-08-10",
        gender = "male"
    WHERE id = "005";
    ```

d) 

    Código de erro: 1054. Coluna desconhecida 'cidade natal' na 'lista de campos'.
    A coluna chamada "hometown" não existe, por isso ocorre o erro.

A query é:
    ```
    UPDATE Actor
    SET hometown = "Rio de Janeiro"
    WHERE id = "001";
    ```

    
### Exercício 3

a) A Query é: 
    ```
    DELETE FROM Actor
    WHERE name = "Fernanda Montenegro";
    ```

b) A query é:
    ```
    DELETE FROM Actor
    WHERE gender = "male" AND
	  salary > 1000000;
    ```

    
### Exercício 4
    
a) A query é:
    ```
    SELECT MAX(salary) FROM Actor;
    ```
    
b) A query é:
    ```
    SELECT MIN(salary) FROM Actor
    WHERE gender = "female";
    ```
    
c) A query é:
    ```
    SELECT COUNT(*) FROM Actor
    WHERE gender = "female";
    ```

d) A query é:
    ```
    SELECT SUM(salary) FROM Actor;
    ```
    

### Exercício 5

a) 

    A query tem a função de contar a quantidade de pessoas separados por genero.
    
b) A query é:
    ```
    SELECT id, name FROM Actor
    ORDER BY name DESC;
    ```
    
c) A query é: 
    ```
    SELECT * FROM Actor
    ORDER BY salary ASC;
    ```
    
d) A query é: 
    ```
    SELECT * FROM Actor
    ORDER BY salary DESC
    LIMIT 3;
    ```

e) A query é: 
    ```
    SELECT AVG(salary), gender 
    FROM Actor
    GROUP BY gender;
    ```
    

### Exercício 6

a) A query é:
    ```
    ALTER TABLE Movie
    ADD playing_limit_date DATE;
    ```
    
b) A query é:
    ```
    ALTER TABLE Movie
    CHANGE rating rating FLOAT;
    ```
 
c) A query é:
    ```
    UPDATE Movie
    SET playing_limit_date = "2021-06-28"
    WHERE id = "002";
    ```
    ```
    UPDATE Movie
    SET playing_limit_date = "2021-04-21"
    WHERE id = "001";
    ```
    
d) 

    0 linha (s) afetada (s) Linhas correspondidas: 0 Alterado: 0 Avisos: 0.
    Nenhuma linha da tabela foi modificada porque o filme foi deletado.


### Exercício 7

a) A query é:
    ```
    SELECT COUNT(*)
    FROM Movie
    WHERE rating > 7.5;
    ```
    
b) A query é:
    ```
    SELECT AVG(rating) FROM Movie;
    ```
  
c) A query é:
    ```
    SELECT COUNT(*)
    FROM Movie
    WHERE playing_limit_date > CURDATE();
    ```

d) A query é:
    ```
    SELECT COUNT(*)
    FROM Movie
    WHERE release_date > CURDATE();
    ```

e) A query é:
    ```
    SELECT MAX(rating) 
    FROM Movie;
    ```    
    
f) A query é:
    ```
    SELECT MIN(rating)
    FROM Movie;
    ```

    
### Exercício 8

a) A query é:
    ```
    SELECT * FROM Movie
    ORDER BY title;
    ```
    
b) A query é:
    ```
    SELECT * FROM Movie
    ORDER BY title
    LIMIT 5;
    ```
    
c) A query é:
    ```
    SELECT * FROM Movie
    WHERE release_date < CURDATE()
    ORDER BY release_date DESC
    LIMIT 3;
    ```
    
d) A query é:
    ```
    SELECT * FROM Movie
    ORDER BY rating DESC
    LIMIT 3;
    ```
