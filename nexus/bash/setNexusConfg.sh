source creds.sh

if [[ $userPass -eq "" ]]; then
userPass=1234
fi

echo "----- Nexus admin password :   $userPass"

# Create A new Repository.
curl -X POST \
    -H "Content-Type: application/json" \
    -d "@../config/repo.json" \
    -u admin:1234 \
    http://localhost:8081/service/extdirect

# Set Docker Realm for docker authentication.
curl \
    -X POST \
    -H "Content-Type: application/json" \
    -d "@../config/dockerToken.json" \
    -u admin:1234 \
    http://localhost:8081/service/extdirect

# Login to docker


docker login -u admin -p $userPass host.minikube.internal:8083