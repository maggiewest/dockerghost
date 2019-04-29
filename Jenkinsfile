#!groovy 

pipeline {
	agent any 

	environment {
		/*HOST = "ec2-18-222-105-140.us-east-2.compute.amazonaws.com"*/
		DEPLOY_DIR = "dockerghost"
		/*commitChangeset = sh(returnStdout: true, script: 'git log -1 --pretty=%B')*/

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
            		sh "rm -rf $DEPLOY_DIR"
			
		}
	   	success {
		    slackSend channel: 'pipeline-testing', message: "Deployed application SUCCESS. \n See ${env.JOB_NAME} ${env.BUILD_NUMBER} (<$BUILD_URL|Open>)"
		    
	    	}
	    	failure {
		    slackSend channel: "pipeline-testing", message: "Deployed application FAILURE. \n See ${env.JOB_NAME} ${env.BUILD_NUMBER} (<$BUILD_URL|Open>)"
	    	   
		}
    	}
 }








