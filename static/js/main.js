function listQuestions(){
    $.getJSON('/questions', function(result) {
        for (var i=0; i < result.length; i++) {
            $('#tbody').append(`<tr>
                                <td class="title_click" data-id="${result[i]['id']}">${result[i]['title']}</td>
                                <td>${result[i]['vote_number']}</td>
                                </tr>`);
        }
    });

    $("#tbody").on("click", "tr", function() {
        var questionId = $(this).find('td:first').data('id');

        $.ajax({
            url: `/question/{{ question_id }}`,
            method: "POST",
            data: {
                questionId: questionId
            },
            success: function() {
                console.log(questionId);
            }
        });
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