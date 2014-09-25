var answers = new Array();
answers[0] = "das";
answers[1] = "der";
answers[2] = "die";
$(document).ready(function() {
    $("div").focusin(function() {
        $(this).find("input").css("background-color", "white");
    });
    $("div").focusout(function() {
        if ($(this).find("input").val() != "") {
            if ($(this).find("input").val() == answers[$(this).find("input").attr('id')]) {
                $(this).find("input").css("background-color", "green");
            }
            else {
                $(this).find("input").css("background-color", "red");
            }
        }
    });
});
function Retry() {
    for (var key in answers) {
        $('#' + key).css("background-color", "white");
        $('#' + key).val('');
    }
}
;