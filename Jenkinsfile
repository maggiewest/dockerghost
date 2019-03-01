pipeline {
    agent {
        dockerfile {
            // args "-v /tmp:/tmp -p 8000:8000"
        }
    }
    stages {
        stage("foo") {
            steps {
                sh 'echo "Building Node App...."'
            }
        }
    }
}
