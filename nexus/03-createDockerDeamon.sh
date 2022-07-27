baseDir=$1
NEXUS_VM_IP="localhost"
os=$(uname -s)

echo '  
{
  "features": {
    "buildkit": true
  },
  "insecure-registries": [
    "'"$NEXUS_VM_IP:8081"'",
    "'"$NEXUS_VM_IP:8083"'"
  ],
  "experimental": false,
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  }
}
    '> $baseDir/aws/rancher/config/daemon.json

if [[ $os -eq "Linux" ]]; then
# Handle Linux distribution
  if [[ -f /etc/docker/daemon.json ]]; then
      rm /etc/docker/daemon.json
      cp $baseDir/aws/rancher/config/daemon.json /etc/docker/
      sudo service docker stop
      sudo service docker start
      sudo systemctl disable docker
      sudo systemctl enable docker
  fi  
fi
 
# Handle Mac OS X distribution

if [[ $os -eq "Darwin" ]]; then

  if [[ -f ~/.docker/daemon.json ]]; then
      echo "-----------"
      rm ~/.docker/daemon.json
      cp $baseDir/aws/rancher/config/daemon.json ~/.docker/
        echo "Restarting Docker"
        osascript -e 'quit app "Docker"'; open -a Docker ; while [ -z "$(docker info 2> /dev/null )" ]; do printf "."; sleep 1; done; echo ""
        sleep 10
        docker ps
  fi  
fi

sleep 60


docker ps
docker images