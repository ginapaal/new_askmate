function listQuestions(){
    $.getJSON('/questions', function(result) {
        for (var i=0; i < result.length; i++) {
            $('#tbody').append(`<tr>
                                <td class="title_click"><a class="link" href="/question/${result[i]['id']}" data-id="${result[i]['id']}">${result[i]['title']}</a></td>
                                <td>${result[i]['vote_number']}</td>
                                </tr>`);
        }

        $('a').click(function() {
            var questionID = $(this).data('id');
            alert(questionID);

            $.ajax({
                url: `question/${questionID}/answers`,
                method: "POST",
                data: {
                    questionID: questionID
                },
                success: function(){
                    console.log('question_id sent');
                }
            });
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