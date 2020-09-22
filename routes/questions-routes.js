const express = require("express");
const router = express.Router();
//we will replace this later

const answerRoutes = require("./answer-routes");

const { getQuestionsFromQuiz } = require("../db/queries/question-queries");

//localhost:3000/quizzes/:quiz_id/questions
router.get("/:question_id", (req, res) => {
  const quiz_id = req.quiz_id;
  const question_id = req.params.question_id;
  console.log("question_id:", question_id);
  getQuestionsFromQuiz(quiz_id, question_id)
    .then((questions) => {
      res.send(questions);
    })
    .catch((e) => console.log("getQuestions from db", e));
});

//localhost:3000/quizzes/:id/questions/:question_id/answers/
router.use(
  "/:question_id/answers",
  (req, res, next) => {
    req.question_id = req.params.question_id;
    next();
  },
  answerRoutes
);
//localhost:3000/quizzes/:quiz_id/questions/:question_id
// router.get("/:question_id", (req, res) => {
//   const quiz_id = req.quiz_id;
//   console.log("quiz_id:", quiz_id);
//   getQuestionsFromQuiz(quiz_id)
//     .then((questions) => {
//       res.send(questions);
//     })
//     .catch((e) => console.log("getQuestions from db", e));
// });

module.exports = router;