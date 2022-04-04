const {Router} = require("express")

const router = Router()

const answerController = require("../controllers/answer")

router.get("/answers", answerController.getAnswers)

router.post("/answers", answerController.createAnswer)

router.put("/answers/:id", answerController.updateAnswer)

router.delete("/answers/:id", answerController.deleteAnswer)


module.exports = router