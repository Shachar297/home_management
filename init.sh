echo "Starting compose docker services..."

# Delete the existing docker containers.
docker-compose down

# Compose the docker-compose file
docker-compose up -d --build

# Create database files according to the schemes in mysql folder. (.sql)
cd mysql
chmod 777 init-db.sh
# Let all the services be run and loaded before initializing the database tables.
sleep 25 
./init-db.sh

# Restart the backend container.
docker restart home_management_backend_1
sleep 25
# Get logs to test.
docker logs home_management_backend_1
# Expected output : "We are connected to MYSQL !"
