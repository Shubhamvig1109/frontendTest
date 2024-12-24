Documentation Regarding Deploying Nextjs project on EC2 instance

Create Dockerfile
Create .env
Create yml file as shows
Put the details accordingly

On Ec2 instance 
sudo apt-get update
sudo apt-get install docker.io -y
sudo systemctl start docker
docker ps #to check running
sudo chmod 666 /var/run/docker.sock
sudo systemctl enable docker
docker --version

runner on ec2 instance steps
-Go to repo
-Go to settings
-Go to Actions
-Go to runners
-Click on new self hosted runner
-Select Linux
RUN THE BELOW COMMANDS


# Just press Enter on everything
Download
# Create a folder
mkdir actions-runner && cd actions-runner
# Download the latest runner package
curl -o actions-runner-linux-x64-2.320.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.320.0/actions-runner-linux-x64-2.320.0.tar.gz
# Optional: Validate the hash
echo "93ac1b7ce743ee85b5d386f5c1787385ef07b3d7c728ff66ce0d3813d5f46900  actions-runner-linux-x64-2.320.0.tar.gz" | shasum -a 256 -c
# Extract the installer
tar xzf ./actions-runner-linux-x64-2.320.0.tar.gz

Configure
./config.sh --url https://github.com/Shubhamvig1109/cicd --token A3TIYP74PCXA3LSP7PYDOP3HFMSE4
sudo ./svc.sh install
sudo ./svc.sh start

# Refresh the runners page it will show your runner

From settings go to  /secrets/actions
# EC2 Public IPv4 DNS or EC2 PUBLIC IP WITH in back : 3000 AND in front http:// and create site_url for eg
# NOTE THAT TO ADD SECURITY INBOUND RULES FOR 3000 PORT OR WHATEVER
http://ecX-XX-XXX-XXX-XX.ap-south-1.compute.amazonaws.com:3000 and paste in the site_url
Add SITE_URL 
Add DOCKER_USERNAME
Add DOCKER_PASSWORD

For docker username and password just create an account on dockerhub and create an repository and just change your repo name and username on
yml file as you can see in yml file


just push the code and you will see ci cd working as expected





