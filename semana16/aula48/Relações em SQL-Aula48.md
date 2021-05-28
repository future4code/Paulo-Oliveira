### Exercício 1

a)	Chave estrangeira é o nome que se dá a ação de buscar uma informação de outra tabela.

b)	A query é:
	```
	INSERT INTO Rating (id, comment, rate, movie_id)
	VALUES (
		'001',
		'Muito bom!',
		8,
		'004'
	);
	```

c)	Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha.
Não foi possivel criar a linha na tabela por não haver um id correto para um filme.

d)
	```
	ALTER TABLE Movie DROP COLUMN rating;
	```

e)	A linha que é referenciada por uma foreign key, pois será necessário apagar primeiro as referências para depois deletar a linha desejada.


### EXERCÍCIO 2

a)	Essa tabela é uma tabela de junção, ela é uma tabela responsáve por fazer a relação N:M e ela possui 2 foreigner keys uma para tabela movies e outra para tabela actors.

b)
	```
	INSERT INTO MovieCast(movie_id, actor_id)
	VALUES(
		"002",
		"004"
	);
	```

c)	Ocorre um erro pois o ator ou filme não existe, pois as foreign keys dentro da tabela MovieCast não permitem adicionar id's que não existam nas tabelas.

d) Ocorre um erro pois não é possivel remover registros da tabela que estão sendo referenciados por outra, primeiro é necessário remover as referências que estão feitas a tabela que será excluida.


### Exercício 3

a)	A query em questão junta todos os registros da tabela Movies que tiverem um registro de Rating associado a elas com seus ids, aos dados da tabela Rating e seleciona todas as colunas das duas tabelas.

b)
	```
	SELECT title, movie_id, rate FROM Movies
	JOIN Rating ON Movies.id = Rating.movie_id;
	```


### Exercício 4

a)
	```
	SELECT title, movie_id, rate, comment FROM Movies
	LEFT JOIN Rating ON Movies.id = Rating.movie_id;
	```

b)
	```
	SELECT title, movie_id, actor_id FROM Movies
	LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id;
	```

c)
	```
	SELECT title, AVG(rate) as média FROM Movies
	LEFT JOIN Rating ON Movies.id = Rating.movie_id
	GROUP BY title;
	```
