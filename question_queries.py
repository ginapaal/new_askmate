from database_connection import connect_to_db
import psycopg2.extras


def list_all_question(conn):
    cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cursor.execute("""SELECT id, vote_number, title, message FROM questions ORDER BY submission_time DESC;""")
    rows = cursor.fetchall()
    return rows


def new_question(conn, submission_time, title, message):
    cursor = conn.cursor()
    cursor.execute("""INSERT INTO questions (submission_time, title, message) VALUES (%s, %s, %s);""", (submission_time, title, message))
