// $("#loginform").on("submit", function (event) {
//   event.preventDefault();
//   var id = $("#inputlogin").val();
//   console.log(id)
//   $.ajax({
//     url: `/api/users/polls/:${id}`,
//     type: "GET",
//     success: function (res) {
//       console.log(res)
//     }
//   })
// });



// // $(".devourer").on("submit", function (event) {
// //   event.preventDefault();
// //   if ($("#dn").val()) {
// //     var name = $(".devour").data("name");
// //     $.ajax("/api/burgers", {
// //       type: "PUT",
// //       data: {
// //         name: name,
// //         devoured: true,
// //         devourer: $("#dn").val().trim()
// //       }
// //     }).then(function () {
// //       location.reload();
// //     });
// //   }
// // });