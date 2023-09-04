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
                    sh 'npm install'
                    sh 'npm audit fix --force'
                }
            }   
        }
        // stage('build the image'){
        //     steps{
        //         script{
        //             sh 'docker build -t nodeapp ./App'
        //         }
        //     }   
        // }
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