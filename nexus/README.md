# Nexus Registry

###### Push your images into your local registry.

### Pre Requirements

1. Install Docker

##### [install Docker](/requirements/installDocker.sh)

2. If you want to use the [k8s](./k8s/) Infrastructure, Install Minikube.

##### [install Kubectl](/requirements/installKubectl.sh)

##### [Install Minikube](/requirements/installMinikube.sh)

---

## Docker Usage :

1. Pleace yourself inside the [docker](/docker/) folder and execute the docker-compose file

```sh
cd docker
docker-compose up -d --build
```

## Kubernetes Usage:

1. See [k8s](/k8s/) yaml Files.
2. start minikube
3. apply the services.

```sh
minikube start
kubectl kustomize . | kubectl apply -f -
```

### If you run this script on a different machine, Take a look at the [CreateDockerDaemon.sh](./03-createDockerDeamon.sh) to config the docker insecure registries.

### After installations, you will need to create a repository [setNexusConfig.sh](./bash/setNexusConfg.sh)

### Scripts under [bash](/bash/) folder use the [config](/config/) as the configuration JSON files.

---

### Configuring the Docker daemon manually

1. Take a loog at the docker daemon file

```sh
# Mac
    sudo vim ~/.docker/daemon.json
# Linux
    sudo vim /etc/docker/daemon.json
```

2. What you want to see is that following lines

```json
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "features": {
    "buildkit": true
  },
  "insecure-registries": ["<YOUR_NEXUS_IP>:8081", "<YOUR_NEXUS_IP>:8083"]
}
```

3. After configuring this file, restart docker.

```sh
# Mac
    osascript -e 'quit app "Docker"'; sleep 5; open -a Docker ; while [ -z "$(docker info 2> /dev/null )" ]; do printf "."; sleep 1; done; echo ""
    sleep 10
# Linux
    sudo systemctl restart docker
# Check Docker is running
    docker ps
```

---

### Using the Nexus Registry

1. Get The Inital Admin password

```sh
IFS='/' read -ra ADDR <<< "${PWD}"
for i in "${ADDR[@]}"; do
  # process "$i"
  currentDir=${ADDR[-2]}
done

containerName="${currentDir}_nexus_1"
echo $containerName
nexusContainerID=$(docker ps -aq --filter="NAME=$containerName")
export userPass=$(docker container exec $nexusContainerID cat nexus-data/admin.password; echo)
echo $userPass
```

2.

| Nexus IP                        | Nexus Repo IP                   | docker pull command                         | username | password         |
| ------------------------------- | ------------------------------- | ------------------------------------------- | -------- | ---------------- |
| http://YOUR_NEXUS_HOST_IP:8081/ | http://YOUR_NEXUS_HOST_IP:8083/ | docker pull YOUR_NEXUS_HOST_IP:8083/[image] | admin    | INITIAL_PASSWORD |

3. Login to the Nexus via docker

```sh
./bash/creds.sh
# inital password should be outputed
docker login -u admin -p <OUTPUT_PASSWORD> <NEXUS_IP>:<REPOSITORY_PORT>
```

4. Pushing images

```sh
docker pull busybox
docker tag busybox <NEXUS_IP>:<REPOSITORY_PORT>/busybox
docker push <NEXUS_IP>:<REPOSITORY_PORT>/busybox
```

5. Pulling Images From Nexus

```sh
docker pull <NEXUS_IP>:<REPOSITORY_PORT>/busybox
```

### Kubernetes Usage :

1. Your Deployment should look like this in order for the cluster to pull images from the nexus.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: busybox
spec:
  replicas: 1
  selector:
    matchLabels:
      app: busybox
  template:
    metadata:
      labels:
        app: busybox
    spec:
      restartPolicy: "Always"
      containers:
        - name: busybox
          image: <MY_NEXUS_HOST_IP:NEXUS_REPOSITORY_IMAGE>/busybox:latest
```

```sh
kubectl kustomize . | kubectl apply -f -
```
