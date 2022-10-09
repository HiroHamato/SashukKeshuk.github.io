from config import db_name, host, user, password
import pymysql

try:
    connection = pymysql.connect(
        host=host,
        port=3306,
        user=user,
        password=password,
        database=db_name,
        cursorclass=pymysql.cursors.DictCursor
    )
    print("connected")
    try:
        with connection.cursor() as cursor:
            #new_table_query = "CREATE TABLE `users` (id int AUTO_INCREMENT, name varchar(32), password varchar(32), email varchar(32), PRIMARY KEY (id));"
            insert_line_query = "INSERT INTO `articles` (text, cost, type, house_type, rooms, city) VALUES ('cool house!', 999, 1, 1, '3+1.5', 'Stambool');"
            select_all_lines = "SELECT * FROM `users`"
            edit_data = "UPDATE `articles` SET text = 'XxxX' WHERE id = 1;"
            delete_query = "DELETE FROM `articles` WHERE id = 1;"
            #drop_query = "DROP TABLE `users`;"

            cursor.execute(delete_query)
            connection.commit()
            #lines = cursor.fetchall()
            #print('#' * 20)
            #for line in lines:
            #    print(line)
            #print('#' * 20)
            #for save after insert/edit/delete data in db - connection.commit()
            print("success")
    finally:
        connection.close()
except Exception as e:
    print("failed to connect\n")
    print(e)