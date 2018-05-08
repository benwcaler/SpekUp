window.onload = function () {

  var questions = [
    {
      question: "Why did Timmy do it?",
      answers: [4, 5, 7, 6, 4, 3]
    },
    {
      question: "Why was Marsha so mad?",
      answers: [3, 5, 6, 7, 6, 5]
    },
    {
      question: "What gives you the right.",
      answers: [4, 5, 6, 8, 7, 3, 2]
    },
    {
      question: "Well maybe next time, Jan, you'll estimate me.",
      answers: [4, 5, 7, 6, 4, 3]
    },
    {
      question: "I'm not super stitious, but I am a little stitious.",
      answers: [3, 4, 5, 6, 5, 4, 3]
    },
    {
      question: "Why?",
      answers: [2, 3, 4, 5, 6, 7, 8]
    },
    {
      question: "What kind of bear is best?",
      answers: [1, 2, 4, 3, 2, 3, 4, 5]
    },
    {
      question: "Do you watch Battlestar Galactica? No? Then you are an idiot.",
      answers: [6, 5, 6, 6, 6, 4, 3, 3, 3]
    }
  ];

  function load() {
    for (var i = 0; i < questions.length; i++) {
      var newQuestion = $("<div>");
      newQuestion.attr("id", "queshun");
      newQuestion.text(questions[i].question);
      $("#question").append(newQuestion);
    }
  }

  load();

}