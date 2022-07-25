#!/bin/bash
echo $MYSQL_ROOT_PASSWORD

DB_NAME="home"

mysql -h 127.0.0.1 -u root -p123456 -e "CREATE DATABASE $DB_NAME"

mysql -h 127.0.0.1 -u root -p123456 $DB_NAME < home_apartments.sql
mysql -h 127.0.0.1 -u root -p123456 $DB_NAME < home_buy_items.sql
mysql -h 127.0.0.1 -u root -p123456 $DB_NAME < home_categories.sql
mysql -h 127.0.0.1 -u root -p123456 $DB_NAME < home_shopping_list.sql
mysql -h 127.0.0.1 -u root -p123456 $DB_NAME < home_users.sql
mysql -h 127.0.0.1 -u root -p123456 $DB_NAME < home_fixes.sql