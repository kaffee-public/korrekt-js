var arr = new Array();
arr['a'] = new Array();
arr['a'][0] = true;
arr['a'][1] = false;
arr['a'][2] = false;
arr['a'][3] = true;
arr['b'] = new Array();
arr['b'][0] = false;
arr['b'][1] = true;
arr['b'][2] = true;
arr['b'][3] = false;
function Check() {

    for (var form in arr) {
        for (var id in arr[form]) {
            var curr = $('#' + form + " " + '#' + id);
            if (curr.is(':checked') != arr[form][id])
            {
                curr.parent().find("i").attr('class', 'fa fa-times');
            }
            curr.parent().find("i").show();
        }
    }
}
;

function Retry() {
    $("input").parent().find("i").hide();
    $("button").find("i").attr('class', 'fa fa-key');
    $("button span").text('Check');
    $("button").attr('onClick', 'Check()');
}
;