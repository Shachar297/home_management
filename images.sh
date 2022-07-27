images=("frontend" "backend" "mysql")
dockerhuburl="host.minikube.internal:8083"
for image in "${images[@]}" 
do

    echo "home_management_$image"
    docker tag "home_management_$image" "$dockerhuburl/home_management_$image"
done


kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=/Users/shacharovadia/.docker/config.json \
    --type=kubernetes.io/dockerconfigjson