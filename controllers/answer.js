const answer = require("../models/answer")

const createAnswer = async(req, res) => {
    try{
        const rb = req.body
        const response = await answer.create({
            text: rb.text
        })
        .then((data) => {
            const res = {success: true, data: data, 
            message: "created answer !!!"}
            return res
        })
        .catch(error => {
            const res = { success: false, error: error }
        })   
        res.json(response) 
    } catch(err){
        console.log(err)
    }
}

const getAnswers = async(req, res) => {
    try{
        const answers = await answer.findAll()
        return res.status(200).json({
            answers
        })
    }
    catch(err){
        console.log(err)
    }
}

const updateAnswer = async(req, res) => {
    try{
        const id = req.params.id
        const data = req.body

        const answerUpdate = await answer.update({
            text: data.text
        }, {
            where: {id: id}
        })

        if(!answerUpdate){
            return res.status(200).send({
                status: 404,
                message: "Не найден ответ"
            })
        }
        res.status(200).send({
            status:200,
            message: "Ответ обновлён"
        })

    }catch(err){
        console.log(err)
        return res.status(400).send({
            message: "Ошибка! Данные не обновлены",
            error: error,
            status: 400
        })
    }
}

const deleteAnswer = async(req, res) => {
   try{
    const id = req.params.id
    const answerDelete = await answer.destroy({
        where: {id: id}
    })
    if(answerDelete){
        return res.status(204).send("Ответ удалён")
    }
    return res.status(200).send({
        status: 404,
        message: "Не удалён ответ"
    })
   } catch(e){
    return res.status(500).send(e.message)
   }
}


module.exports = {
    createAnswer, getAnswers,
    updateAnswer, deleteAnswer
}

