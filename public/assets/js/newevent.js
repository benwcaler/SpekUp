$(document).ready(function () {

  $("#create").on("click", function () {
    $('#img-modal').modal({ backdrop: 'static', keyboard: false, show: true });
  });

  $("#cancel").on("click", function () {
    $("#img-modal").modal({ show: false });
    $(this).closest('form').find("input[type=text], textarea").val("");
  });
  
  $("#reset").on("click", function () {
    $(this).closest('form').find("input[type=text], textarea").val("");
  });

});