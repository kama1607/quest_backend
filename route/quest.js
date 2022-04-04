const {Router} = require("express")

const router = Router()

const questController = require("../controllers/quest")


router.get("/quests", questController.getQuests)

router.post("/quests", questController.createQuest)

router.put("/quests/:id", questController.updateQuest)

router.delete("/quests/:id", questController.deleteQuest)

module.exports = router