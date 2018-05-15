$(document).ready(function () {
  var qNum = 0;
  var aNum = 0;

  function addA(id, child) {
    $(`#q${id}answers`).append($(`<button id='addA${child}' data-id="${child}" class="addA" type='button'>+</button>`));
  }

  function removeA(id, child) {
    $(`#q${id}answers`).append($(`<button id='removeA${child}' data-id="${child}" class="removeA" type='button'>-</button>`));
  }

  $("#newQ").on("click", function () {
    qNum++;
    var newq = $(`<div id="q${qNum}" data-id="${qNum}" data-type="feedback"><input id="input${qNum}" type="text" required=""><select name="type" class="menu"><option value="feedback">Feedback</option><option value="poll">Poll</option></select><div id="q${qNum}answers" class="answers" data-id="${qNum}"></div></div>`);
    $("#questions").append(newq);
  });

  $(document).on("change", "select", function () {
    var id = $(this).parent().data("id");
    var child = $(this).parent().children("input").length;
    if (this.value === "poll") {
      $(this).parent().attr("data-type", "poll");
      $(`#q${id}answers`).append(`<input type="text" data-id="a1" required="" style="margin-left: 15px;">`);
      removeA(id, child)
      addA(id, child);
    } else {
      $(this).parent().attr("data-type", "feedback");
      $(`#q${id}answers`).empty();
    }
  });

  $(document).on("click", ".addA", function () {
    var id = $(this).parent().data("id");
    var child = $(this).parent().children("input").length + 1;
    $(this).remove();
    $(`#q${id}answers`).append(`<br data-id="${child}"><input type="text" data-id="a${child}" required="" style="margin-left: 15px;">`);
    removeA(id, child);
    addA(id, child);
  });
  
  $(document).on("click", ".removeA", function () {
    var id = $(this).data("id");
    if (id === 1) {
      $(`input[data-id="a${id}"]`).remove();
      $(`br[data-id="${id+1}"]`).remove();
      $(this).remove();
    } else if ($(this).parent().children("br").length > 0) {
      $(`input[data-id="a${id}"]`).remove();
      $(`br[data-id="${id}"]`).remove();
      $(this).remove();
    } else {
      $(".removeA").remove();
      $("br").remove();
    }
  });

  $("#create").on("click", function () {
    $('#img-modal').modal({ backdrop: 'static', keyboard: false, show: true });
  });

  $("#cancel").on("click", function () {
    $("#img-modal").modal({ "show": false });
    $(this).closest('form').find("input[type=text], textarea").val("");
  });

});