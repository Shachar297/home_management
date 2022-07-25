docker build -t mysql-local .  

docker run -d \
    -p 3306:3306 \
    --name mysql-local \
    -v mysql-vol \
    mysql-local

chmod +x init-db.sh

# ./init-db.sh