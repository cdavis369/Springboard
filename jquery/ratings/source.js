$(".btn-success").on("click", function(e) {
  e.preventDefault();

  const title = $(".form-title").val();
  const rating = $(".form-rating").val();

  $(".container").find(".row:last").append(
    $("<div></div>").addClass("col-sm-2 movie-rating").css("justify-content", "center")
    .append(
      $('<p></p>').html(`<b>${title}</b>: ${rating}/10`),
      $('<button>').attr("type", "button").addClass("btn btn-danger").text("delete")
    )
  );
  $(".form-title").val("");
  $(".form-rating").val(5);
});

$(".row").on("click", ".btn-danger", function() {
  $(this).parent().remove();
})
