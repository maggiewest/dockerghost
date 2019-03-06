#!groovy 

pipeline {
	agent any 

	environment {
		HOST = "ec2-18-222-105-140.us-east-2.compute.amazonaws.com"
		DEPLOY_DIR = "dockerghost"
		TEST_DIR = "tests"
	}

	stages {
		stage('Checkout') {
			steps {
				checkout scm
			}
		}
        stage('Unit Tests') {
			steps {
				echo "Starting Tests"
				sh """
					sudo docker build -t my-app .
					sudo docker run my-app 
				"""
			}
		}
        stage('Prepare for Deployment') {
			steps {
				sh "mkdir $DEPLOY_DIR"
				sh "rsync -vaz --exclude=$DEPLOY_DIR . $DEPLOY_DIR"
				sh "rm -rf $DEPLOY_DIR/.git"
			}
		}
        stage('Deploy') {
                    steps {
                        timeout(time: 30, unit: 'SECONDS'){
                            input(message:'Are you sure you want to deploy to Production?')
                        }
                        echo "Deploying to $HOST"
                        sh "scp -r $DEPLOY_DIR $HOST:/home/jenkins/"
                        sh """
                            # Just used this as a one-off to accept the host key on the first run.
                            ssh -o StrictHostKeyChecking=no $HOST /bin/true

                            ssh $HOST chmod +x $DEPLOY_DIR/*.sh $DEPLOY_DIR/*.py
                            ssh $HOST ./$DEPLOY_DIR/run.sh
                        """
                    }
                }
            }
    post {
	    always {
		    echo "Finished test"
		    sh "rm -rf $DEPLOY_DIR"
	    }
	    success {
            	slackSend channel: "#pipeline-testing", 
		color: "good", 
		message: "Deployed application SUCCESS. See ${env.JOB_NAME} ${env.BUILD_NUMBER} (<$BUILD_URL|Open>). \n WebApp deploy to <$HOST:5000> :yay:"
	    }
	    failure {
		slackSend channel: "#pipeline-testing",
		color: "danger",
		message: "Deploy FAILED. See ${env.JOB_NAME} ${env.BUILD_NUMBER} (<$BUILD_URL|Open>)"
	    }
    }
}








