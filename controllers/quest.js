const quest = require("../models/quest")

const createQuest = async(req, res) => {
    try{
        const rq = req.body
        const response = await quest.create({
            name: rq.name,
            description: rq.description
        })
        .then((data) => {
            const res = {
                success: true, data: data,
                message: "Создан квест"
            }
            return res
        })
        .catch(error => {
            const res = { success: false, error: error }
        })
        res.json(response)
    }catch(err){
        console.log(err)
    }
}


const getQuests = async(req, res) => {
    try{
        const quests = await quest.findAll()
        return res.status(200).json({
            quests
        })
    } catch(err){
        console.log(err)
    }
}

const updateQuest = async (req, res) => {
     try{
        const id = req.body.id
        const data = req.body

        const questUpdate = await quest.update({
            name: data.name,
            description: data.description
        },  {
            where: {id: id}
        })
        if(!questUpdate){
            return res.status(200).send({
                status: 404,
                message: "Квест не найден"
            }) 
        }
        res.status(200).send({
            status: 200,
            message: "Квест обновлен"
        })
    }catch(err){
        return res.status(400).send({
            message: "Ошибка! Данные не обновлены",
            error: error,
            status: 400
        })
    }   
}

const deleteQuest = async(req, res) => {
    try{
        const id = req.params.id
        const questDelete = await quest.destroy({
            where: {id: id}
        })
        if(questDelete){
            return res.status(204).send("Квест удалён")
        }
        return res.status(200).send({
            status: 404,
            message: "Ошибка квест не удалён"
        })
    }catch (e){
        return res.status(500).send(e.message)
    }
}


module.exports = {
    getQuests, createQuest,
    updateQuest, deleteQuest
}