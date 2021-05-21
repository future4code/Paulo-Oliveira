import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

// Exercício 1
// a. GET
// b. Users

app.get("/users", (req: Request, res: Response) => {

    res.status(200).send(users)
})

// Exercício 2
// a. Pela url, porque é muito mais simples
// b. Sim, checando se o resultado do filtro tem items, se não tiver, o tipo é inválido

app.get("/users/:type", (req: Request, res: Response) => {

    try {

        const type = req.params.type
        const result: User[] = users.filter(user => user.type.toLowerCase() === type.toLowerCase())

        if (result.length === 0) { throw new Error("Type Not Found") }

        res.status(200).send(result)
    }
    catch (error) {

        res.send(error.message)
    }
})

// Exercício 3
// a. GET

app.get("/user/:name", (req: Request, res: Response) => {

    try {
        const name = req.params.name
        const user = users.find(user => user.name.toLocaleLowerCase() === name.toLocaleLowerCase())

        if (!user) { throw new Error("User Not Found") }

        res.status(200).send(user)
    }
    catch (error) {
        res.send(error.message)
    }
})

// Exercício 4
//a. Nenhuma mudança
//b. Não, porque é melhor usar PUT quando for modificar algo já existente

app.post("/users/add", (req: Request, res: Response) => {

    const body = req.body
    users.push(body)
    res.status(200).send("Sucess")
})

// Exercício 5

app.put("/users/change-last", (req: Request, res: Response) => {

    const newName: string = users[users.length - 1].name + "-ALTERADO"
    users[users.length - 1] = {...users[users.length -1], name: newName}
    res.status(200).send()
})

// Exercício 6

app.patch("/users/rechange-last", (req: Request, res: Response) => {

    const newName: string = users[users.length - 1].name + "-REALTERADO"
    users[users.length - 1] = {...users[users.length -1], name: newName}
    res.status(200).send()
})

// Exercício 7

app.delete("/users/delete/:id", (req: Request, res: Response) => {

    try {

        const id = Number(req.params.id)
        if (!users.find(user => user.id === id)) { throw new Error("Not Found")}

        users = users.filter(user => user.id !== id)
        res.status(200).send("Removed Sucessfuly")
    }
    catch (error) {

        res.status(401).send(error.message)
    }
})

app.listen(3005, () => {
    console.log("http://localhost:3005")
})