const {Router} = require("express")

const router = Router()

const taskControllers = require("../controllers/task")

router.get("/tasks", taskControllers.getTasks)

router.post("/tasks", taskControllers.createTask)

router.put("/tasks/:id", taskControllers.updateTask)

router.delete("/tasks/:id", taskControllers.deleteTask)

module.exports = router