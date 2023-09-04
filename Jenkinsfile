pipeline{  
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                // https://github.com/Mohamad-sarmout/training.git
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
                    sh 'docker build -t nodeapp .'
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