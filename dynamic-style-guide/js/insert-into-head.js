var insertIntoHead = function (text) {
    $("head").append(text);
}

$(".submit-head-text").on("click", function () {
    var text = $(".head-text").val().trim();
    insertIntoHead(text);
})