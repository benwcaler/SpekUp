window.onload = function () {

  var questions = [
    {
      id: 1,
      question: "Why did Timmy do it?",
      choices: ["this is a choice", "this is another choice", "another choice", "yet another choice", "even more choices", "again a choice", "so many choices", "one more choice"],
      answers: [4, 5, 7, 6, 4, 3, 9, 7]
    },
    {
      id: 2,
      question: "Why was Marsha so mad?",
      choices: ["this is a choice", "this is another choice", "another choice", "yet another choice", "even more choices", "again a choice", "so many choices", "one more choice"],
      answers: [3, 5, 6, 7, 6, 5, 5, 4]
    },
    {
      id: 3,
      question: "What gives you the right.",
      choices: ["this is a choice", "this is another choice", "another choice", "yet another choice", "even more choices", "again a choice", "so many choices", "one more choice"],
      answers: [4, 5, 6, 8, 7, 3, 2, 4]
    },
    {
      id: 4,
      question: "Well maybe next time, Jan, you'll estimate me.",
      choices: ["this is a choice", "this is another choice", "another choice", "yet another choice", "even more choices", "again a choice", "so many choices", "one more choice"],
      answers: [4, 5, 7, 6, 4, 3, 5, 4]
    },
    {
      id: 5,
      question: "I'm not super stitious, but I am a little stitious.",
      choices: ["this is a choice", "this is another choice", "another choice", "yet another choice", "even more choices", "again a choice", "so many choices", "one more choice"],
      answers: [3, 3, 3, 6, 5, 5, 5, 4]
    },
    {
      id: 6,
      question: "Why?",
      choices: ["this is a choice", "this is another choice", "another choice", "yet another choice", "even more choices", "again a choice", "so many choices", "one more choice"],
      answers: [2, 3, 4, 5, 6, 7, 5, 5]
    },
    {
      id: 7,
      question: "What kind of bear is best?",
      choices: ["this is a choice", "this is another choice", "another choice", "yet another choice", "even more choices", "again a choice", "so many choices", "one more choice"],
      answers: [1, 2, 4, 3, 2, 3, 4, 5]
    },
    {
      id: 8,
      question: "Do you watch Battlestar Galactica? No? Then you are an idiot.",
      choices: ["this is a choice", "this is another choice", "another choice", "yet another choice", "even more choices", "again a choice", "so many choices", "one more choice"],
      answers: [6, 5, 6, 6, 6, 4, 3, 5]
    },
    {
      id: 9,
      question: "This is another question.",
      choices: ["this is a choice", "this is another choice", "another choice", "yet another choice", "even more choices", "again a choice", "so many choices", "one more choice"],
      answers: [4, 5, 4, 4, 4, 5, 6, 6]
    }
  ];

  function loadQuestions() {
    for (var i = 0; i < questions.length; i++) {
      var newQuestion = $("<div>");
      var key = $("<ul>");
      key.attr("data-qid", questions[i].id);
      key.attr("data-selected", false)
      for (var j = 0; j < questions[i].choices.length; j++) {
        var alph = String.fromCharCode('A'.charCodeAt(0) + j);
        var li = $("<li>");
        li.text(alph + " - " + questions[i].choices[j]);
        key.append(li);
      }
      var ul = $("<div>").append(key)
      newQuestion.attr("class", "queshun");
      newQuestion.attr("data-id", questions[i].id);
      newQuestion.append("<div class='queshundiv'>" + questions[i].question + "</div>");
      newQuestion.append(ul);
      $("#question").append(newQuestion);
    }
  }


  function newChart(id) {
    var labels = [];
    for (var i = 'A'.charCodeAt(0); i < 'A'.charCodeAt(0) + questions[id].choices.length; i++) {
      labels.push(String.fromCharCode(i));
    }
    $("#chartContainer").empty();
    $("#chartContainer").append($("<canvas id='canvas' class='chartjs-render-monitor'>"));
    var ctx = $("#canvas");
    var resultChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: labels,
        datasets: [{
          label: "# of Votes",
          data: questions[id].answers,
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
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          fontSize: 14,
          text: questions[id].question
        },
        legend: {
          display: false
        }
      }
    });
  }

  var persistent = 0;
  $(document).on("click", ".queshun", function () {
    if (persistent === $(this).data("id")) {
      persistent = null;
    } else {
      persistent = $(this).data("id");
    }
    $("ul").css("max-height", "0px");
    $(`*[data-qid=${persistent}]`).css("transition", "max-height 0.75s ease-out");
    $(`*[data-qid=${persistent}]`).css("max-height", "200px");
  });

  $(document).on("mouseenter", ".queshun", function () {
    $(".queshun").css("border-right", "1px solid darkslategrey")
    newChart($(this).data("id") - 1);
    $(this).css("border-right", "hidden");
  });

  $(document).on("mouseleave", "#container", function () {
    $(".queshun").css("border-right", "1px solid darkslategrey");
    $("ul").css("max-height", "0px");
    if (persistent) {
      newChart(persistent - 1);
      $(`*[data-id=${persistent}]`).css("border-right", "hidden");
      $(`*[data-qid=${persistent}]`).css("max-height", "200px");
    }
  });

  loadQuestions();
  newChart(0);
}