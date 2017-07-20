function listQuestions(){
    $.getJSON('/questions', function(result) {

        for (var i=0; i < result.length; i++) {
            $('.container').append(`<li>${result[i]['title']}</li>`);
        }
    });
}

function askNewQuestion(){
    var askNewQuestionButton = $('#ask-button');

    askNewQuestionButton.on('click', function() {
        $('#newQuestionText').toggle('slow');

    var submitButton = $('#sendQuestion');        
    submitButton.on('click', function(event){
            $('#newQuestionText').hide(500);

        })
    })
}

function main() {
    listQuestions();
    askNewQuestion();
}

$(document).ready(main);