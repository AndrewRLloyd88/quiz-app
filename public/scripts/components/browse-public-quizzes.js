$(() => {
  const publicQuizContainer = `<div class="row">`;
  const publicQuizContainerClose = `</div>`;

  $("header").on("click", ".browse_btn", () => {
    // $.get("/dashboard/my-quizzes", (data) =>{
    //change route to query public quizzes
    $.get("/quizzes").then((data) => {
      console.log(data)
      // clearQuiz();
      let counter = 0;
      let publicQuizDomElem = publicQuizContainer;
      for (const quizzes of data) {
        if (counter % 3 === 0) {
          publicQuizDomElem += publicQuizContainerClose;
          publicQuizDomElem += publicQuizContainer;

          publicQuizDomElem += `<div class="card col-md">
          <div class="card quiz_title_dashboard">${quizzes.name}</div>
          <div class="card question_card_dashboard">q1</div>
          <div class="card question_card_dashboard">q2</div>
          <div class="card question_card_dashboard">q3</div>
          </div>`;
        } else {
          publicQuizDomElem += `<div class="card col-md">
          <div class="card quiz_title_dashboard">${quizzes.name}</div>
          <div class="card question_card_dashboard">q1</div>
          <div class="card question_card_dashboard">q2</div>
          <div class="card question_card_dashboard">q3</div>
          </div>`;
        }
        counter++;
      }
      publicQuizDomElem += publicQuizContainerClose;
      console.log(typeof publicQuizDomElem);
      window.views_manager.show("browsePublicQuizzes", publicQuizDomElem);
    });
  });
  //add a clear to this object once we navigate away from
});
