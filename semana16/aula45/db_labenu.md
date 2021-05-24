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
    SELECT * FROM Actor
    WHERE (name NOT LIKE "A%") AND salary > 350000;
    ```
    
c) A query é:
    ```
    SELECT * FROM Actor
    WHERE name LIKE "%G%" OR "%g%";
    ```
    
d) A query é:
    ```
    SELECT * FROM Actor
    WHERE (name LIKE "%a%" OR "%A%" OR "%G%" OR "%g%") AND salary BETWEEN 350000 AND 900000;
    ```

### Exercício 5

a) O tipo TEXT é comumente usado para artigos breves.

A query é:
    ```
    CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
    );
    ```
    
b) A query é:
    ```
    INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
    );
    ```
    
c) A query é: 
    ```
    INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
    );
    ```
    
d) A query é: 
    ```
    INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
    );
    ```

e) A query é: 
    ```
    INSERT INTO Movie (id, title, synopsis, release_date, rating)
    VALUES (
	"004",
    "Bacurau",
    "Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade.",
    "2019-08-23",
    10
    );
    ```
    
### Exercício 6

a) A query é:
    ```
    SELECT id, title, rating FROM Movie WHERE id = "002";
    ```
    
b) A query é:
    ```
    SELECT * FROM Movie WHERE title = "Bacurau";
    ```
 
c) A query é:
    ```
    SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
    ```

### Exercício 7

a) A query é:
    ```
    SELECT * FROM Movie WHERE title LIKE "%vida%";
    ```
    
b) A query é:
    ```
    SELECT * FROM Movie WHERE title LIKE "%Você%" OR synopsis LIKE "Você";
    ```
  
c) A query é:
    ```
    SELECT * FROM Movie WHERE release_date < "2021-05-24";
    ```

d) A query é:
    ```
    SELECT * FROM Movie WHERE release_date < "2021-05-24" AND (title LIKE "%Você%" OR synopsis LIKE "%Você%") AND rating > 7;
    ```
