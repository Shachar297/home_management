DB_NAME="home"

mysql_pod="mysql-0"

echo "mysql container id : $mysql_pod" 
echo "Crating database "$DB_NAME""

sleep 10

echo "CREATE DATABASE "$DB_NAME";" | docker exec -u 0 -i $mysql_pod mysql -u root -p123456

echo "Crating tables..."

sleep 5 

cat home_apartments.sql     | docker exec -u 0 -i $mysql_pod mysql -u root -p123456 "$DB_NAME"
cat home_buy_items.sql      | docker exec -u 0 -i $mysql_pod mysql -u root -p123456 "$DB_NAME"
cat home_categories.sql     | docker exec -u 0 -i $mysql_pod mysql -u root -p123456 "$DB_NAME"
cat home_shopping_list.sql  | docker exec -u 0 -i $mysql_pod mysql -u root -p123456 "$DB_NAME"
cat home_users.sql          | docker exec -u 0 -i $mysql_pod mysql -u root -p123456 "$DB_NAME"
cat home_fixes.sql          | docker exec -u 0 -i $mysql_pod mysql -u root -p123456 "$DB_NAME"

echo "Testing database initialization..."

sleep 5

echo "SELECT * FROM home.users" | docker exec -u 0 -i $MYSQL_CONTAINER_ID mysql -u root -p123456 "$DB_NAME"
