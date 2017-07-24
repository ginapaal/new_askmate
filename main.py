from flask import Flask, render_template, redirect, request, url_for
import database_connection
import question_queries
import answer_queries
from datetime import datetime
import json


app = Flask('askmate')


@app.route("/questions", methods=["GET", "POST"])
def question_data():
    result = question_queries.list_all_question(database_connection.connect_to_db())
    result = json.dumps(result)
    return result


@app.route("/", methods=["GET", "POST"])
def list_questions():
    return render_template("main.html")


@app.route("/ask_new_question", methods=["GET", "POST"])
def ask_new_question():
    sub_time = datetime.now()
    title = request.form['question_title']
    message = request.form['question_message']
    question_queries.new_question(database_connection.connect_to_db(), sub_time, title, message)

    return redirect("/")


@app.route("/question/<question_id>/answers", methods=["GET", "POST"])
def answer_data(question_id):
    question_id = request.form['questionID']
    print(question_id)
    result = answer_queries.answer_data(database_connection.connect_to_db(), question_id)
    result = json.dumps(result)
    return result


@app.route("/question/<question_id>", methods=["GET", "POST"])
def list_answers(question_id):
    return render_template("answers.html", question_id=question_id)


@app.route("/question/<question_id>/new_answer", methods=["GET", "POST"])
def new_answer(question_id):
    sub_time = datetime.now()
    message = request.form['answer_message']
    answer_queries.new_question(database_connection.connect_to_db(), sub_time, question_id, message)

    return redirect("/")


if __name__ == '__main__':
    app.run(debug=True)