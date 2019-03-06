node {
    echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
    echo "Checking out repo..."
    checkout scm

    docker.build('docker-gi-test').inside(--volume=/var/run/docker.sock:/var/run/docker.sock") {
   // The build here

        stage('Test') {
            sh 'node --version'
        }
    }
}







