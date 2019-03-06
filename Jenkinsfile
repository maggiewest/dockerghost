#!groovy 

pipeline {
	agent any 

	environment {
		HOST = "ec2-18-222-105-140.us-east-2.compute.amazonaws.com"
		DEPLOY_DIR = "dockerghost"
		//TEST_DIR = "tests"
	}

	stages {
		stage('Checkout') {
			steps {
				checkout scm
			}
		}
        	stage('GI Tests') {
			steps {
				echo "Starting Tests"
				sh """
					sudo docker build -t my-app .
					sudo docker run my-app 
				"""
			}
		}
       
            }
    post {
	    always {
		    echo "Finished test"
		    sh "rm -rf $DEPLOY_DIR"
	    }
	    /* success {
            	slackSend channel: "#pipeline-testing", 
		color: "good", 
		message: "Deployed application SUCCESS. See ${env.JOB_NAME} ${env.BUILD_NUMBER} (<$BUILD_URL|Open>). \n WebApp deploy to <$HOST:5000> :yay:"
	    }
	    failure {
		slackSend channel: "#pipeline-testing",
		color: "danger",
		message: "Deploy FAILED. See ${env.JOB_NAME} ${env.BUILD_NUMBER} (<$BUILD_URL|Open>)"
	    }*/
    }
}








