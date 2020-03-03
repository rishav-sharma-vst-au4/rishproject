var books = " ";
$.ajax({
url:"./books.json",
datatype: "json",
success: function(data) {
data = JSON.parse(data);
books = data;
}
});
$("#search").on("click", search);
function search() {
$("tbody").html("");
var n = $("#letter")
.val()
.toUpperCase();
for (var i = 0; i < books.length; i++) {
var j = books[i];
if (n == j.language.toUpperCase()) {
$("tbody").append(
"<tr><td>" +
j.title +
"</td><td>" +
j.author +
"</td><td>" +
j.country +
"</td><td>" +
j.language +
"</td><td><a href=" +
j.link +
">" +
"Read More" +
"</a></td><td>" +
j.pages +
"</td><td>" +
j.year +
"</td></tr>");
}
}
}