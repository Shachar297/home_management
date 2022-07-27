sudo apt update 
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-compose-plugin 
sudo rm -rf /var/lib/docker 
sudo rm -rf /var/lib/containerd

sudo apt install awscli docker.io -y

# sudo apt install podman-docker

echo "-------------------------------------------------"
pwd
echo "-------------------------------------------------"

sudo service docker stop
sudo service docker start

sudo systemctl enable docker

sudo chmod +x /etc/docker
sudo mv installations/rancher/config/daemon.json /etc/docker/

sudo usermod -a -G docker ubuntu

sudo service docker stop
sudo service docker start

sudo systemctl enable docker

# sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-`uname -s`-`uname -m` | sudo tee /usr/local/bin/docker-compose > /dev/null

# sudo chmod +x /usr/local/bin/docker-compose

# sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose


echo "--------------------------------*************---------------------------------------------"
echo "--------------------------------*************---------------------------------------------"
echo "--------------------------------*************---------------------------------------------"

docker -v

 
#  docker login -u $dockerUser -p $dockerPassword