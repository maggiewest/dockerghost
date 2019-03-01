node {
    echo 'The pipeline started'
    sh('sh export DOCKER_HOST="tcp://localhost:4381"')
    checkout scm
    echo 'Building node image...'
    def customImage = docker.build("my-image:${env.BUILD_ID}")
    echo 'Running Image...'
    customImage.push()
   
}
