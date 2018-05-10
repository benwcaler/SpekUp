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
      answers: [3, 3, 3, 6, 5, 5]
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

  function newChart() {
    var ctx = $("#chart");
    var resultChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [{
          label: "# of Votes",
          label: "$ of Votes",
          data: questions[4].answers,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        responsive: false,
        maintainAspectRatio: false,
        title: {
          display: true,
          fontSize: 14,
          text: questions[4].question
        }
      }
    });
  }

  $(document).on("click", "#queshun", function () {
    $("#results").css("display", "block");
    newChart();
  });

  loadQuestions();

}