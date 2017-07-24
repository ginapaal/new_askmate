from database_connection import connect_to_db
import psycopg2.extras


def answer_data(conn, question_id):
    cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cursor.execute("""SELECT id, vote_number, message FROM answers WHERE question_id = %s;""", (question_id,))
    rows = cursor.fetchall()
    return rows


def new_question(conn, submission_time, question_id, message):
    cursor = conn.cursor()
    cursor.execute("""INSERT INTO answers (submission_time, question_id, message) VALUES (%s, %s, %s);""", (submission_time, question_id, message))