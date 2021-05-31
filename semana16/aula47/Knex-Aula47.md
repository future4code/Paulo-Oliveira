### Exercício 1

a)

    O raw retorna uma promise com os dados chamados e alguns metadados de criação.

b)
    ```
    const searchActor = async (name: string): Promise<any> => {
      const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
      `)
      return result
    }
    ```

c)
    ```
   	const countActors = async (gender: string): Promise<any> => {
		const result = await connection.raw(`
			SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
		`)

	 	const count = result[0][0].count
	 	return count
		}
    ```

### Exercício 2

a)
	```
	const updateActor = async (id: string, salary: number): Promise<any> => {
	  await connection("Actor")
		.update({
		  salary: salary,
		})
		.where("id", id);
	}
	````

b)
	```
	const deleteActor = async (id: string): Promise<void> => {
	  await connection("Actor")
		.delete()
		.where("id", id)
	}
	```

c)
	```
	const avgSalary = async (gender: string): Promise<any> => {
	  const result = await connection("Actor")
		.avg("salary as average")
		.where({ gender })

	  return result[0].average
	}
	```

### Exercício 3

a)
	```
	async function getActorById(id: string): Promise<any> {
				const result = await connection.raw(`
				SELECT * FROM Actor WHERE id = '${id}'
				`)
				return result[0]
			}
			getActorById("")
			app.get("/actor/:id", async (req: Request, res: Response) => {
				try {
				const id = req.params.id
				const actor = await getActorById(id)

				res.status(200).send(actor)
				} catch (error) {
				res.status(400).send({
					message: error.message,
				});
				}
			})
	```

b)
	```
	async function countActorByGender(gender: string): Promise<any> {
				const result = await connection.raw(`
				SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
				`)
				console.log(result[0][0].count)
				return result[0][0].count
			}
			countActorByGender("female")
			app.get('/actor', async (req:Request , res:Response) => {
				try {
				const gender = req.query.gender
				const count = await countActorByGender(gender as string)
				res.status(200).send({
					quantity: count,
					})
				} catch (error) {
				res.status(400).send({
					message: error.message,
				});
				}
			})
	```

### Exercício 4

a)
	```
	app.post("/actor", async (req: Request, res: Response) => {
	  try {
		await updateSalary(req.body.id, req.body.salary)
		res.status(200).send({
		  message: "Success",
		})
	  } catch (err) {
		res.status(400).send({
		  message: err.message,
		})
	  }
	})
	```

b)
	```
	app.delete("/actor/:id", async (req: Request, res: Response) => {
	  try {
		await deleteActor(req.params.id)
	  } catch (err) {
		res.status(400).send({
		  message: err.message,
		})
	  }
	})
	```

