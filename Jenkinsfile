node {
    echo 'The pipeline started'

    checkout scm
    echo 'Building node image...'
    def customImage = docker.build("my-image:${env.BUILD_ID}")
    echo 'Running Image...'
    customImage.push()
   
}
