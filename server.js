const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const PORT = process.env.PORT || 3000
const db = require("./config/dbConnect")

const answerR = require("./route/answer")
const questR = require("./route/quest")
const taskR = require("./route/task")


//init Express
const app = express()

app.use(express.json(), cors(), 
bodyParser.urlencoded({extended : true}))

//Check connection db
db.authenticate().then(() =>{
    console.log("База подключена ...")
    }).catch(err => {
        console.log("Error", err)
    })

//middleware 
app.use(answerR)    
app.use(questR)
app.use(taskR)


app.listen(PORT, () => {
    console.log(`Сервер запустился на ${PORT} порте ...`)
})