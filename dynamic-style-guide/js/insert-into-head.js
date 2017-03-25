var insertIntoHead = function (text, type) {
    var typeSelect = {
        "stylesheet": "<link href='" + text + "' rel = 'stylesheet' >",
        "javascript": "<script src='" + text + "'></script>"
    }
    $("head").append(typeSelect[type]);
}

$(".insert-css").on("click", function () {
    var text = $(".insert-text").val().trim();
    var displayHtml = "<div>&lt;link href='" + text + "' rel = 'stylesheet' &gt;</div>";
    $(".insert-into-head-display").append(displayHtml);
    insertIntoHead(text, "stylesheet");
})