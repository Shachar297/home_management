minikube start --insecure-registry="host.minikube.internal:8083"
minikine addons enable registriy
minikube addons configure registry-creds #1. no 2.no 3.y 4. host.minikube.internal:8083 5. n


kubectl kustomize . | kubectl apply -f -

kubectl get po -A --watch