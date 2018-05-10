var chart = require("chart.js");

window.onload = function () {

  var questions = [
    {
      id: 1,
      question: "Why did Timmy do it?",
      answers: [4, 5, 7, 6, 4, 3]
    },
    {
      id: 2,
      question: "Why was Marsha so mad?",
      answers: [3, 5, 6, 7, 6, 5]
    },
    {
      id: 3,
      question: "What gives you the right.",
      answers: [4, 5, 6, 8, 7, 3, 2]
    },
    {
      id: 4,
      question: "Well maybe next time, Jan, you'll estimate me.",
      answers: [4, 5, 7, 6, 4, 3]
    },
    {
      id: 5,
      question: "I'm not super stitious, but I am a little stitious.",
      answers: [3, 4, 5, 6, 5, 4, 3]
    },
    {
      id: 6,
      question: "Why?",
      answers: [2, 3, 4, 5, 6, 7, 8]
    },
    {
      id: 7,
      question: "What kind of bear is best?",
      answers: [1, 2, 4, 3, 2, 3, 4, 5]
    },
    {
      id: 8,
      question: "Do you watch Battlestar Galactica? No? Then you are an idiot.",
      answers: [6, 5, 6, 6, 6, 4, 3, 3, 3]
    },
    {
      id: 9,
      question: "This is another question.",
      answer: [4, 5, 4, 4, 4, 5, 6, 6, 6]
    }
  ];

  function loadQuestions() {
    for (var i = 0; i < questions.length; i++) {
      var newQuestion = $("<div>");
      newQuestion.attr("id", "queshun");
      newQuestion.attr("data-id", questions[i].id)
      newQuestion.text(questions[i].question);
      $("#question").append(newQuestion);
    }
  }

  $(document).on("click", "#queshun", function() {
    
    $("#results").css("display", "block");
  });

  loadQuestions();

}