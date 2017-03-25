//var handleColors = function () {
//    var setColorBlock = function () {
//        var $colorBlock = $(".color-block");
//        $.each($colorBlock, function () {
//            var color = $(this).find(".color-block-text").text();
//            $(this).css("background-color", color);
//        });
//    };
//    var copyColor = function () {
//        $(".color-block").on("click", function () {
//            window.prompt('Copy to Clipboard: Ctrl+C then Enter', $(this).children(".color-block-text").text());
//        })
//    }

//    //handleColor Calls
//    $(document).on("keyup", function () {
//        setColorBlock();
//    })
//    setColorBlock();
//    copyColor();
//}


var hexDigits = new Array
    ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    rgb = rgb.replace("a", "");
    rgb = rgb.split(",");
    rgb = rgb[0] + "," + rgb[1] + "," + rgb[2].split(")")[0] + ")";
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

var printProperty = function () {
    var $printProperty = $(".property-printer");

    var getElementProperty = function ($element, property) {
        return $element.eq(0).css((property));
    }

    var getElementProperties = function ($element, propertyArray) {
        var elementText = "";
        for (i = 0; i < propertyArray.length; i++) {
            elementText += getElementProperty($element, propertyArray[i]);
            if (i < (propertyArray.length - 1)) {
                elementText += ", ";
            }
        }
        return elementText;
    }

    $.each($printProperty, function () {
        var displayClass = $(this).attr("data-element-to-display");
        var dataPropertyArray = $(this).attr("data-element-property").split(';');
        (displayClass === undefined) ? ($(this).append(getElementProperties($(this), dataPropertyArray))) : $(this).append((getElementProperties($(displayClass).eq(0), dataPropertyArray)));

    })

}

var renderColorPalette = function (target, colorClass) {
    for (var i = 9; i > 0; i--) {
        $(target).append("<div class='" + colorClass + " color-darken-" + i + "'>.color-darken-" + i + "</div>");
    }
    $(target).append("<p>&nbsp;</p><div class='" + colorClass + "'>." + colorClass + "</div><p>&nbsp;</p>");

    for (var i = 1; i < 10; i++) {
        $(target).append("<div class='" + colorClass + " color-lighten-" + i + "'>.color-lighten-" + i + "</div>");
    }
}

var handleSlideToggle = function () {
    $(".slide-toggle-trigger").on("click", function () {
        $(this).siblings(".slide-toggle-content").slideToggle();
    })
}

var setColorPickerColor = function () {
    $colorPicker = $(".color-picker");
    $colorPicker.each(function () {
        var value = $(this).siblings(".property-text").text().trim();
        if (value != null) {
            value = rgb2hex(value);
        }
        $(this).val(value);
    })
}

$(document).ready(function () {
    printProperty();
    colorShader();
    handleSlideToggle();
    setColorPickerColor();
});