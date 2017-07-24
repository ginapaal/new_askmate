function newAnswerForm() {
    var answerForm = $('#new_answer_text');
    var answerButton = $("#answer-button");

    answerButton.on('click', function() {
        answerForm.toggle('slow');
    });

    var submitAnswer = $('#sendAnswer');
    submitAnswer.on('click', function(event) {
        event.stopImmediatePropagation();
        answerForm.hide(500);
    });
}

function main() {
    newAnswerForm();
}

$(document).ready(main);