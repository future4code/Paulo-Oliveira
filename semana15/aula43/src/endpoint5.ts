import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./countries"

const app = express()

app.use(express.json())
app.use(cors())

app.delete("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {

        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error()
        }

        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )

        if (countryIndex === -1) {
            errorCode = 404
            throw new Error()
        }

        countries.splice(countryIndex, 1)
        res.status(200).send()
    } catch (error) {
        console.log(error)
        res.status(errorCode).send()
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});