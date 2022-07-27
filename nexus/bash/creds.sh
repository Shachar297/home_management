# Get Nexus admin initial password.




containerName="docker_nexus_1"
echo $containerName
nexusContainerID=$(docker ps -aq --filter="NAME=$containerName")
export userPass=$(docker container exec $nexusContainerID cat nexus-data/admin.password; echo)
echo $userPass