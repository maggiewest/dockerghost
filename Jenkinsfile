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
            		sh "rm -rf $DEPLOY_DIR $TEST_DIR"
       	 	}
	   	success {
		    slackSend channel: "#wpscan", message: "Build Successful: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
	    	}
	    	failure {
		    slackSend channel: "#wpscan", message: "Build Failed: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
	    	}
    	}
 }








