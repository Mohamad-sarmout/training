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
        stage('Build and Push Docker Image') {
            steps {
                // Build and push your Docker image to a container registry
                script {
                    sh "echo wselt la hon"
                    // docker.build('nodeapp:v3', '-f Dockerfile .')
                    // docker.withRegistry('https://your-registry-url', 'your-registry-credentials') {
                    //     docker.image('your-docker-image:tag').push()
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                // Apply your Kubernetes YAML files to create Deployment and Service
                sh "kubectl apply -f deployment.yml"
                sh "kubectl apply -f service-internal.yml"
                sh "kubectl apply -f service-nodeport.yml"
            }
        }
    }
}