const express = require("express");
const router = express.Router();
//we will replace this later
const { getQuestions } = require("../db/queries/question-queries");
const {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId,
  getAllActiveQuizzesData,
} = require("../db/queries/quiz-queries");

//GET all quizzes belonging to the speicfic user dashboard/my-quizzes
router.get("/", (req, res) => {
  getQuizzesByUserId(req.session.id)
    .then((quizzes) => {
      res.send(quizzes);
    })
    .catch((e) =>
      console.error("error getQuizzesByUserId from get-my-quizzes.js ", e)
    );
});

module.exports = router;
