pipeline{  
    agent any
    tools { 
        nodejs "node"
    }
    environment {
        registry = "mohamadsarmout/nodeapp"
        registryCredential = 'dockerhub'
        dockerImage = ''
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
                    sh 'ls'
                    sh 'npm install'
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
        stage('Push Image') {
            steps{
                script {
                    docker.withRegistry( '', registryCredential){                            
                    dockerImage.push()
                        }
                    }
                } 
            }
        stage('Deploying + add services into k8s'){
            steps{
                sh 'cd k8s'
                sh 'kubectl apply -f deployment.yml' 
                sh 'kubectl apply -f service-internal.yml' 
                sh 'kubectl apply -f service-nodeport.yml' 
            }
        }
    }
}