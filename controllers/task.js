const task = require("../models/task")

const Answer = require("../models/answer")
const Quest = require("../models/quest")


const createTask = async(req, res) => {
    try{
        const rq = req.body
        const response = await task.create({
            quest_id: rq.quest_id,
            correct_answer_id: rq.correct_answer_id,
            latitude: rq.latitude,
            longitude: rq.longitude,
            score: rq.score,
            priority: rq.priority 
        })
        .then((data) => {
            const res = {
                success: true, data: data,
                message: "Задача создана"
            }
            return res
        })
        .catch(error => {
            const res = { success: false,
            error: error }
        })
    res.json(response)
    }catch(err){
        console.log(err)
    }
}

const getTasks = async(req, res) => {
    try{
        const tasks = await task.findAll({
            include: [
                {
                    model: Answer,
                    as: "answer"
                },
                {
                    model: Quest,
                    as: "quest"
                }
            ]
        })
        return res.status(200).json({
            tasks
        })
    }catch(err){
        console.log(err)
    }
}

const updateTask = async(req, res) => {
    try{
        const id = req.params.id
        const rq = req.body

        const taskUpdate = await task.update({
            quest_id: rq.quest_id,
            correct_answer_id: rq.correct_answer_id,
            latitude: rq.latitude,
            longitude: rq.longitude,
            score: rq.score,
            priority: rq.priority 
        }, { 
            where: {id: id}
    })
    if(!taskUpdate){
        return res.status(200).send({
            status: 404,
            message: "Задача не найдена"
        })
    }
    res.status(200).send({
        status: 200,
        message: "Задача обновлена"
    })

    }catch(error){
        console.log(error)
        return res.status(400).send({
            message: "Ошибка! Данные не обновлены",
            error: error,
            status: 400
        })
    }
}

const deleteTask = async(req, res) => {
    try{
        const id = req.params.id 
        const taskDelete = await task.destroy({
            where: {id: id}
        })
        if(taskDelete){
            return res.status(204).send("Задача удалена")
        }
        return res.status(200).send({
            status: 404,
            message: "Ошибка задача не удалёна"
        })
    }catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    createTask, getTasks,
    updateTask, deleteTask
}