function listQuestions(){
    $.getJSON('/questions', function(result) {
        for (var i=0; i < result.length; i++) {
            $('#tbody').append(`<tr>
                                <td class="title_click" data-id="${result[i]['id']}"><a href="/question/${result[i]['id']}">${result[i]['title']}</a></td>
                                <td>${result[i]['vote_number']}</td>
                                </tr>`);
        }
    });
}

function askNewQuestion(){
    var askNewQuestionButton = $('#ask-button');
    askNewQuestionButton.on('click', function() {
        $('#newQuestionText').toggle('slow');

    var submitButton = $('#sendQuestion');        
    submitButton.on('click', function(event){
        event.stopImmediatePropagation();
        $('#newQuestionText').hide(500);
        });
    });
}



function main() {
    listQuestions();
    askNewQuestion();
}

$(document).ready(main);