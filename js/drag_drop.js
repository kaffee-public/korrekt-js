$(function() {
    $("#draggable").draggable({snap: ".ui-widget-header", revert: "invalid"});
    $("#draggable2").draggable({snap: ".ui-widget-header", revert: "invalid"});
    $("#draggable3").draggable({snap: ".ui-widget-header", revert: "invalid"});
    $("#draggable4").draggable({snap: ".ui-widget-header", revert: "invalid"});
    $("#draggable5").draggable({snap: ".ui-widget-header", revert: "invalid"});
    $("#snaptarget").droppable({accept: ".draggable"});
    $("#snaptarget2").droppable({accept: ".draggable"});
    $("#snaptarget3").droppable({accept: ".draggable"});
    $("#snaptarget4").droppable({accept: ".draggable"});
});