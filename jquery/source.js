$("document").ready(function() {
  console.log("Let’s get ready to party with jQuery!");
});

$("img").each(function() {
  $(this).addClass("image-center");
});

$("article").find("p:last").remove();

const random = Math.floor(Math.random() * 100);
$(".text-center").css('font-size', `${random}px`);

$("ol").append("<li>I will catch all of the chickens</li>").empty().append("<p>This paragraph is apologizing for the list's existence</p>");
const colors = $(".form-control");

$(".form-control").change(function() {
  $("body").css("background-color", `rgb(${colors[0].value}, ${colors[1].value}, ${colors[2].value})`);
});