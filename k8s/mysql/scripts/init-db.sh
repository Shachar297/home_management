DB_NAME="home"

mysql_pod="mysql-0"

echo "mysql container id : $mysql_pod" 
echo "Crating database "$DB_NAME""

sleep 10

echo "CREATE DATABASE "$DB_NAME";" | kubectl exec -it $mysql_pod -n mysql -- mysql -u root -p123456

echo "Crating tables..."

sleep 5 

cat home_apartments.sql     | kubectl exec -it $mysql_pod -n mysql -- mysql -u root -p123456 "$DB_NAME"
cat home_buy_items.sql      | kubectl exec -it $mysql_pod -n mysql -- mysql -u root -p123456 "$DB_NAME"
cat home_categories.sql     | kubectl exec -it $mysql_pod -n mysql -- mysql -u root -p123456 "$DB_NAME"
cat home_shopping_list.sql  | kubectl exec -it $mysql_pod -n mysql -- mysql -u root -p123456 "$DB_NAME"
cat home_users.sql          | kubectl exec -it $mysql_pod -n mysql -- mysql -u root -p123456 "$DB_NAME"
cat home_fixes.sql          | kubectl exec -it $mysql_pod -n mysql -- mysql -u root -p123456 "$DB_NAME"

echo "Testing database initialization..."

sleep 5

echo "SELECT * FROM home.users" | kubectl exec -it $mysql_pod -n mysql -- mysql -u root -p123456 "$DB_NAME"
