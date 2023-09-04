pipeline{  
    environment {
    registry = "<Your-registry-username>/node-helloworld"
    registryCredential = '<dockerhub_credentials_id_in_jenkins>'
    dockerImage = ''
    }
    agent any
    stages {
        stage('Build'){
            steps{
                script{
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
            // stage('Push Image') {
            //     steps{
            //         script {
            //             docker.withRegistry( '', registryCredential){                            
            //             dockerImage.push()
            //             }
            //         }
            //     } 
            // }
            stage('Deploying into k8s'){
            steps{
                sh 'kubectl apply -f deployment.yml' 
            }
        }
    }
}