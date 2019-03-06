node {
    
    echo 'The pipeline started'
    sh('sh export DOCKER_HOST="tcp://localhost:4381"')
   
    echo 'Building node image...'
    //def customImage = docker.build("my-image:${env.BUILD_ID}")
   // echo 'Running Image...'
    //customImage.push()
   
    stage('Prepare') {
        checkout scm
    }
    stage('Test') {
        def testContainer = docker.image('ghostinspector:test-runner-node')

        def testContainer = docker.image('node:4.6')
        testContainer.pull()
    }
    
    try {
        notifySlack('STARTED')
        stage('Running Tests') {
            def testContainer = docker.image('node:4.6')
            testContainer.pull()
            //  testContainer.inside {
            // sh 'npm install --only=dev'
            // sh 'npm test'
            // }
            currentBuild.result = "SUCCESS";
        }
    }
    catch (Exception err) {
     currentBuild.result = "FAILURE";
     def subject = "${env.JOB_NAME} - Build #${env.BUILD_NUMBER} ${currentBuild.result}"
       
        
    }
}
def notifySlack(String buildStatus = 'STARTED') {
    // Build status of null means success.
    buildStatus = buildStatus ?: 'SUCCESS'

    def color

    if (buildStatus == 'STARTED') {
        color = '#D4DADF'
    } else if (buildStatus == 'SUCCESS') {
        color = '#BDFFC3'
    } else if (buildStatus == 'UNSTABLE') {
        color = '#FFFE89'
    } else {
        color = '#FF9FA1'
    }

    def msg = "${buildStatus}: `${env.JOB_NAME}` #${env.BUILD_NUMBER}:\n${env.BUILD_URL}"
    slackSend channel: "#pipeline-testing", color: color, message: msg)
    //slackSend(color: color, message: msg)
}










