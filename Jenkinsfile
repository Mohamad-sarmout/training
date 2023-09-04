pipeline{  
    agent any
    tools { 
        nodejs "node"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('install dependencies'){
            steps{
                script{
                    sh 'npm install'
                }
            }   
        }
        stage('build the image'){
            steps{
                script{
                    sh 'docker build -t nodeapp ./App'
                }
            }   
        }
        stage('Building image') {
            steps{
                script {
                    dockerImage = docker.build registry + ":latest"
                    }
            }
        }
    }
}