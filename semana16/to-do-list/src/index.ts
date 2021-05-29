import express, { Request, Response } from "express"
import connection from "./connection"
import app from "./app"

app.use(express.json())

type user = {
    name: string,
    nickname: string,
    email: string
}

type task = {
    title: string,
    description: string,
    limitDate: string,
    status: string
    creatorUserId: string
}

// ENDPOINT 1

app.put('/user', async (req: Request, res: Response)=>{
    try {
  
      if(!req.body.name || !req.body.nickname || !req.body.email){
        throw new Error("Todos os campos são obrigatórios")
      }
  
      const newUser: user = {
        name: req.body.name, 
        nickname: req.body.nickname, 
        email: req.body.email
      }
  
      await connection('ToDoList').insert(newUser)
  
      res.status(200).send("Feito!")

    } catch (error) {

      res.status(400).send({ message: error.message })

    }
})


// ENDPOINT 2

const getUserById = async (id: string): Promise<any> => {

    const result = await connection.raw(`
      SELECT id, nickname FROM ToDoList WHERE id = '${id}'
    `)

      return result
  }

app.get('/user/:id', async (req: Request, res: Response) => {
    try {

        const id = req.params.id
        const result =  await getUserById(id)

        res.send(result)

    } catch (error) {

        res.status(500).send("Ocorreu um erro inesperado")

    }
})


// ENDPOINT 3

const editUser = async (id: string, name: string, nickname: string): Promise<any> => {
    const result = await connection.raw(`
      UPDATE ToDoList SET name = '${name}', nickname = '${nickname}' WHERE id = '${id}'
    `)

      return result[0]
}  
  
app.post('/user/edit/:id', async (req: Request, res: Response)=> {
    try {

        if(!req.body.name || !req.body.nickname){
            throw new Error("Todos os campos são obrigatórios")
        }

        const id = req.params.id
        const name = req.body.name
        const nickname = req.body.nickname

        const result =  await editUser(id, name, nickname )

        res.send(result[0]) 

    } catch (error) {

        res.status(400).send({ message: error.message })

    }
})


//ENDPOINT 4

function formatarData(date: string): string {
    const split = date.split('/')
    const dateFormat = split[2] + "-" + split[1] + "-" + split[0]
    return dateFormat
}
  
app.put('/task', async (req:Request, res: Response) => {
    try {
        if(!req.body.title || !req.body.description || !req.body.limitDate || !req.body.creatorUserId){
            throw new Error("Todos os campos são obrigatórios")
        }

        const newTask: task = {
            title: req.body.title, 
            description: req.body.description, 
            limitDate: formatarData(req.body.limitDate),
            status: req.body.status,
            creatorUserId: req.body.creatorUserId
        }

        await connection('Task').insert(newTask)

        res.status(200).send("Feito!")

    } catch (error) {

        res.status(400).send({ message: error.message })

    }
})


// ENDPOINT 5

const getTaskById = async (id:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT t.id, t.title, t.description, DATE_FORMAT(t.limitDate,'%d/%m/%Y') AS LimitDate, t.status, t.creatorUserId, u.name FROM Task t JOIN ToDoList u ON t.creatorUserId = u.id  WHERE t.id ='${id}'
    `)

      return result[0]
}
app.get('/task/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        let result =  await getTaskById(id)

        res.status(200).send({Task: result})

    } catch (error) {

        res.status(500).send("Ocorreu um erro inesperado")

    }
})