/// <reference path="style-guide.js" />
var updateElementProperty = function () {
    var $propertyEdit = $(".property-edit");
    $propertyEdit.each(function () {
        var element = $(this).attr("data-property-element");
        var property = $(this).attr("data-property");
        var value = $(this).val();
        if (value !== "") {
            $(element).css(property, value);
            $(this).prev(".property-text").text(value);
        }
    });
}

var showInput = function (trigger) {
    trigger.css({ "visibility": "hidden", "opacity": "0" });
    trigger.siblings(".inline-edit-input").css({ "visibility": "visible", "opacity": "1" });
    trigger.siblings(".inline-edit-update").fadeIn(500);
    trigger.siblings(".inline-edit-cancel").fadeIn(500);
}

var hideInput = function () {
    $(".inline-edit-trigger").css({ "visibility": "visible", "opacity": "1" });
    $(".inline-edit-input").css({ "visibility": "hidden", "opacity": "0" })
    $(".inline-edit-update").fadeOut(500);
    $(".inline-edit-cancel").fadeOut(500);
}

$(".inline-edit-cancel").on("mouseup", function () {
    hideInput();
});

$(".inline-edit-trigger").on("mouseup", function () {
    showInput($(this));
});

$(".inline-edit-update").on("click", function () {
    //call function to update 
    updateElementProperty();
    //printProperty();
    hideInput();
});

