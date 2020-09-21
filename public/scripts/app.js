$(() => {
  $("header").hide();

  $(".facilitator_btn").click(function (e) {
    $("header").show();
    $(".login_page").remove();

    let userLinks;

    userLinks = `
      <header>
      <ul class="flex-row">
        <div class="flex-row">
          <li class="brand brand_btn">Q.a.</li>
          <li class="browse_btn">Browse</li>
          <li class="create_btn">Create</li>
          <li class="create_btn">My Quizzes</li>
          <li class="pastQuiz_btn">Past Quizzes</li>
        </div>
        <div class="flex-row">
          <li class="userType_btn">Select User Type</li>
          <li class="logout_btn">Logout</li>
        </div>
      </ul>
    </header>
          `;

    $("#page-header").append(userLinks);
    views_manager.show("dashboard");
    e.preventDefault();
  });

  getUserType().then((json) => {});

  $("header").on("click", ".brand_btn", () => {
    views_manager.show("dashboard");
  });

  $("header").on("click", ".browse_btn", () => {
    views_manager.show("quizForm");
  });

  $("header").on("click", ".create_btn", () => {
    views_manager.show("questionForm");
  });

  // $(".create_btn").click(function (e) {
  //   console.log("hello");
  //   e.preventDefault();
  // });
});
