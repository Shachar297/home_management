baseDir=$(pwd)

NEXUS_BASE_FOLDER=../docker
debugMode=0

# In debug mode (POC), remove all existing images, containers, volumes to test behaviors.

cd $NEXUS_BASE_FOLDER
if [[ debugMode -eq 1 ]]; then
    echo "Debug Mode : In debug mode (POC), remove all existing images, containers, volumes to test behaviors. "
    docker-compose down
    docker system prune -f && docker image prune --all && docker volume rm $(docker volume ls -q) -f
fi

# Build nexus container.

docker-compose -f $NEXUS_BASE_FOLDER/docker-compose.yml up -d
sleep 60

# Set required nexus configuration.
cd $NEXUS_BASE_FOLDER/scripts/
sh setNexusConfg.sh

