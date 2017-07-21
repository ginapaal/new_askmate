from flask import Flask, render_template, redirect, request
import database_connection
import question_queries
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


@app.route("/question/<question_id>", methods=["GET", "POST"])
def list_answers(question_id):
    return render_template("answers.html", question_id=question_id)


if __name__ == '__main__':
    app.run(debug=True)