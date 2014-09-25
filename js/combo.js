function Check() {
    for (var key in answers) {
        if ($('#' + key).val() == answers[key]) {
            $('#' + key).css("background-color", "green");
        }
        else {
            $('#' + key).css("background-color", "red");
        }

        $('#' + key).prop("disabled", true);
    }

    $("button").find("i").attr('class', 'fa fa-undo');
    $("button span").text(' Retry');
    $("button").attr('onClick', 'Retry()');

}
;
var answers = new Array();
answers['a'] = "element";
answers['b'] = "left";
answers['c'] = "the last";
function Retry() {
    for (var key in answers) {
        $('#' + key).css("background-color", "white");
        $('#' + key).val('');

        $('#' + key).prop("disabled", false);
    }
    $("button").find("i").attr('class', 'fa fa-key');
    $("button span").text(' Check');
    $("button").attr('onClick', 'Check()');
}
;