$(() => {
  let question_id = localStorage.getItem('question_id');
  console.log('question_id: at top', question_id)
  let quiz_id = localStorage.getItem('quiz_id');
  console.log('quiz_id:', quiz_id)

  // let first_question_id = localStorage.getItem(question_id);


  const updateQuiz = () => {
    const quiz_id_update = localStorage.getItem('quiz_id')
    const question_id_update = localStorage.getItem('question_id')
    return [quiz_id_update, question_id_update];
  }

  const createQuestionAndAnswersDOMElement = (quiz_id, question_id) => {
    //getting first question
    $.get(`/quizzes/${quiz_id}/questions/${question_id}`).then((questions) => {
      //getting total questions from quiz
      $.get(`/quizzes/${quiz_id}/questions`).then((questions) => {
        const totalQuestion = questions[0].count;
        $(".question-total-span").text(totalQuestion);
      });
      $(".question_number, .question-counter-span").text(questions[0].id);
      $(".question_string").text(questions[0].question);

      console.log(`/quizzes/${quiz_id}/questions/${question_id}/answers`)
      $.get(`/quizzes/${quiz_id}/questions/${question_id}/answers`).then(
        (answers) => {
          console.log('answers:', answers)

          const answerHTMLArray = answers.map((item, idx) => {
            const answerDiv = `
              <div class="btn btn-outline-light option${
                idx + 1
              }-btn answer-div">
              <input type="radio" class="radioCustomButton" id="option${
                idx + 1
              }" name="radioGroup" />
              <label class="answerLabel answer${question_id}">${
              item.answer
            }</label>
              </div>`;
            return answerDiv;
          });
          $(".answer_form").children().remove();
          answerHTMLArray.forEach((item) => {
            $(".answer_form").append(item);
          });
        }
      );
    });
  };

  const $quizForm = $(`
  <div class="quiz_body">
    <div class="card question_body">
      <div>
        <h1 class="question_number"></h1>
      </div>
      <div>
        <h1 class="question_string"></h1>
      </div>
      <div class="quiz_body_footer">
        <div>
          <a class="back-btn"><i class="fas fa-angle-double-left"></i> </a>
        </div>
        <div>
          <h2 class="question_counter"><span class="question-counter-span">1</span>/<span class="question-total-span"></span></h2>
        </div>
      </div>
    </div>
    <form class="rounded answer_form right_bg"></form>
  </div> `);


  const loadQuestion = (quiz_id) => {
    const [quiz_id_update, question_id_update] = updateQuiz();
    console.log(quiz_id_update, question_id_update)
    createQuestionAndAnswersDOMElement(quiz_id_update, question_id_update);
  };

  window.$quizForm_onLoad = loadQuestion;
  window.$quizForm = $quizForm;

  $("main").on("click", ".option1-btn", () => {
    $("#option1").prop("checked", true);
    // when button is clicks, load next question and answers set
    //get request on the next question with answers set
    //  /quiz/:id/questions/:id
    // /quiz/:id/questions/:id/answers
    ++question_id;
    localStorage.setItem('question_id', question_id);
    createQuestionAndAnswersDOMElement(quiz_id, question_id);



    //post answer to response table
  });

  $("main").on("click", ".option2-btn", () => {
    $("#option2").prop("checked", true);
    ++question_id;
    localStorage.setItem('question_id', question_id);
    createQuestionAndAnswersDOMElement(quiz_id, question_id);
  });

  $("main").on("click", ".option3-btn", () => {
    $("#option3").prop("checked", true);
    ++question_id;
    localStorage.setItem('question_id', question_id);
    createQuestionAndAnswersDOMElement(quiz_id, question_id);
  });

  $("main").on("click", ".option4-btn", () => {
    $("#option4").prop("checked", true);
    ++question_id;
    localStorage.setItem('question_id', question_id);
    createQuestionAndAnswersDOMElement(quiz_id, question_id);
  });
  $("main").on("click", ".back-btn", () => {
    //back to dashboard
    // or back to previous question
    --question_id;
    localStorage.setItem('question_id', question_id);
    createQuestionAndAnswersDOMElement(quiz_id, question_id);

  });
  $quizForm.submit(function (e) {});
});
